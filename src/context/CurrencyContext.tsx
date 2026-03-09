'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc, runTransaction, collection, serverTimestamp, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { ContentId } from '@/types/iap';
import { CONTENT_COSTS } from '@/data/iap/products';

interface CurrencyContextType {
  balance: number;
  loading: boolean;
  unlockedContent: string[];
  refreshBalance: () => Promise<void>;
  spendCurrency: (contentId: ContentId, type: 'content') => Promise<boolean>;
  addCurrency: (amount: number) => Promise<void>;
  isContentUnlocked: (contentId: string) => boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [unlockedContent, setUnlockedContent] = useState<string[]>([]);

  const fetchCurrencyData = useCallback(async () => {
    if (!user || !db) {
      setBalance(0);
      setUnlockedContent([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      // Fetch balance
      const currencyRef = doc(db, 'users', user.uid, 'currency', 'balance');
      const currencySnap = await getDoc(currencyRef);
      if (currencySnap.exists()) {
        setBalance(currencySnap.data().balance || 0);
      } else {
        // Initialize currency doc for new users
        await setDoc(currencyRef, { balance: 0, totalEarned: 0, totalSpent: 0 });
        setBalance(0);
      }

      // Fetch unlocked content
      const unlockedRef = doc(db, 'users', user.uid, 'unlocked', 'contents');
      const unlockedSnap = await getDoc(unlockedRef);
      if (unlockedSnap.exists()) {
        const data = unlockedSnap.data();
        setUnlockedContent(Object.keys(data).filter(k => data[k]?.unlockedAt));
      } else {
        setUnlockedContent([]);
      }
    } catch (error) {
      console.error('Failed to fetch currency data:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchCurrencyData();
  }, [fetchCurrencyData]);

  const refreshBalance = useCallback(async () => {
    await fetchCurrencyData();
  }, [fetchCurrencyData]);

  const spendCurrency = useCallback(async (contentId: ContentId, type: 'content'): Promise<boolean> => {
    if (!user || !db) return false;

    const cost = type === 'content' ? CONTENT_COSTS[contentId] : 0;
    if (!cost) return false;

    try {
      await runTransaction(db, async (transaction) => {
        const currencyRef = doc(db, 'users', user.uid, 'currency', 'balance');
        const currencySnap = await transaction.get(currencyRef);
        const currentBalance = currencySnap.exists() ? (currencySnap.data().balance || 0) : 0;

        if (currentBalance < cost) {
          throw new Error('Insufficient balance');
        }

        // 1. Deduct balance
        transaction.update(currencyRef, {
          balance: currentBalance - cost,
          totalSpent: increment(cost),
        });

        // 2. Unlock content
        const unlockedRef = doc(db, 'users', user.uid, 'unlocked', 'contents');
        transaction.set(unlockedRef, {
          [contentId]: { unlockedAt: serverTimestamp(), cost },
        }, { merge: true });

        // 3. Purchase history
        const purchaseRef = doc(collection(db, 'purchases'));
        transaction.set(purchaseRef, {
          userId: user.uid,
          contentId,
          cost,
          type,
          createdAt: serverTimestamp(),
        });
      });

      // Update local state
      setBalance(prev => prev - cost);
      setUnlockedContent(prev => [...prev, contentId]);
      return true;
    } catch (error) {
      console.error('Failed to spend currency:', error);
      return false;
    }
  }, [user]);

  const addCurrency = useCallback(async (amount: number) => {
    if (!user || !db) return;

    try {
      const currencyRef = doc(db, 'users', user.uid, 'currency', 'balance');
      const currencySnap = await getDoc(currencyRef);

      if (currencySnap.exists()) {
        const current = currencySnap.data().balance || 0;
        await setDoc(currencyRef, {
          balance: current + amount,
          totalEarned: increment(amount),
        }, { merge: true });
      } else {
        await setDoc(currencyRef, {
          balance: amount,
          totalEarned: amount,
          totalSpent: 0,
        });
      }

      setBalance(prev => prev + amount);
    } catch (error) {
      console.error('Failed to add currency:', error);
    }
  }, [user]);

  const isContentUnlocked = useCallback((contentId: string): boolean => {
    return unlockedContent.includes(contentId);
  }, [unlockedContent]);

  const value: CurrencyContextType = {
    balance,
    loading,
    unlockedContent,
    refreshBalance,
    spendCurrency,
    addCurrency,
    isContentUnlocked,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

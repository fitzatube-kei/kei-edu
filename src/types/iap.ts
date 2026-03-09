// IAP (In-App Purchase) Types

export interface CurrencyBalance {
  balance: number;
  totalEarned: number;
  totalSpent: number;
}

export type ContentId =
  | 'hangul_intermediate'
  | 'hangul_advanced'
  | 'puzzle_intermediate'
  | 'puzzle_advanced'
  | 'culture_kpop_hard'
  | 'culture_kdrama_hard'
  | 'story_busan'
  | 'story_jeju';

export type ConsumableId = 'hint' | 'wrong_answer_pass' | 'level_skip';

export interface UnlockRecord {
  unlockedAt: Date;
  cost: number;
}

export type SubscriptionPlan = 'free' | 'monthly' | 'annual';

export interface IAPProduct {
  id: string;
  type: 'currency_pack' | 'subscription' | 'content_unlock' | 'consumable';
  name: Record<string, string>;
  priceUSD: number;
  currencyAmount?: number;
  currencyCost?: number;
  featured?: boolean;
}

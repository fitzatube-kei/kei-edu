'use client';

import { useAuth as useAuthContext } from '@/context/AuthContext';

// Re-export useAuth from context for convenience
export const useAuth = useAuthContext;

// Additional auth utilities
export function useRequireAuth() {
  const auth = useAuthContext();

  return {
    ...auth,
    isAuthenticated: !!auth.user,
    isLoading: auth.loading,
  };
}

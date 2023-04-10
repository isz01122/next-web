import { cache } from 'react';
import { dehydrate, QueryClient } from '@tanstack/query-core';

export const useQueryPrefetch = () => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  return {
    prefetchQuery: async (queryKey: string[], requestFn: () => void) => {
      await queryClient.prefetchQuery(queryKey, requestFn);
      return dehydrate(queryClient);
    },
  };
};

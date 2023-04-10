'use client';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queries = {
  retry: false,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchIntervalInBackground: false,
};

const isTestEnv = process.env.NODE_ENV !== 'production';

const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries } })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isTestEnv && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;

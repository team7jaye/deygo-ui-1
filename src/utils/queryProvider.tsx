'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { FC, useState } from 'react';
type QueryProps = { children: React.ReactNode };
const ReactQueryProvider: FC<QueryProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;

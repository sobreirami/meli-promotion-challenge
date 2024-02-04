import {
  Hydrate,
  HydrateProps,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  dehydratedState?: HydrateProps['state'];
};

export const queryClient = new QueryClient();

export default function TanstackProvider({ children, dehydratedState }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

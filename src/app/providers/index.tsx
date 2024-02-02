import { DehydratedState } from '@tanstack/react-query';
import { ReactNode } from 'react';

import TanstackProvider from './tanstackProvider';

type Props = {
  children: ReactNode;
  dehydratedState?: DehydratedState;
};

export default function Providers({ children, dehydratedState }: Props) {
  return (
    <TanstackProvider dehydratedState={dehydratedState}>
      {children}
    </TanstackProvider>
  );
}

import type { ReactElement, ReactNode } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render as testingRender } from '@testing-library/react';

import TanstackProvider from '@/app/providers/tanstackProvider';

type Props = {
  children?: ReactNode;
  dehydratedState?: unknown;
};

const AllTheProviders = ({ children, dehydratedState }: Props) => (
  <TanstackProvider dehydratedState={dehydratedState}>
    {children}
  </TanstackProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => testingRender(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

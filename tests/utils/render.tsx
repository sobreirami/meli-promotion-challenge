import type { ReactElement, ReactNode } from 'react';
import type { RenderHookOptions, RenderResult } from '@testing-library/react';
import { renderHook, render as testingRender } from '@testing-library/react';

import TanstackProvider from '@/providers/TanstackProvider';

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
  options?: Omit<RenderResult, 'rerender'>
) => testingRender(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook = <TProps, TResult>(
  callback: (initialProps: TProps) => TResult,
  options?: RenderHookOptions<TProps & { initialProps?: TResult }>
) => renderHook(callback, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender, customRenderHook };

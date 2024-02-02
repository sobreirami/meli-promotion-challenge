import { HTMLAttributes, ReactNode } from 'react';

import classNameMerge from '@/utils/classNameMerge';
import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Layout({ className, children }: LayoutProps) {
  return (
    <>
      <Header />
      <main
        className={classNameMerge(
          'mx-auto w-full max-w-screen-xl bg-white',
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

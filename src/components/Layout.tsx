import { HTMLAttributes, ReactNode } from 'react';

import classNameMerge from '@/utils/classNameMerge';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

type LayoutProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Layout({ className, children }: LayoutProps) {
  return (
    <>
      <Header />
      <div
        className={classNameMerge(
          'mx-auto w-full max-w-screen-xl bg-white',
          className
        )}
        data-testid="layout"
      >
        <div className="flex">
          <Sidebar />

          <div className="w-full border-l border-border px-4 pt-6 md:px-8">
            <div className="flex flex-col gap-4">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

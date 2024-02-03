import Link from 'next/link';

import { Logo } from './logo';

export function Footer() {
  return (
    <footer
      className="border-y-1 h-80 w-full border-t border-border bg-white"
      data-testid="footer"
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 md:px-24 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-4 md:mb-0 md:gap-0">
            <div className="mb-0 flex flex-col gap-3 md:mb-14">
              <Logo />
            </div>
          </div>
          <div>
            <p className="text-textHeading mb-2 text-base font-bold md:mb-6">
              Sobre
            </p>
            <ul className="text-base font-normal text-primary">
              <li className="mb-4">
                <Link
                  href="https://mercadolivre.com.br"
                  className="underline"
                  target="_blank"
                >
                  Mercado Livre
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://developers.mercadolivre.com.br"
                  className="underline"
                  target="_blank"
                >
                  Developers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-0 sm:flex sm:items-center sm:justify-between md:mt-14">
          <span className="text-textBody2 text-sm font-normal sm:text-center">
            Desafio Técnico - Challenge Promotions
          </span>
        </div>
      </div>
    </footer>
  );
}

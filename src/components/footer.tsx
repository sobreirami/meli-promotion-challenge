import Link from 'next/link';
import Image from 'next/image';

import Placeholder from '@/assets/placeholder.svg';

export function Footer() {
  return (
    <footer className="border-y-1 h-80 w-full border-t border-border bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 md:px-24 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-4 md:mb-0 md:gap-0">
            <div className="mb-0 flex flex-col gap-3 md:mb-14">
              <Link href="/">
                <div className="flex flex-row items-center gap-1">
                  <Image
                    src={Placeholder}
                    alt="Desafio Técnico - Challenge Promotions"
                    width={60}
                  />
                  Logo
                </div>
              </Link>
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
        <div className="my-4 h-[1px] w-full bg-border md:my-8" />
        <div className="flex justify-end">
          <div className="mr-4 flex items-center">
            <input
              id="language-pt-radio"
              type="radio"
              value="pt-BR"
              name="language-radio-group"
              className="focus:ring-accentHover h-4 w-4 border-border bg-white text-accent"
            />
            <label
              htmlFor="language-pt-radio"
              className="ml-2 text-sm font-normal text-tertiary"
            >
              Português
            </label>
          </div>
          <div className="mr-4 flex items-center">
            <input
              id="language-ar-radio"
              type="radio"
              value="es-AR"
              name="language-radio-group"
              className="focus:ring-accentHover h-4 w-4 border-border bg-white text-accent"
            />
            <label
              htmlFor="language-ar-radio"
              className="ml-2 text-sm font-normal text-tertiary"
            >
              Espanhol
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
}

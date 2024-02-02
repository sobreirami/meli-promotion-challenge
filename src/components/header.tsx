import Link from 'next/link';
import Image from 'next/image';

import Placeholder from '@/assets/placeholder.svg';
import { Input } from '@/ui/input';

export function Header() {
  return (
    <nav className="h-18 border-y-1 w-full border-y border-border bg-white">
      <div className="sm:px-22 mx-auto max-w-screen-xl items-center justify-between px-4 md:px-24">
        <div className="flex flex-1 flex-row items-center justify-between py-3 md:py-5">
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

          <form className="w-2/6">
            <Input
              type="search"
              id="search"
              placeholder="Pesquisar..."
              className="block w-full rounded-lg"
              required
            />
          </form>
          <div />
        </div>
      </div>
    </nav>
  );
}

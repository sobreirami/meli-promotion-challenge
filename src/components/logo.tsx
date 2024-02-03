import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/assets/logo.jpeg';

export function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-row items-center gap-2 text-lg font-medium text-primary">
        <Image
          src={LogoImage}
          alt="Desafio Técnico - Challenge Promotions"
          width={60}
        />
        Desafio Técnico
      </div>
    </Link>
  );
}

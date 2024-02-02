import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/entities/Product';
import formatCurrencyValue from '@/utils/formatCurrencyValue';

type Props = {
  product: Product;
};

export function CardProduct({ product }: Props) {
  return (
    <Link
      href={`/${product.id}`}
      className="h-30 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-border bg-white p-4 hover:font-medium hover:text-accent md:max-w-2xl"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={90}
        blurDataURL={product.thumbnail}
        placeholder="blur"
        className="rounded-lg object-cover object-center outline-none focus:outline-none"
        height={90}
        quality={100}
        sizes="53vw"
      />
      <div className="flex flex-col items-center gap-0 text-center">
        <p>{product.title}</p>
        <p>
          {formatCurrencyValue({
            currency: product.currency ?? 'BRL',
            value: product.price,
          })}
        </p>
      </div>
    </Link>
  );
}

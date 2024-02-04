import Image from 'next/image';
import Link from 'next/link';

import formatCurrencyValue from '@/utils/formatCurrencyValue';
import { Item } from '@/entities/Item';

type Props = {
  item: Item;
};

export function CardItem({ item }: Props) {
  return (
    <Link
      href={`/${item.id}`}
      className="h-30 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-border bg-white p-4 hover:font-medium hover:text-accent md:max-w-2xl"
    >
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={90}
        blurDataURL={item.thumbnail}
        placeholder="blur"
        className="rounded-lg object-cover object-center outline-none focus:outline-none"
        height={90}
        quality={100}
        sizes="53vw"
      />
      <div className="flex flex-col items-center gap-0 text-center">
        <p>{item.title}</p>
        <p>
          {formatCurrencyValue({
            currency: item.currency ?? 'BRL',
            value: item.price,
          })}
        </p>
      </div>
    </Link>
  );
}

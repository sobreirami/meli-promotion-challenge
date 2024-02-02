import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { HomePromotion } from './types';

type Props = HomePromotion;

function PromotionItem({ id, image, link }: Props) {
  return (
    <Link className="outline-none hover:underline" href={`/buscar/${link}`}>
      <Image
        src={image}
        alt={id}
        blurDataURL={image}
        placeholder="blur"
        className="h-full w-full cursor-pointer rounded-lg object-cover object-top outline-none focus:outline-none"
        width={1088}
        height={350}
        priority
        quality={100}
        sizes="100vw"
      />
    </Link>
  );
}

export default memo(PromotionItem);

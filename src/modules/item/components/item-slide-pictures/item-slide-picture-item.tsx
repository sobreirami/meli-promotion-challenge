import Image from 'next/image';
import { memo } from 'react';
import { ItemPicture } from '@/entities/Item';

type Props = {
  picture: ItemPicture;
  handlePictureInFocus: (pictureUrl: string) => void;
};

function ItemSlidePictureItem({ picture, handlePictureInFocus }: Props) {
  function onClickPicture() {
    handlePictureInFocus(picture.url);
  }

  return (
    <figure className="h-[60px] w-[60px] rounded-lg border border-border hover:border-accent">
      <Image
        src={picture.url}
        alt="123"
        blurDataURL={picture.url}
        placeholder="blur"
        className="h-full w-full cursor-pointer rounded-lg object-contain object-center outline-none focus:outline-none"
        width={60}
        height={60}
        quality={100}
        sizes="33vw"
        onClick={onClickPicture}
      />
    </figure>
  );
}

export default memo(ItemSlidePictureItem);

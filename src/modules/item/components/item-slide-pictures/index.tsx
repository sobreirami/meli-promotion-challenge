import Image from 'next/image';
import { useCallback, useState } from 'react';

import { useItem } from '@item/hooks/useItem';
import ItemSlidePictureItem from './item-slide-picture-item';

export function ItemSlidePictures() {
  const { item } = useItem();

  const [pictureInFocus, setPictureInFocus] = useState<string>(
    item?.pictures?.[0].url ?? ''
  );

  const handlePictureInFocus = useCallback((picture: string) => {
    setPictureInFocus(picture);
  }, []);

  if (!item?.pictures) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-row gap-8">
      <div className="flex flex-col gap-4">
        {item?.pictures
          ?.slice(0, 5)
          .map((picture) => (
            <ItemSlidePictureItem
              key={picture.id}
              picture={picture}
              handlePictureInFocus={handlePictureInFocus}
            />
          ))}
      </div>
      <figure className="h-[400px] w-[400px]">
        <Image
          src={pictureInFocus}
          alt={item.title}
          blurDataURL={pictureInFocus}
          placeholder="blur"
          className="h-full w-full rounded-lg object-contain object-center focus:outline-none"
          width={400}
          height={400}
          quality={100}
          sizes="100vw"
        />
      </figure>
    </div>
  );
}

import ReactMarkdown from 'react-markdown';

import { ItemSlidePictures } from '@item/components/item-slide-pictures';
import { ItemAttributes } from '@item/components/item-attributes';

import { ItemAsideCart } from '@item/components/item-aside-cart';
import { useItem } from '@item/hooks/useItem';

export function ItemDetail() {
  const { item } = useItem();

  return (
    <div className="flex flex-row">
      <section className="flex flex-1 flex-col pr-4">
        <ItemSlidePictures />

        {!!item?.description && (
          <div>
            <h2 className="text-lg font-semibold text-primary">Descrição:</h2>
            <div className="flex flex-col gap-4 text-lg font-normal text-secondary">
              <ReactMarkdown>{item.description}</ReactMarkdown>
            </div>
          </div>
        )}

        <ItemAttributes />
      </section>
      <ItemAsideCart />
    </div>
  );
}
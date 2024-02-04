import ReactMarkdown from 'react-markdown';

import { ItemSlidePictures } from '@item/components/ItemSlidePictures';
import { ItemAttributes } from '@item/components/ItemAttributes';

import { ItemAsideCart } from '@item/components/ItemAsideCart';
import { useItem } from '@item/hooks/useItem';

export function ItemDetailScreen() {
  const { item } = useItem();

  return (
    <div className="flex flex-row" data-testid="item-detail-screen">
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

import { useMemo } from 'react';

import { HomeCarouselPromotion } from '@/modules/home/components/HomeCarouselPromotion';
import { useSearchItem } from '@/services/search';
import { CardItem } from '@/components/CardItem';
import { MELI_COUNTRY_CODE } from '@/configs/environment';

export function HomeScreen() {
  const { data: items } = useSearchItem({
    limit: 20,
    offset: 0,
    search: 'Promoções',
    siteId: MELI_COUNTRY_CODE,
  });

  const separeItems = useMemo(() => {
    return {
      first: items?.results.filter((_, index) => index < 4) ?? [],
      last: items?.results.filter((_, index) => index >= 4) ?? [],
    };
  }, [items?.results]);

  return (
    <>
      <h2 className="text-lg font-semibold">Destaques</h2>

      <HomeCarouselPromotion />

      {items?.results && !!items?.results.length && (
        <div
          className="z-10 flex flex-col gap-4 md:mx-2 md:my-4 md:mt-[-80px]"
          data-testid="home-screen"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
            {separeItems.first.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
          {!!separeItems.last.length && (
            <>
              <h2 className="text-lg font-semibold">Promoções</h2>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                {separeItems.last.map((item) => (
                  <CardItem key={item.id} item={item} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

import { useMemo } from 'react';

import { HomeCarouselPromotion } from '@home/components/home-carousel-promotion';
import { CardProduct } from '@/components/card-product';
import { useSearchProduct } from '@/services/search';

export function Home() {
  const { data: products } = useSearchProduct({
    limit: 20,
    offset: 0,
    search: 'Promoções',
    siteId: 'MLB',
  });

  const separeProducts = useMemo(() => {
    return {
      first: products?.results.filter((_, index) => index < 4) ?? [],
      last: products?.results.filter((_, index) => index >= 4) ?? [],
    };
  }, [products?.results]);

  return (
    <>
      <h2 className="text-lg font-semibold">Destaques</h2>

      <HomeCarouselPromotion />

      <div className="z-10 my-4 mt-[-80px] flex flex-col gap-4 md:mx-2">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {separeProducts.first.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
        {separeProducts.last.length && (
          <>
            <h2 className="text-lg font-semibold">Promoções</h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
              {separeProducts.last.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

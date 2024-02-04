import { Carousel } from '@/ui/carousel';

import { MOCK_PROMOTION } from './constants';
import PromotionItem from './promotion-item';

export function HomeCarouselPromotion() {
  return (
    <div className="aspect-h-1 aspect-w-4 hidden outline-none md:block">
      <Carousel
        items={MOCK_PROMOTION.map((element) => (
          <PromotionItem key={element.id} {...element} />
        ))}
      />
    </div>
  );
}

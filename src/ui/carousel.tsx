import { ComponentProps, ReactNode, useEffect, useRef, useState } from 'react';
import classNameMerge from '@/utils/classNameMerge';

type CarouselProps = ComponentProps<'div'> & {
  items: ReactNode[];
};

function Carousel({ className, items, ...props }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const refCarousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nextItem = setInterval(() => {
      if (refCarousel.current) {
        const nextIndex = (currentIndex + 1) % items.length;
        refCarousel.current.scrollLeft =
          nextIndex * refCarousel.current.offsetWidth;
        setCurrentIndex(nextIndex);
      }
    }, 5000);

    return () => {
      clearInterval(nextItem);
    };
  }, [currentIndex, items.length]);

  return (
    <div
      className={classNameMerge(
        'flex w-full snap-x snap-mandatory flex-row overflow-hidden outline-none focus:outline-none',
        className
      )}
      ref={refCarousel}
      {...props}
    >
      {items.map((element, index) => (
        <div
          key={index}
          className={`h-full w-full flex-shrink-0 snap-start outline-none transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: `${index === currentIndex ? 0 : 500}ms`,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
}

Carousel.displayName = 'Carousel';

export { Carousel };

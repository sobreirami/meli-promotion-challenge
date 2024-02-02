import Image from 'next/image';
import { useMemo } from 'react';
import { Layout } from '@/components/layout';
import { Sidebar } from '@/components/sidebar';
import { Carousel } from '@/ui/carousel';

const products = [
  {
    id: 1,
    name: 'Prodict 1',
    image: 'https://picsum.photos/id/10/960/540',
    price: 10.0,
  },
  {
    id: 2,
    name: 'Prodict 2',
    image: 'https://picsum.photos/id/10/960/540',
    price: 10.0,
  },
  {
    id: 3,
    name: 'Prodict 3',
    image: 'https://picsum.photos/id/10/960/540',
    price: 10.0,
  },
  {
    id: 4,
    name: 'Prodict 4',
    image: 'https://picsum.photos/id/10/960/540',
    price: 10.0,
  },
];

export default function HomePage() {
  const items = useMemo(() => {
    return [
      'https://picsum.photos/id/10/960/540',
      'https://picsum.photos/id/11/960/540',
      'https://picsum.photos/id/12/960/540',
    ].map((element, index) => (
      <Image
        key={index}
        src={element}
        alt="Desafio Técnico - Challenge Promotions"
        blurDataURL={element}
        placeholder="blur"
        className="h-full w-full rounded-lg object-cover object-center outline-none focus:outline-none"
        width={1088}
        height={150}
        priority
        quality={100}
        sizes="100vw"
      />
    ));
  }, []);

  return (
    <Layout>
      <div className="flex">
        <Sidebar />

        <div className="w-full border-l border-border px-4 pt-6 md:px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Promoções</h2>

            <div className="aspect-h-3 aspect-w-9 outline-none">
              <Carousel items={items} />
            </div>

            <div className="my-4 flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Destaques</h2>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="h-30 hover:text-accent flex w-full cursor-pointer flex-col justify-center gap-2 rounded-xl border border-border bg-white p-4 hover:font-medium md:max-w-2xl"
                  >
                    <div className="aspect-h-6 aspect-w-9 outline-none">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={30}
                        blurDataURL={product.image}
                        placeholder="blur"
                        className="h-full w-full rounded-lg object-cover object-center outline-none focus:outline-none"
                        height={30}
                        priority
                        quality={100}
                        sizes="33vw"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-0 text-center">
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

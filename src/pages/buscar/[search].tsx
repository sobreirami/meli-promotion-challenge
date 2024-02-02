import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Layout } from '@/components/layout';
import { Sidebar } from '@/components/sidebar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';
import { Button } from '@/ui/button';

type Props = {
  search: string;
};

type Params = ParsedUrlQuery & {
  search: string;
};

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
  {
    id: 4,
    name: 'Prodict 4',
    image: 'https://picsum.photos/id/10/960/540',
    price: 10.0,
  },
  {
    id: 4,
    name: 'Prodict 4',
    image: 'https://picsum.photos/id/10/960/540',
    price: 10.0,
  },
  {
    id: 4,
    name: 'Prodict 4',
    image: 'https://picsum.photos/id/10/960/540',
    price: 10.0,
  },
  {
    id: 4,
    name: 'Prodict 4',
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

export default function SearchPage({ search }: Props) {
  return (
    <Layout>
      <div className="flex">
        <Sidebar />

        <div className="w-full border-l border-border px-4 pt-6 md:px-8">
          <div className="my-2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{search}</h2>
              <small className="text-xs font-light text-tertiary">
                1.779 resultados
              </small>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="hover:text-accent flex w-full cursor-pointer flex-col justify-center gap-2 rounded-xl border border-border bg-white p-4 hover:font-medium md:max-w-2xl"
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
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-1 items-center justify-between space-x-6 lg:space-x-8">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">Rows per page</p>
                  <Select>
                    <SelectTrigger className="h-8 w-[70px]">
                      <SelectValue placeholder={0} />
                    </SelectTrigger>
                    <SelectContent side="top">
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <SelectItem key={pageSize} value={`${pageSize}`}>
                          {pageSize}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="h-8 w-8 items-center justify-center p-0"
                  >
                    <span className="sr-only">Go to previous page</span>
                    <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="h-8 w-8 p-0">
                    <span className="sr-only">Go to next page</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { search } = params as Params;

  return {
    props: {
      search,
    },
  };
};

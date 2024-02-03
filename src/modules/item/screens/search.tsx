import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { SelectTrigger } from '@radix-ui/react-select';
import { useRouter } from 'next/router';

import { CardItem } from '@/components/card-item';
import { ResponseSearch } from '@/services/search/types';
import { Button } from '@/ui/button';
import { Select, SelectContent, SelectItem, SelectValue } from '@/ui/select';

type Props = {
  search: string;
  data: ResponseSearch;
};

export function Search({ data, search }: Props) {
  const router = useRouter();

  const { offset, limit, total } = data.paging;

  function handleLimit(value: string) {
    router.push({
      pathname: '/buscar/[search]',
      query: { search, limit: Number(value), offset },
    });
  }

  function nextPage() {
    router.push({
      pathname: '/buscar/[search]',
      query: { search, limit, offset: offset + 1 },
    });
  }

  function prevPage() {
    router.push({
      pathname: '/buscar/[search]',
      query: {
        search,
        limit,
        offseat: offset === 0 ? 0 : offset - 1,
      },
    });
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{search}</h2>
        <small className="text-xs font-light text-tertiary">
          {total} resultados
        </small>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {data?.results.map((item) => <CardItem key={item.id} item={item} />)}
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex flex-1 items-center justify-between space-x-6 lg:space-x-8">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Linhas</p>
            <Select value={`${limit}`} onValueChange={handleLimit}>
              <SelectTrigger className="h-8 w-[70px] rounded-lg border">
                <SelectValue placeholder={limit} />
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
              disabled={offset === 0}
              onClick={prevPage}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={nextPage}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

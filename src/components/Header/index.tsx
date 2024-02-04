import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { Input } from '@/ui/Input';
import { Logo } from '@/components/Logo';

import { CustomFormEvent, HeaderParams } from './types';

export function Header() {
  const router = useRouter();
  const params = useParams() as HeaderParams;
  const searchTerm = params?.search ?? '';

  function onSubmit(e: CustomFormEvent) {
    e.preventDefault();

    const searchData = e.currentTarget.elements.search.value;

    router.push({
      pathname: '/buscar/[search]',
      query: { search: searchData },
    });
  }

  return (
    <nav
      className="h-18 border-y-1 w-full border-y border-border bg-white"
      data-testid="header"
    >
      <div className="sm:px-22 mx-auto max-w-screen-xl items-center justify-between px-4 md:px-24">
        <div className="flex flex-1 flex-row items-center justify-between py-3 md:py-5">
          <Logo />

          <form className="w-2/6" onSubmit={onSubmit} data-testid="form-search">
            <Input
              type="search"
              id="search"
              name="search"
              defaultValue={searchTerm}
              placeholder="Pesquisar..."
              className="block w-full rounded-lg"
              required
              data-testid="input-search"
            />
          </form>
          <div />
        </div>
      </div>
    </nav>
  );
}

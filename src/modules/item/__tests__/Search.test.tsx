import { MOCK_RESPONSE_SEARCH } from '@/services/search/__tests__/mock';
import { customRender, screen } from '@test/utils/render';

import { SearchScreen } from '@/modules/item/screens/Search';
import { ResponseSearch } from '@/services/search/types';

describe('Modules - Item - SearchScreen', () => {
  test('should render the Search screen', async () => {
    const searchQuery = 'product 1';

    const results = Array.from({ length: 10 }, (_, index) => ({
      ...MOCK_RESPONSE_SEARCH.results[0],
      id: `${index}`,
      title: `Title ${index}`,
    }));

    const data: ResponseSearch = {
      results,
      paging: {
        limit: 10,
        offset: 0,
        total: results.length,
      },
    };

    customRender(<SearchScreen data={data} search={searchQuery} />);
    expect(screen.getByText(searchQuery)).toBeInTheDocument();
    expect(
      screen.getByText(`${results.length} resultados`)
    ).toBeInTheDocument();
  });

  test('should make the search screen empty', async () => {
    const searchQuery = 'product not found';

    const data: ResponseSearch = {
      results: [],
      paging: {
        limit: 0,
        offset: 0,
        total: 0,
      },
    };

    customRender(<SearchScreen data={data} search={searchQuery} />);
    expect(screen.getByText(`0 resultados`)).toBeInTheDocument();
    expect(screen.getByText(`Nenhum resultado encontrado`)).toBeInTheDocument();
  });
});

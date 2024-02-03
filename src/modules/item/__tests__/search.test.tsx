import { MOCK_RESPONSE_SEARCH } from '@/services/search/__tests__/mock';
import { customRender, screen } from '@test/utils/render';

import { Search } from '@/modules/item/screens/search';
import { ResponseSearch } from '@/services/search/types';

describe('Modules - Item - Search', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the Search screen', async () => {
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

    customRender(<Search data={data} search={searchQuery} />);
    expect(screen.getByText(searchQuery)).toBeInTheDocument();
    expect(
      screen.getByText(`${results.length} resultados`)
    ).toBeInTheDocument();
  });
});

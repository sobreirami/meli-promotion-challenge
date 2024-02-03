import { beforeEach } from 'node:test';
import { MOCK_RESPONSE_CATEGORY } from '@/services/category/__tests__/mock';
import { MOCK_RESPONSE_SEARCH } from '@/services/search/__tests__/mock';

import { mockGetRequest } from '@test/mocks/server';
import {
  act,
  customRender,
  customRenderHook,
  screen,
  waitFor,
} from '@test/utils/render';
import SearchPage from '@/pages/buscar/[search]';
import { useSearchItem } from '@/services/search';

describe('Pages - Search', () => {
  const siteId = 'MLB';

  beforeEach(() => {
    mockGetRequest({
      endpoint: `/sites/${siteId}/categories`,
      response: MOCK_RESPONSE_CATEGORY,
    });

    mockGetRequest({
      endpoint: `/sites/${siteId}/search`,
      response: MOCK_RESPONSE_SEARCH,
    });
  });

  test('should render the page Search', async () => {
    const searchTerm = 'product 1';

    const { result } = customRenderHook(() =>
      useSearchItem({
        siteId,
        limit: 10,
        offset: 0,
        search: searchTerm,
      })
    );

    await act(async () => {
      await waitFor(() => result.current.isSuccess);
    });

    if (!result.current.data) {
      return;
    }

    customRender(<SearchPage data={result.current.data} search={searchTerm} />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('sidebar'));
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    expect(screen.getByText(searchTerm)).toBeInTheDocument();
    expect(
      screen.getByText(`${result.current.data?.results.length} resultados`)
    ).toBeInTheDocument();
  });
});

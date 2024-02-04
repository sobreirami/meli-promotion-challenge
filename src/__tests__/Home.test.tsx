import { MOCK_RESPONSE_CATEGORY } from '@/services/category/__tests__/mock';
import { MOCK_RESPONSE_SEARCH } from '@/services/search/__tests__/mock';

import { mockGetRequest } from '@test/mocks/server';
import { customRender, screen, waitFor } from '@test/utils/render';
import HomePage from '@/pages';
import { MELI_COUNTRY_CODE } from '@/configs/environment';

describe('Pages - Home', () => {
  beforeEach(() => {
    const siteId = MELI_COUNTRY_CODE;

    mockGetRequest({
      endpoint: `/sites/${siteId}/categories`,
      response: MOCK_RESPONSE_CATEGORY,
    });

    mockGetRequest({
      endpoint: `/sites/${siteId}/search`,
      response: {
        ...MOCK_RESPONSE_SEARCH,
        results: Array.from({ length: 10 }, (_, index) => ({
          ...MOCK_RESPONSE_SEARCH.results[0],
          id: `${index}`,
          title: `Title ${index}`,
        })),
      },
    });
  });

  test('should render the page Home', async () => {
    customRender(<HomePage />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('sidebar'));
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    await waitFor(() => screen.getByTestId('home-screen'));
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.queryByText('Promoções')).toBeInTheDocument();
  });
});

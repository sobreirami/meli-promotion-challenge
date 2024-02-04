import { MOCK_RESPONSE_SEARCH } from '@/services/search/__tests__/mock';
import { mockGetRequest } from '@test/mocks/server';
import { customRender, screen, waitFor } from '@test/utils/render';

import { HomeScreen } from '@/modules/home';
import { MELI_COUNTRY_CODE } from '@/configs/environment';

describe('Modules - Home', () => {
  const siteId = MELI_COUNTRY_CODE;

  test('should render the Home screen', async () => {
    mockGetRequest({
      endpoint: `/sites/${siteId}/search`,
      response: MOCK_RESPONSE_SEARCH,
    });

    customRender(<HomeScreen />);

    await waitFor(() => screen.getByTestId('home-screen'));

    expect(screen.getByText('Destaques')).toBeInTheDocument();
    expect(
      screen.getByText(MOCK_RESPONSE_SEARCH.results[0].title)
    ).toBeInTheDocument();
    expect(screen.queryByText('Promoções')).not.toBeInTheDocument();
  });

  test('should render section promotion', async () => {
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

    customRender(<HomeScreen />);

    await waitFor(() => screen.getByTestId('home-screen'));
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.queryByText('Promoções')).toBeInTheDocument();
  });
});

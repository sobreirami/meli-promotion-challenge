import { Sidebar } from '@/components/sidebar';
import { MOCK_RESPONSE_CATEGORY } from '@/services/category/__tests__/mock';
import { mockGetRequest } from '@test/mocks/server';
import { customRender, screen, waitFor } from '@test/utils/render';

describe('Components - Sidebar', () => {
  test('should render the component Sidebar', async () => {
    const siteId = 'MLB';

    mockGetRequest({
      endpoint: `/sites/${siteId}/categories`,
      response: MOCK_RESPONSE_CATEGORY,
    });

    customRender(<Sidebar />);

    await waitFor(() => screen.getByTestId('sidebar'));

    expect(
      screen.getByText(MOCK_RESPONSE_CATEGORY[0].name)
    ).toBeInTheDocument();
  });

  test('renders null when data is null', async () => {
    const { container } = customRender(<Sidebar />);

    expect(container.firstChild).toBeNull();
  });
});

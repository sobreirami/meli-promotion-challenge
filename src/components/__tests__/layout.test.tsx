import { Layout } from '@/components/layout';
import { MOCK_RESPONSE_CATEGORY } from '@/services/category/__tests__/mock';
import { mockGetRequest } from '@test/mocks/server';
import { customRender, screen, waitFor } from '@test/utils/render';

describe('Components - Layout', () => {
  beforeEach(() => {
    const siteId = 'MLB';

    mockGetRequest({
      endpoint: `/sites/${siteId}/categories`,
      response: MOCK_RESPONSE_CATEGORY,
    });
  });

  test('should render the component Layout', async () => {
    customRender(<Layout>Layout Content</Layout>);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByText('Layout Content')).toBeInTheDocument();

    expect(screen.getByTestId('header')).toBeInTheDocument();
    await waitFor(() => screen.getByTestId('sidebar'));
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});

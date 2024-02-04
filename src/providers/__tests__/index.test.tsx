import Providers from '@/providers';
import { customRender, screen } from '@test/utils/render';

describe('Providers', () => {
  test('should render the Providers', () => {
    customRender(<Providers>Providers Content</Providers>);
    expect(screen.getByText('Providers Content')).toBeInTheDocument();
  });
});

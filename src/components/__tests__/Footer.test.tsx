import { Footer } from '@/components/Footer';
import { customRender, screen } from '@test/utils/render';

describe('Components - Footer', () => {
  test('should render the component Footer', () => {
    customRender(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('open in a new tab', () => {
    customRender(<Footer />);

    const mercadoLivreLink = screen.getByText('Mercado Livre');
    expect(mercadoLivreLink).toHaveAttribute(
      'href',
      'https://mercadolivre.com.br'
    );
    expect(mercadoLivreLink).toHaveAttribute('target', '_blank');

    const developersLink = screen.getByText('Developers');
    expect(developersLink).toHaveAttribute(
      'href',
      'https://developers.mercadolivre.com.br'
    );
    expect(developersLink).toHaveAttribute('target', '_blank');
  });
});

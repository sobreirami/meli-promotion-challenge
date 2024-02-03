import { Header } from '@/components/header';
import { customRender, fireEvent, screen } from '@test/utils/render';

const pushMock = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe('Components - Header', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render the component Header', () => {
    customRender(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('must search for the product if the completed form', () => {
    customRender(<Header />);

    const searchInput = screen.getByTestId('input-search');
    const searchTerm = 'product 1';

    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.submit(screen.getByTestId('form-search'));

    expect(pushMock).toHaveBeenCalledWith({
      pathname: '/buscar/[search]',
      query: { search: searchTerm },
    });
  });
});

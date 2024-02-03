import { customRender, screen } from '@test/utils/render';
import { CardItem } from '@/components/card-item';
import { MOCK_RESPONSE_ITEM } from '@/services/item/__tests__/mock';

const pushMock = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe('Components - CardItem', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render the component CardItem', () => {
    customRender(<CardItem item={MOCK_RESPONSE_ITEM} />);
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('R$ 10,50')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/123');
  });
});

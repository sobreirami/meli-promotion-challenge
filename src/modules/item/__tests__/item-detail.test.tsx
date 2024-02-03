import { ItemDetail } from '@item/screens/item-detail';
import { customRender, screen } from '@test/utils/render';
import * as useItemModule from '@item/hooks/useItem';
import { MOCK_ITEM_DETAIL } from './mock';

jest.mock('@item/hooks/useItem');

describe('Modules - Item - ItemDetail', () => {
  beforeEach(() => {
    jest.spyOn(useItemModule, 'useItem').mockReturnValue({
      item: MOCK_ITEM_DETAIL,
    });
  });

  test('should render the ItemDetail screen', async () => {
    customRender(<ItemDetail />);
    expect(screen.getByTestId('item-detail-screen')).toBeInTheDocument();
    expect(
      screen.queryByText(MOCK_ITEM_DETAIL.description)
    ).toBeInTheDocument();
    expect(screen.getByText('R$ 10,50')).toBeInTheDocument();
  });
});

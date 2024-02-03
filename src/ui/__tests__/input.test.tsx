import { customRender } from '@test/utils/render';
import { Input } from '@/ui/input';

describe('UI - Input Snapshot', () => {
  test('should match snapshot with default props', () => {
    const { container } = customRender(<Input />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with custom props', () => {
    const { container } = customRender(
      <Input type="email" placeholder="Email" />
    );
    expect(container).toMatchSnapshot();
  });
});

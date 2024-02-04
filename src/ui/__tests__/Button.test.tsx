import { customRender } from '@test/utils/render';
import { Button } from '@/ui/Button';

describe('UI - Button Snapshot', () => {
  test('should match snapshot with default props', () => {
    const { container } = customRender(<Button />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with secondary props', () => {
    const { container } = customRender(<Button variant="secondary" />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with tertiary props', () => {
    const { container } = customRender(<Button variant="tertiary" />);
    expect(container).toMatchSnapshot();
  });
});

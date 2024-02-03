import { render } from '@test/utils/render';
import { Button } from '@/ui/button';

describe('UI - Button Snapshot', () => {
  it('should match snapshot with default props', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with secondary props', () => {
    const { container } = render(<Button variant="secondary" />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with tertiary props', () => {
    const { container } = render(<Button variant="tertiary" />);
    expect(container).toMatchSnapshot();
  });
});

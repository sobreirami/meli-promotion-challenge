import { customRender } from '@test/utils/render';
import { Carousel } from '@/ui/carousel';

describe('UI - Carousel Snapshot', () => {
  it('should match snapshot with default props', () => {
    const items = [
      <div key={0}>Item 1</div>,
      <div key={1}>Item 2</div>,
      <div key={2}>Item 3</div>,
    ];

    const { container } = customRender(<Carousel items={items} />);
    expect(container).toMatchSnapshot();
  });
});

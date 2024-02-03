import { memo } from 'react';
import { ItemAttribute } from '@/entities/Item';

type Props = {
  attribute: ItemAttribute;
};

function ItemAttributeItem({ attribute }: Props) {
  const containerIsVertical = attribute?.value_name.length > 20;

  return (
    <div
      className={`flex flex-${containerIsVertical ? 'col' : 'row'} items-${containerIsVertical ? 'flex-start' : 'center'} justify-between gap-1 text-xs font-normal`}
    >
      <strong className="text-left font-semibold text-primary">
        {`${attribute.name}:`}
      </strong>
      <p
        className={`text-${containerIsVertical ? 'left' : 'right'} text-tertiary`}
      >
        {attribute.value_name}
      </p>
    </div>
  );
}

export default memo(ItemAttributeItem);

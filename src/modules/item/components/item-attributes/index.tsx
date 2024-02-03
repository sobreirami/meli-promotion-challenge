import { useItem } from '@item/hooks/useItem';
import ItemAttributeItem from './item-attribute-item';

export function ItemAttributes() {
  const { item } = useItem();

  return (
    <div className="my-4 flex w-full flex-1 flex-col gap-2 rounded-xl border border-border bg-white p-4  md:max-w-2xl">
      <h2 className="text-lg font-semibold text-primary">
        Características do produto:
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {item.attributes
          .filter((attribute) => !!attribute.value_name)
          .map((attribute) => (
            <ItemAttributeItem key={attribute.id} attribute={attribute} />
          ))}
      </div>
    </div>
  );
}

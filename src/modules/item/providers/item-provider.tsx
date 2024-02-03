import { ReactNode } from 'react';

import { ItemContext } from '@item/contexts/item-context';
import { Item } from '@/entities/Item';

type Props = {
  item: Item;
  children: ReactNode;
};

export function ItemProvider({ children, item }: Props) {
  return (
    <ItemContext.Provider
      value={{
        item,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

import { ReactNode } from 'react';

import { ItemContext } from '@item/contexts/ItemContext';
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

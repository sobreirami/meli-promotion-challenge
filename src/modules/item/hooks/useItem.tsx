import { useContext } from 'react';

import { ItemContext } from '@item/contexts/item-context';

export function useItem() {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItem must be used inside ItemContext');
  }

  return context;
}

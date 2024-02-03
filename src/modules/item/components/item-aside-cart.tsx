import { useItem } from '@item/hooks/useItem';
import { Button } from '@/ui/button';
import formatCurrencyValue from '@/utils/formatCurrencyValue';

export function ItemAsideCart() {
  const { item } = useItem();

  return (
    <aside className="sticky top-4 flex h-fit flex-1 flex-col gap-4 rounded-lg border border-border p-4">
      <h1 className="text-lg font-semibold text-primary">{item.title}</h1>
      <span className="text-3xl font-bold text-accent">
        {formatCurrencyValue({
          currency: item.currency ?? 'BRL',
          value: item.price,
        })}
      </span>

      <Button variant="primary" size="lg">
        Comprar
      </Button>
      <Button variant="outline" size="lg">
        Adicionar ao carrinho
      </Button>
    </aside>
  );
}

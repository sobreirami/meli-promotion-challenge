import Link from 'next/link';
import { useItem } from '@item/hooks/useItem';
import { Button } from '@/ui/Button';
import formatCurrencyValue from '@/utils/formatCurrencyValue';

export function ItemAsideCart() {
  const { item } = useItem();

  return (
    <aside className="sticky top-4 flex h-fit w-full flex-1 flex-col gap-4 rounded-lg border border-border p-4 md:w-[350px]">
      <h1 className="text-lg font-semibold text-primary">{item.title}</h1>
      <span className="text-3xl font-bold text-accent">
        {formatCurrencyValue({
          currency: item.currency ?? 'BRL',
          value: item.price,
        })}
      </span>

      <Link href={item.permalink} target="_blank">
        <Button variant="primary" size="lg">
          Comprar
        </Button>
      </Link>
      <Link href={item.permalink} target="_blank">
        <Button variant="outline" size="lg">
          Adicionar ao carrinho
        </Button>
      </Link>
    </aside>
  );
}

type Props = {
  lang?: string;
  currency: string;
  value: number;
};

export default function formatCurrencyValue({
  currency,
  lang = 'pt-BR',
  value,
}: Props) {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency,
  }).format(value);
}

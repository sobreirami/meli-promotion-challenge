import formatCurrencyValue from '@/utils/formatCurrencyValue';

describe('formatCurrencyValue', () => {
  it('should format currency value with default language', () => {
    const result = formatCurrencyValue({ value: 10.5 });
    expect(result).toContain('R$');
    expect(result).toContain('10,50');
  });

  it('should format currency value for Argentina  language', () => {
    const result = formatCurrencyValue({
      lang: 'es-AR',
      currency: 'ARS',
      value: 10.5,
    });
    expect(result).toContain('$');
    expect(result).toContain('10,50');
  });
});

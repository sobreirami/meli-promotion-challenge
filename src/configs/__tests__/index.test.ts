import { MELI_API_BASE_URL } from '@/configs/environment';

describe('Configs - Environment', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('must receive a MEI API_BASE_URL with correct value', () => {
    expect(MELI_API_BASE_URL).toBe('https://api.mercadolibre.com');
  });
});

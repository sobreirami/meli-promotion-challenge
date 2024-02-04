import { MELI_API_BASE_URL, MELI_COUNTRY_CODE } from '@/configs/environment';

describe('Configs - Environment', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('must receive a MELI_API_BASE_URL with correct value', () => {
    expect(MELI_API_BASE_URL).toBe('https://api.mercadolibre.com');
  });

  test('must receive a MELI_COUNTRY_CODEL with value Brasil (MLB)', () => {
    expect(MELI_COUNTRY_CODE).toBe('MLB');
  });
});

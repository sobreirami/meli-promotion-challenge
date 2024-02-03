export const useRouterMock = jest.spyOn(require('next/router'), 'useRouter');
export const pushMock = jest.fn();

useRouterMock.mockImplementation(() => ({
  pathname: '',
  query: {},
}));

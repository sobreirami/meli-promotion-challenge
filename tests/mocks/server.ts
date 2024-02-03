import { rest, DefaultBodyType } from 'msw';
import { setupServer } from 'msw/node';

export const server = setupServer();

interface MockRequestProps<T> {
  endpoint: string;
  status?: number;
  response: T;
}

export const mockGetRequest = <T extends DefaultBodyType>(
  props: MockRequestProps<T>
) => {
  const { endpoint, status = 200, response } = props;
  server.use(
    rest.get(endpoint, (req, res, ctx) => {
      return res(ctx.status(status), ctx.json(response));
    })
  );
};

export const mockPostRequest = <T extends DefaultBodyType>(
  props: MockRequestProps<T>
) => {
  const { endpoint, status = 200, response } = props;
  server.use(
    rest.post(endpoint, (req, res, ctx) => {
      return res(ctx.status(status), ctx.json(response));
    })
  );
};

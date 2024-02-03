import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Search } from '@item/screens/search';
import { Layout } from '@/components/layout';
import { searchItems } from '@/services/search/client';
import { ResponseSearch } from '@/services/search/types';

type Props = {
  search: string;
  data: ResponseSearch;
};

type Params = ParsedUrlQuery & {
  search: string;
};

type Query = {
  offset?: number;
  limit?: number;
};

export default function SearchPage({ search, data }: Props) {
  return (
    <Layout>
      <Search data={data} search={search} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const { search } = params as Params;
  const { limit, offset } = query as Query;

  const parseLimit = limit ? Number(limit) : 10;
  const parseOffset = offset ? Number(offset) : 0;

  const data = await searchItems({
    limit: parseLimit,
    offset: parseOffset,
    search,
    siteId: 'MLB',
  });

  return {
    props: {
      data,
      search,
    },
  };
};

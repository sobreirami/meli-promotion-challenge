import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Layout } from '@/components/Layout';
import { searchItems } from '@/services/search/client';
import { ResponseSearch } from '@/services/search/types';
import { Seo, SeoProps } from '@/components/Seo';
import { SearchScreen } from '@/modules/item/screens/Search';
import { MELI_COUNTRY_CODE } from '@/configs/environment';

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
  const seo: SeoProps = {
    title: `${search} | Desafio Técnico`,
    openGraph: {
      type: 'website',
      title: `${search} | Desafio Técnico`,
      images: [
        {
          url: '/icon.png',
        },
      ],
    },
  };

  return (
    <Layout>
      <Seo {...seo} />
      <SearchScreen data={data} search={search} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const { search } = params as Params;
  const { limit, offset } = query as Query;

  const parseLimit = limit ? Number(limit) : 20;
  const parseOffset = offset ? Number(offset) : 0;

  const data = await searchItems({
    limit: parseLimit,
    offset: parseOffset,
    search,
    siteId: MELI_COUNTRY_CODE,
  });

  return {
    props: {
      data,
      search,
    },
  };
};

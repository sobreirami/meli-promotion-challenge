import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { ItemDetailScreen } from '@item/screens/ItemDetail';
import { ItemProvider } from '@item/providers/ItemProvider';
import { Layout } from '@/components/Layout';
import { Item } from '@/entities/Item';
import { getItemWithDescription } from '@/services/item';
import { Seo, SeoProps } from '@/components/Seo';

type Params = ParsedUrlQuery & {
  search: string;
};

type Props = {
  item: Item;
};

export default function ItemPage({ item }: Props) {
  const seo: SeoProps = {
    title: `${item.title} | Desafio Técnico`,
    openGraph: {
      type: 'website',
      title: `${item.title} | Desafio Técnico`,
      images: [
        {
          url: item.thumbnail,
        },
      ],
    },
  };

  return (
    <Layout>
      <Seo {...seo} />
      <ItemProvider item={item}>
        <ItemDetailScreen />
      </ItemProvider>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { itemId } = params as Params;

    const item = await getItemWithDescription({
      itemId: String(itemId),
    });

    return {
      props: {
        item,
      },
    };
  } catch {
    return { notFound: true };
  }
};

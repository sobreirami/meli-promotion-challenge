import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { ItemDetail } from '@item/screens/item-detail';
import { ItemProvider } from '@item/providers/item-provider';
import { Layout } from '@/components/layout';
import { Item } from '@/entities/Item';
import { getItemWithDescription } from '@/services/item';

type Params = ParsedUrlQuery & {
  search: string;
};

type Props = {
  item: Item;
};

export default function ItemPage({ item }: Props) {
  return (
    <Layout>
      <ItemProvider item={item}>
        <ItemDetail />
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

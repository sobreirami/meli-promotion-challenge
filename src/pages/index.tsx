import { Layout } from '@/components/Layout';
import { Seo, SeoProps } from '@/components/Seo';
import { HomeScreen } from '@/modules/home';

export default function HomePage() {
  const seo: SeoProps = {
    title: 'Desafio Técnico - Challenge Promotions',
    openGraph: {
      type: 'website',
      title: 'Desafio Técnico - Challenge Promotions',
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
      <HomeScreen />
    </Layout>
  );
}

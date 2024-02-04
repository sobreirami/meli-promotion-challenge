import { Layout } from '@/components/layout';
import { Seo, SeoProps } from '@/components/seo';
import { Home } from '@/modules/home';

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
      <Home />
    </Layout>
  );
}

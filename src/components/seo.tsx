import { NextSeo, NextSeoProps } from 'next-seo';

export type SeoProps = NextSeoProps;

export function Seo({ ...props }: SeoProps) {
  return <NextSeo {...props} />;
}

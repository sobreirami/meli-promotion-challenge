import { HTMLAttributes } from 'react';
import Link from 'next/link';

import classNameMerge from '@/utils/classNameMerge';
import { useCategory } from '@/services/category';

type SidebarProps = HTMLAttributes<HTMLDivElement>;

export function Sidebar({ className }: SidebarProps) {
  const { data } = useCategory({
    siteId: 'MLB',
  });

  if (!data) {
    return null;
  }

  return (
    <aside
      className={classNameMerge(
        'hidden px-4 py-6 md:block md:px-24 lg:py-8',
        className
      )}
      data-testid="sidebar"
    >
      <div className="flex flex-col gap-2 px-3">
        <h2 className="text-lg font-semibold">Categorias</h2>
        <div className="flex flex-col gap-2">
          {data?.map((category) => (
            <Link
              key={category.id}
              className="justify-start text-sm font-normal text-primary hover:underline"
              href={`/buscar/${category.name}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

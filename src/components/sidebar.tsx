import { HTMLAttributes } from 'react';
import Link from 'next/link';
import classNameMerge from '@/utils/classNameMerge';

type SidebarProps = HTMLAttributes<HTMLDivElement>;

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={classNameMerge(' flex px-4 py-6 md:px-24 lg:py-8', className)}
    >
      <div className="flex flex-col gap-2 px-3">
        <h2 className="text-lg font-semibold">Categorias</h2>
        <div className="flex flex-col gap-2">
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
          <Link className="justify-start hover:underline" href="#">
            Saúde
          </Link>
        </div>
      </div>
    </aside>
  );
}

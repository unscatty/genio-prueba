import { classNames } from "@/utils/common";
import Link from "next/link";

export type PaginationProps = {
  previousHref: string;
  nextHref: string;
} & React.HTMLAttributes<HTMLDivElement>

export default function Pagination({
  className,
  nextHref,
  previousHref,
}: PaginationProps) {
  return (
    <nav
      className={classNames(className, 'px-0 py-3 flex items-center justify-between not-prose')}
      aria-label="Pagination"
    >
      <Link
        href={previousHref}
        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Anterior
      </Link>
      <Link
        href={nextHref}
        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
      >
        Siguiente
      </Link>
    </nav>
  )
}

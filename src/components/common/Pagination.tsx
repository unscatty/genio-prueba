import { classNames } from "@/utils/common";

export type PaginationProps = {
  currentRange: [number, number];
  totalItems: number;
} & React.HTMLAttributes<HTMLDivElement>

export default function Pagination({
  className,
  currentRange,
  totalItems,
}: PaginationProps) {
  return (
    <nav
      className={classNames(className, 'px-4 py-3 flex items-center justify-between sm:px-6 not-prose')}
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Mostrando {' '}
          <span className="font-medium">
            {currentRange[0]}
          </span>
          {' '} a {' '}
          <span className="font-medium">
            {currentRange[1]}
          </span>
          {' '} de {' '}
          <span className="font-medium">
            {totalItems}
          </span>
          {' '} resultados
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Anterior
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Siguiente
        </a>
      </div>
    </nav>
  )
}

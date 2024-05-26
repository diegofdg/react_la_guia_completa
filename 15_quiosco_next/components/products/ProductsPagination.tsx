import Link from "next/link"

type ProductsPaginationProps = {
  page: number
}

export default function ProductsPagination({ page }: ProductsPaginationProps) {  
  return (
    <nav className="flex justify-center py-10">
      {page > 1 && (
        <Link
          href={`/admin/products?page=${page - 1}`}
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
        >&laquo;</Link>
      )}
    </nav>
  )
}

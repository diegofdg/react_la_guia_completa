import Image from "next/image"
import { Product } from "@prisma/client"
import { formatCurrency } from "@/src/utils"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white">

      <Image
        width={400}
        height={500}
        style={{ width: "auto", height: "auto" }}
        src={`/products/${product.image}.jpg`}
        alt={`Imagen platillo ${product.name}`}
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddProductButton
          product={product} />
      </div>
    </div>
  )
}

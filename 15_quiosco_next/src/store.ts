import { create } from "zustand"
import { OrderItem } from "@/types"
import { Product } from "@prisma/client"

interface Store {
  order: OrderItem[]
  addToOrder: (product: Product) => void
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToOrder: (product) => {
    console.log(product)
  }
}))
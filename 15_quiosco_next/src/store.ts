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
    const { categoryId, image, ...data } = product
    let order: OrderItem[] = []

    if (get().order.find(item => item.id === product.id)) {
      order = get().order.map(item => item.id === product.id ? {
        ...item,
        quantity: item.quantity + 1,
        subtotal: item.price * (item.quantity + 1)
      } : item)

    } else {
      order = [...get().order, {
        ...data,
        quantity: 1,
        subtotal: 1 * product.price
      }]

    }
    set(() => ({
      order
    }))

  }
}))
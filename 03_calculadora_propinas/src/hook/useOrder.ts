import { useState } from "react"
import { MenuItem } from "../types"
import type { OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    const newItem = {...item, quantity: 1}
    setOrder([...order, newItem])
  }

  console.log(order)

  return {
    addItem
  }
}
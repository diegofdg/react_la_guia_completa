import { useState } from "react"
import { MenuItem } from "../types"
import type { OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    console.log(item)
  }

  return {
    addItem
  }
}
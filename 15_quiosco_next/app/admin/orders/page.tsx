import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })
  return orders  
}

export default async function OrdersPage() {
  const orders = await getPendingOrders()
  console.log(JSON.stringify(orders, null,2))

  return (
    <>
      <Heading>
        Administrar Ordenes
      </Heading>
    </>
  )
}

import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hook/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotal"

function App() {
  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-4xl">Menú</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
            order={order}
            removeItem={removeItem}
          />
          <OrderTotals
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App

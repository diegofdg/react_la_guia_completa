import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hook/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  const { order, tip, setTip, removeItem, placeOrder } = useOrder()
  const [ state, dispatch ] = useReducer(orderReducer, initialState)

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
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
              <OrderContents
                order={state.order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals
                order={state.order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App

import { useMemo } from "react"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"
import AmountDisplay from "./AmountDisplay"
import { Expense } from "../types"
import { formatDate } from "../helpers"
import { categories } from "../data/categories"
import "react-swipeable-list/dist/styles.css"

type ExpenseDetailProps = {
  expense: Expense
}

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={()=>{}}
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={()=>{}}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>

  )

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >

        <div className="bg-white shadow-lg p-5 w-full border-b border-gray-200 flex gap-5 items-center">
          <div>
            <img
              src={`/icono_${categoryInfo.icon}.svg`}
              alt="icono gasto"
              className="w-20"
            />

          </div>

          <div className="flex-1 space-y-2">
            <p className=" text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
          </div>

          <AmountDisplay
            amount={expense.amount}
          />

        </div>
      </SwipeableListItem>

    </SwipeableList >
  )
}

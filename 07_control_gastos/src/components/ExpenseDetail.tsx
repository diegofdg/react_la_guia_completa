import AmountDisplay from "./AmountDisplay"
import { Expense } from "../types"
import { formatDate } from "../helpers"

type ExpenseDetailProps = {
  expense: Expense
}

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  return (
    <div className="bg-white shadow-lg p-5 w-full border-b border-gray-200 flex gap-5 items-center">
      <div>
        
      </div>

      <div className="flex-1 space-y-2">
        <p className=" text-sm font-bold uppercase text-slate-500">{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
      </div>

      <AmountDisplay
        amount={expense.amount}
      />

    </div>
  )
}

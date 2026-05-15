import * as React from "react"
import { getAccountIcon, getAccountTypeLabel } from "@/lib/utils"
import { formatMoney } from "@/lib/money"
interface Account {
  id: string
  name: string
  type: string
  icon: string
  current_balance: number
}

interface BankCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  account: Account
  showBalances: boolean
}

const BankCard = React.forwardRef<HTMLButtonElement, BankCardProps>(
  ({ account, showBalances, className = "", ...props }, ref) => {
    const Icon = getAccountIcon(account.type)
    return (
      <button
        key={account.id}
        ref={ref}
        type="button"
        className={`bg-surface border border-line rounded-xl p-4 flex w-full items-center justify-center gap-3 text-left transition-colors active:bg-surface-alt ${className}`}
        {...props}
      >
        {/* Icon */}
        <div className="w-11 h-11 rounded-lg bg-surface-alt flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-ink" />
        </div>

        {/* Name + type */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-ink leading-tight">{account.name}</p>
          <p className="text-[11px] text-ms-muted font-medium mt-0.5">
            {getAccountTypeLabel(account.type)}
          </p>
        </div>

        {/* Balance */}
        <div className="text-right shrink-0">
          <p className="font-bold text-sm text-ink" suppressHydrationWarning>
            {showBalances ? formatMoney(account.current_balance) : "••••"}
          </p>
          <p className="text-[10px] text-ms-muted font-medium mt-0.5">
            {account.current_balance >= 0 ? "Available" : "Due"}
          </p>
        </div>

        {/* Actions */}
        {/* <div className="flex items-center gap-0.5 shrink-0 ml-1">
        <button
          className="p-1.5 rounded-xl transition-colors active:bg-surface-alt"
          onClick={() => handleOpenEdit(account)}
        >
          <MoreVertical className="w-4 h-4 text-ms-muted" />
        </button>
        <button
          onClick={() => handleDeleteClick(account.id)}
          className="p-1.5 rounded-xl transition-colors active:bg-surface-alt"
        >
          <Trash2 className="w-4 h-4 text-neg" />
        </button>
      </div> */}
      </button>
    )
  },
)

BankCard.displayName = "BankCard"

export default BankCard

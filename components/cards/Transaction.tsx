"use client"

import { useState } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { Transaction } from "@/types/Transaction"
import { formatMoney } from "@/lib/money"

interface TransactionCardProps {
  transaction: Transaction
  viewMode?: "list" | "calendar"
  onUpdate?: (transaction: Transaction) => void
  noAction?: boolean
  className?: string
}

const TransactionCard = ({
  transaction,
  viewMode = "list",
  onUpdate,
  noAction = false,
  className,
}: TransactionCardProps) => {
  const [open, setOpen] = useState(false)
  const [savedTransaction, setSavedTransaction] = useState<Transaction | null>(null)

  const currentTransaction =
    savedTransaction?.id === transaction.id &&
    savedTransaction.updated_at >= transaction.updated_at
      ? savedTransaction
      : transaction

  const isLocalOnly = transaction.offlinePending === true || transaction.offlineFailed === true

  const handleOpen = () => {
    if (isLocalOnly) return
    setOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={noAction ? undefined : handleOpen}
        disabled={isLocalOnly}
        className={cn(
          "grid h-full w-full grid-cols-[auto_1fr_auto] gap-3 rounded-xl border border-line bg-surface px-3.5 py-3 text-left transition-colors active:bg-surface-alt",
          className,
          viewMode === "list" && "grid-cols-[auto_1fr_auto]",
          viewMode === "calendar" && "grid-cols-[auto_1fr]",
          isLocalOnly && "cursor-default opacity-75",
        )}
      >
        <div className="flex w-11 items-center justify-center rounded-lg border border-line p-2 shadow-sm">
          {currentTransaction.categories?.icon ?? "·"}
        </div>
        <div className="min-w-0">
          <h4 className="truncate text-sm font-medium">
            {currentTransaction.title?.trim() || "Untitled"}
          </h4>
          <p className="truncate text-xs text-ms-muted">
            {currentTransaction.categories?.name ?? "Category"} ·{" "}
            {currentTransaction.accounts?.name ?? "Account"}
          </p>
        </div>
        <div
          className={cn("text-right", {
            "col-span-2 flex flex-row-reverse items-center justify-between border-t border-line pt-2":
              viewMode === "calendar",
          })}
        >
          <h4
            className={cn("text-sm font-semibold", {
              "text-expense": currentTransaction.type === "expense",
              "text-income": currentTransaction.type === "income",
            })}
          >
            {currentTransaction.type === "expense" ? "-" : "+"}{" "}
            {formatMoney(currentTransaction.amount)}
          </h4>
          <p className="text-xs text-ms-muted">
            {format(new Date(currentTransaction.occurred_at), "h:mm a")}
          </p>
        </div>
      </button>
    </>
  )
}

export default TransactionCard

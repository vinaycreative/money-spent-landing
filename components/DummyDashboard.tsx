"use client"

import { useState } from "react"
import { addDays, differenceInCalendarDays, isToday, startOfDay, subDays } from "date-fns"
import { Calendar, ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { formatMoney } from "@/lib/money"
import PageHeader from "@/components/layouts/PageHeader"
import TransactionCard from "@/components/cards/Transaction"
import { AddExpenseSheet } from "@/components/sheet/AddExpenseSheet"
import { AddIncomeSheet } from "@/components/sheet/AddIncomeSheet"
import data from "@/constant/transaction.json"
import { Transaction } from "@/types/Transaction"
const DummyDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(() => startOfDay(new Date()))
  const [expenseSheetOpen, setExpenseSheetOpen] = useState(false)
  const [incomeSheetOpen, setIncomeSheetOpen] = useState(false)
  const allTransactions = data as Transaction[]

  const dayOffset = differenceInCalendarDays(startOfDay(new Date()), selectedDate)
  const rotation = allTransactions.length ? Math.abs(dayOffset * 7) % allTransactions.length : 0
  const visibleCount = Math.max(4, allTransactions.length - (Math.abs(dayOffset) % 8) * 9)
  const transactions = [
    ...allTransactions.slice(rotation),
    ...allTransactions.slice(0, rotation),
  ].slice(0, visibleCount)

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="pt-6">
      <PageHeader subText="Dashboard" mainText="Hey Vinay" h1className="text-ink" />

      <section className="sticky top-0 z-10 space-y-3 border-b border-line bg-background px-4 pb-4 pt-4 mb-4">
        {/* Date navigator */}
        <div className="flex items-center justify-between rounded-xl border border-line bg-card px-3 py-3.5">
          <button
            type="button"
            onClick={() => setSelectedDate((d) => subDays(d, 1))}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-line bg-surface-elevated transition-colors active:bg-surface-alt"
          >
            <ChevronLeft size={18} className="text-ink" />
          </button>

          <div className="min-w-[130px] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDate.toDateString()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-sm font-bold text-ink">
                  {isToday(selectedDate)
                    ? "Today"
                    : selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                  {transactions.length} Transaction{transactions.length !== 1 ? "s" : ""}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => setSelectedDate((d) => addDays(d, 1))}
            disabled={isToday(selectedDate)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-line bg-surface-elevated transition-colors active:bg-surface-alt disabled:opacity-25"
          >
            <ChevronRight size={18} className="text-ink" />
          </button>
        </div>

        {/* Spent summary */}
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-ms-muted">
              Spent {isToday(selectedDate) ? "Today" : "on this day"}
            </span>
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-line bg-surface-alt px-2.5 py-1">
              <Calendar className="h-3 w-3 text-ms-muted" />
              <span className="text-[10px] font-medium text-ms-muted">
                {isToday(selectedDate)
                  ? "Today"
                  : selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
          </div>

          <div className="mb-2 flex items-baseline gap-2">
            <h1 className="text-5xl font-bold text-ink">{formatMoney(totalExpenses)}</h1>
          </div>

          <p className="text-xs font-medium text-ms-muted">
            {transactions.length} transaction{transactions.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Quick actions — first */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center text-ink justify-center gap-3 rounded-xl border border-line bg-surface p-4 text-xs font-medium active:bg-surface-alt hover:border-green-600 cursor-pointer"
          >
            <TrendingDown size={16} className="text-expense" /> Add Expense
          </button>
          <button
            type="button"
            className="flex items-center text-ink justify-center gap-3 rounded-xl border border-line bg-surface p-4 text-xs font-medium active:bg-surface-alt hover:border-green-600 cursor-pointer"
          >
            <TrendingUp size={16} className="text-income" /> Add Income
          </button>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-ink">Transactions</h3>
          <Link href="/spend" className="flex items-center gap-1 text-xs text-tertiary">
            View all <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Transaction list */}
      <section className="space-y-3 px-4">
        {transactions.map((transaction) => (
          <TransactionCard
            noAction
            key={transaction.id}
            className="cursor-pointer hover:bg-surface-alt hover:border-green-600"
            transaction={transaction}
          />
        ))}
      </section>

      <AddExpenseSheet
        open={expenseSheetOpen}
        onClose={() => setExpenseSheetOpen(false)}
        selectedDate={selectedDate}
      />

      <AddIncomeSheet
        open={incomeSheetOpen}
        onClose={() => setIncomeSheetOpen(false)}
        selectedDate={selectedDate}
      />
    </div>
  )
}

export default DummyDashboard

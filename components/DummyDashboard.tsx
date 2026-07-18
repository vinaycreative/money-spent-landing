"use client"

import { useState } from "react"
import { addDays, differenceInCalendarDays, isToday, startOfDay, subDays } from "date-fns"
import { Calendar, ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import dynamic from "next/dynamic"
import { formatMoney } from "@/lib/money"
import PageHeader from "@/components/layouts/PageHeader"
import TransactionCard from "@/components/cards/Transaction"
const AddExpenseSheet = dynamic(() => import("@/components/sheet/AddExpenseSheet").then(mod => mod.AddExpenseSheet), { ssr: false })
const AddIncomeSheet = dynamic(() => import("@/components/sheet/AddIncomeSheet").then(mod => mod.AddIncomeSheet), { ssr: false })
import { Transaction } from "@/types/Transaction"

/** Fixed timestamps avoid SSR/client hydration mismatches in gallery previews. */
const PREVIEW_AT = "2026-07-17T10:42:00.000Z"
const PREVIEW_DAY = startOfDay(new Date("2026-07-17T12:00:00.000Z"))

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    user_id: "u1",
    account_id: "a1",
    category_id: "c1",
    type: "expense",
    amount: 150,
    currency: "INR",
    title: "Coffee",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c1", icon: "🏖️", kind: "expense", name: "Drink", color: "bg-indigo-400" },
    accounts: { id: "a1", name: "SBI", type: "credit" },
  },
  {
    id: "2",
    user_id: "u1",
    account_id: "a2",
    category_id: "c2",
    type: "expense",
    amount: 50,
    currency: "INR",
    title: "Snacks",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c2", icon: "🍔", kind: "expense", name: "Food", color: "bg-yellow-400" },
    accounts: { id: "a2", name: "Fi", type: "bank" },
  },
  {
    id: "3",
    user_id: "u1",
    account_id: "a2",
    category_id: "c3",
    type: "expense",
    amount: 200,
    currency: "INR",
    title: "Medicine",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c3", icon: "🏥", kind: "expense", name: "Health", color: "bg-red-400" },
    accounts: { id: "a2", name: "Fi", type: "bank" },
  },
  {
    id: "4",
    user_id: "u1",
    account_id: "a2",
    category_id: "c4",
    type: "expense",
    amount: 100,
    currency: "INR",
    title: "Groceries",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c4", icon: "🛒", kind: "expense", name: "Shopping", color: "bg-purple-400" },
    accounts: { id: "a2", name: "Fi", type: "bank" },
  },
  {
    id: "5",
    user_id: "u1",
    account_id: "a2",
    category_id: "c5",
    type: "income",
    amount: 65000,
    currency: "INR",
    title: "Salary",
    description: "",
    occurred_at: PREVIEW_AT,
    related_transfer_id: null,
    created_at: PREVIEW_AT,
    updated_at: PREVIEW_AT,
    categories: { id: "c5", icon: "💰", kind: "income", name: "Salary", color: "bg-emerald-400" },
    accounts: { id: "a2", name: "Fi", type: "bank" },
  },
]

const DummyDashboard = ({ interactive = false }: { interactive?: boolean }) => {
  const [selectedDate, setSelectedDate] = useState(() => PREVIEW_DAY)
  const [expenseSheetOpen, setExpenseSheetOpen] = useState(false)
  const [incomeSheetOpen, setIncomeSheetOpen] = useState(false)

  const dayOffset = Math.abs(differenceInCalendarDays(PREVIEW_DAY, selectedDate))
  const rotation = dayOffset % MOCK_TRANSACTIONS.length
  
  // Deterministic subset based on date to simulate variety without huge DOM
  const transactions = [
    ...MOCK_TRANSACTIONS.slice(rotation),
    ...MOCK_TRANSACTIONS.slice(0, rotation),
  ].slice(0, 5) // Always show exactly 5 for consistency and performance

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
            aria-label="Previous day"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-line bg-surface-elevated transition-colors active:bg-surface-alt"
          >
            <ChevronLeft size={18} className="text-ink" />
          </button>

          <div className="min-w-[130px] text-center" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDate.toDateString()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
              >
                <p className="text-sm font-bold text-ink" suppressHydrationWarning>
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
            onClick={() => addDays(selectedDate, 1) <= startOfDay(new Date()) && setSelectedDate((d) => addDays(d, 1))}
            disabled={isToday(selectedDate)}
            aria-label="Next day"
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
              <span className="text-[10px] font-medium text-ms-muted" suppressHydrationWarning>
                {isToday(selectedDate)
                  ? "Today"
                  : selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
          </div>

          <div className="mb-2 flex items-baseline gap-2">
            <p className="text-5xl font-bold text-ink" suppressHydrationWarning>{formatMoney(totalExpenses)}</p>
          </div>

          <p className="text-xs font-medium text-ms-muted">
            {transactions.length} transaction{transactions.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Quick actions — first */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => interactive && setExpenseSheetOpen(true)}
            className="flex items-center text-ink justify-center gap-3 rounded-xl border border-line bg-surface p-4 text-xs font-medium active:bg-surface-alt hover:border-green-600 cursor-pointer"
          >
            <TrendingDown size={16} className="text-expense" /> Add Expense
          </button>
          <button
            type="button"
            onClick={() => interactive && setIncomeSheetOpen(true)}
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

      {interactive && (
        <>
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
        </>
      )}
    </div>
  )
}

export default DummyDashboard

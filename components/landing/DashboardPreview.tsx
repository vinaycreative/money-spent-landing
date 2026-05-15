"use client"

import { Calendar, ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/layouts/PageHeader"
import TransactionCard from "@/components/cards/Transaction"
import { Transaction } from "@/types/Transaction"

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
    occurred_at: new Date().toISOString(),
    related_transfer_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    categories: { id: "c1", icon: "🏖️", kind: "expense", name: "Drink", color: "bg-indigo-400" },
    accounts: { id: "a1", name: "SBI", type: "credit" }
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
    occurred_at: new Date().toISOString(),
    related_transfer_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    categories: { id: "c2", icon: "🍔", kind: "expense", name: "Food", color: "bg-yellow-400" },
    accounts: { id: "a2", name: "Fi", type: "bank" }
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
    occurred_at: new Date().toISOString(),
    related_transfer_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    categories: { id: "c5", icon: "💰", kind: "income", name: "Salary", color: "bg-emerald-400" },
    accounts: { id: "a2", name: "Fi", type: "bank" }
  }
]

export function DashboardPreview() {
  const transactions = MOCK_TRANSACTIONS.slice(0, 3)
  const totalExpenses = 200 // 150 + 50

  return (
    <div className="pt-6">
      <PageHeader subText="Dashboard" mainText="Hey Vinay" h1className="text-ink" />

      <section className="sticky top-0 z-10 space-y-3 border-b border-line bg-background px-4 pb-4 pt-4 mb-4">
        {/* Date navigator */}
        <div className="flex items-center justify-between rounded-xl border border-line bg-card px-3 py-3.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-line bg-surface-elevated opacity-50">
            <ChevronLeft size={18} className="text-ink" />
          </div>

          <div className="min-w-[130px] text-center">
            <p className="text-sm font-bold text-ink">Today</p>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
              {transactions.length} Transactions
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-line bg-surface-elevated opacity-25">
            <ChevronRight size={18} className="text-ink" />
          </div>
        </div>

        {/* Spent summary */}
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-ms-muted">
              Spent Today
            </span>
            <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-line bg-surface-alt px-2.5 py-1">
              <Calendar className="h-3 w-3 text-ms-muted" />
              <span className="text-[10px] font-medium text-ms-muted">
                Today
              </span>
            </div>
          </div>

          <div className="mb-2 flex items-baseline gap-2">
            <p className="text-5xl font-bold text-ink">₹{totalExpenses}</p>
          </div>

          <p className="text-xs font-medium text-ms-muted">
            {transactions.length} transactions
          </p>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center text-ink justify-center gap-3 rounded-xl border border-line bg-surface p-4 text-xs font-medium opacity-80">
            <TrendingDown size={16} className="text-expense" /> Add Expense
          </div>
          <div className="flex items-center text-ink justify-center gap-3 rounded-xl border border-line bg-surface p-4 text-xs font-medium opacity-80">
            <TrendingUp size={16} className="text-income" /> Add Income
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-ink">Transactions</h3>
          <div className="flex items-center gap-1 text-xs text-tertiary">
            View all <ChevronRight size={16} />
          </div>
        </div>
      </section>

      {/* Transaction list */}
      <section className="space-y-3 px-4">
        {transactions.map((transaction) => (
          <TransactionCard
            noAction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </section>
    </div>
  )
}

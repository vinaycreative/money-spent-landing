"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  Building2,
  CreditCard,
  Info,
  Plus,
  Smartphone,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { useQueryClient } from "@tanstack/react-query"

type Field = "amount" | "note" | "category" | "account" | null
type CategoryOption = { id: string; label: string; emoji: string }
type AccountOption = { id: string; label: string; color: string; icon: LucideIcon }

const SUGGESTED_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000]
const NOTE_SUGGESTIONS = ["Salary", "Freelance", "Refund", "Gift", "Bonus", "Interest"]

interface AddIncomeSheetProps {
  open: boolean
  onClose: () => void
  selectedDate: Date
  onSuccess?: () => void
}

export function AddIncomeSheet({ open, onClose, selectedDate, onSuccess }: AddIncomeSheetProps) {
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [category, setCategory] = useState<CategoryOption | null>(null)
  const [account, setAccount] = useState<AccountOption | null>(null)
  const [activeField, setActiveField] = useState<Field>("amount")
  const [confirmed, setConfirmed] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const parsedAmount = Number.parseFloat(amount)
  const isComplete = Boolean(parsedAmount > 0 && note.trim() && category && account)

  const handleSave = async () => {
    if (!isComplete || isSaving) return
    setIsSaving(true)
    const now = new Date()
    const occurredAt = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
    ).toISOString()
    try {
      handleClose()
      onSuccess?.()
    } finally {
      setIsSaving(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setAmount("")
      setNote("")
      setCategory(null)
      setAccount(null)
      setActiveField("amount")
      setConfirmed(false)
    }, 300)
  }

  return (
    <Drawer
      open={open}
      onOpenChange={(isOpen) => !isOpen && handleClose()}
      repositionInputs={false}
    >
      <DrawerContent className="rounded-t-3xl border-t border-line bg-surface shadow-[0_-16px_48px_rgba(0,0,0,0.14)] data-[vaul-drawer-direction=bottom]:max-h-[94svh]">
        <div className="mx-auto flex max-h-[92svh] w-full max-w-md flex-col overflow-hidden">
          <DrawerHeader className="grid grid-cols-[2.25rem_1fr_2.25rem] items-center gap-3 border-b border-line px-5 pb-3 pt-2 text-center">
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close add income sheet"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-elevated text-ms-muted transition-colors active:scale-95 active:bg-surface-alt"
            >
              <X size={16} />
            </button>
            <div>
              <DrawerTitle className="text-lg font-bold uppercase tracking-wide text-ink">
                Add Income
              </DrawerTitle>
              <DrawerDescription className="text-[12px] font-medium text-ms-muted">
                Fill the sentence to save income
              </DrawerDescription>
            </div>
            <div className="relative flex justify-end">
              <button
                type="button"
                aria-label="Show add income tip"
                className="peer flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-elevated text-ms-muted transition-colors active:scale-95 active:bg-surface-alt"
              >
                <Info size={16} />
              </button>
              <div className="pointer-events-none absolute right-0 top-11 z-10 w-52 rounded-xl border border-line bg-surface px-3 py-2 text-left text-xs font-medium text-ms-muted opacity-0 shadow-lg transition-opacity peer-focus:opacity-100 peer-hover:opacity-100">
                Tap any highlighted part to edit.
              </div>
            </div>
          </DrawerHeader>

          <AnimatePresence mode="wait">
            {!confirmed ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="min-h-[480px] flex-1 overflow-y-auto"
              >
                <div className="px-5 py-4">
                  <p className="text-[26px] font-black leading-[1.15] tracking-tight text-ink">
                    I received{" "}
                    <SentenceChip
                      active={activeField === "amount"}
                      filled={!!amount}
                      color="var(--income)"
                      onTap={() => setActiveField("amount")}
                    >
                      {amount ? `₹${amount}` : "₹---"}
                    </SentenceChip>{" "}
                    from{" "}
                    <SentenceChip
                      active={activeField === "note"}
                      filled={!!note}
                      color="var(--ink)"
                      onTap={() => setActiveField("note")}
                    >
                      {note || "---"}
                    </SentenceChip>{" "}
                    as{" "}
                    <SentenceChip
                      active={activeField === "category"}
                      filled={!!category}
                      color="var(--income)"
                      onTap={() => setActiveField("category")}
                    >
                      {category ? `${category.emoji}${category.label}` : "---"}
                    </SentenceChip>{" "}
                    into{" "}
                    <SentenceChip
                      active={activeField === "account"}
                      filled={!!account}
                      color={account?.color ?? "#3b82f6"}
                      onTap={() => setActiveField("account")}
                    >
                      {account?.label ?? "---"}
                    </SentenceChip>{" "}
                    today
                  </p>
                </div>

                <div className="min-h-[190px] px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
                  <AnimatePresence mode="wait">
                    {activeField === "amount" && (
                      <AmountInput
                        key="amount"
                        value={amount}
                        onChange={setAmount}
                        onNext={() => setActiveField("note")}
                      />
                    )}
                    {activeField === "note" && (
                      <NoteInput
                        key="note"
                        value={note}
                        onChange={setNote}
                        onNext={() => setActiveField("category")}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-4"
              >
                <p className="mb-8 rounded-3xl border border-line bg-surface-elevated p-4 text-[28px] font-black leading-[1.15] tracking-tight text-ink">
                  I received <span className="text-income">₹{amount}</span> from{" "}
                  <span className="text-ink">{note.trim()}</span> as{" "}
                  <span className="text-income">
                    {category?.emoji}
                    {category?.label}
                  </span>{" "}
                  into <span style={{ color: account?.color }}>{account?.label}</span> today
                </p>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-ink text-base font-bold text-background shadow-sm transition-transform active:scale-[0.98] disabled:opacity-60"
                >
                  {isSaving ? "Saving…" : "Save Income"}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmed(false)}
                  className="mt-3 w-full rounded-xl py-3 text-sm font-semibold text-ms-muted transition-colors active:bg-surface-elevated"
                >
                  Wait, I need to edit something
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function SentenceChip({
  children,
  active,
  filled,
  color,
  onTap,
}: {
  children: React.ReactNode
  active: boolean
  filled: boolean
  color: string
  onTap: () => void
}) {
  return (
    <motion.span
      onClick={onTap}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex cursor-pointer items-center rounded-md border-b-2 border-dashed px-2 py-0.5 transition-all duration-200",
        active ? "bg-surface-alt shadow-sm" : "bg-surface-elevated",
      )}
      style={{
        borderColor: active ? color : "var(--line-strong)",
        color: filled ? color : "var(--text-subtle)",
      }}
    >
      {children}
    </motion.span>
  )
}

function AmountInput({
  value,
  onChange,
  onNext,
}: {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
    >
      <label className="mb-4 flex h-14 cursor-text items-center gap-2 rounded-xl border border-income/40 bg-surface-elevated px-4 transition-colors focus-within:border-income focus-within:ring-2 focus-within:ring-income/10">
        <span className="text-xl font-bold text-income">₹</span>
        <input
          type="number"
          inputMode="decimal"
          enterKeyHint="next"
          placeholder="0"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && value && onNext()}
          className="min-w-0 flex-1 bg-transparent text-xl font-bold text-ink outline-none placeholder:text-ms-muted focus:outline-none focus-visible:outline-none"
          style={{ outline: "none" }}
        />
      </label>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-ms-muted">
        Suggested Amounts
      </p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTED_AMOUNTS.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => {
              onChange(String(amount))
              onNext()
            }}
            className="h-9 rounded-full border border-line bg-surface-elevated px-4 text-sm font-semibold text-ink transition-colors active:scale-95 active:bg-surface-alt"
          >
            ₹{amount.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

function NoteInput({
  value,
  onChange,
  onNext,
}: {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
    >
      <label className="mb-4 flex h-14 cursor-text items-center gap-2 rounded-xl border border-line bg-surface-elevated px-4 transition-colors focus-within:border-income focus-within:ring-2 focus-within:ring-income/10">
        <input
          type="text"
          enterKeyHint="done"
          placeholder="e.g. Salary, Freelance, Refund..."
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && value.trim() && onNext()}
          autoFocus
          className="min-w-0 flex-1 bg-transparent text-base font-semibold text-ink outline-none placeholder:text-ms-muted focus:outline-none focus-visible:outline-none"
          style={{ outline: "none" }}
        />
      </label>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-ms-muted">
        Suggestions
      </p>
      <div className="flex flex-wrap gap-2">
        {NOTE_SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => {
              onChange(suggestion)
              onNext()
            }}
            className="h-9 rounded-full border border-line bg-surface-elevated px-4 text-sm font-semibold text-ink transition-colors active:scale-95 active:bg-surface-alt"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

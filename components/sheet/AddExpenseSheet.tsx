"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { motion, AnimatePresence } from "motion/react"
import {
  Building2,
  Calendar,
  CreditCard,
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

// ── Types ──────────────────────────────────────────────────
type Field = "amount" | "note" | "category" | "account" | null
type CategoryOption = { id: string; label: string; emoji: string }
type AccountOption = { id: string; label: string; color: string; icon: LucideIcon }

const SUGGESTED_AMOUNTS = [50, 100, 150, 200, 500, 1000]
const NOTE_SUGGESTIONS = ["Coffee", "Lunch", "Groceries", "Uber", "Fuel", "Snacks"]

/** Calendar day from `day` with clock time from `time`. */
function mergeDayWithTime(day: Date, time: Date): Date {
  return new Date(
    day.getFullYear(),
    day.getMonth(),
    day.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
    time.getMilliseconds(),
  )
}

// ── Main component ─────────────────────────────────────────
interface AddExpenseSheetProps {
  open: boolean
  onClose: () => void
  selectedDate: Date
  onSuccess?: () => void
}

export function AddExpenseSheet({ open, onClose, selectedDate, onSuccess }: AddExpenseSheetProps) {
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [category, setCategory] = useState<CategoryOption | null>(null)
  const [account, setAccount] = useState<AccountOption | null>(null)
  const [activeField, setActiveField] = useState<Field>("amount")
  const [confirmed, setConfirmed] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [occurredAtInput, setOccurredAtInput] = useState(() =>
    format(mergeDayWithTime(selectedDate, new Date()), "yyyy-MM-dd'T'HH:mm"),
  )
  const [dateTimeOpen, setDateTimeOpen] = useState(false)
  const parsedAmount = Number.parseFloat(amount)
  const isComplete = Boolean(parsedAmount > 0 && note.trim() && category && account)

  useEffect(() => {
    if (!open) return
    const now = new Date()
    setOccurredAtInput(format(mergeDayWithTime(selectedDate, now), "yyyy-MM-dd'T'HH:mm"))
    setDateTimeOpen(false)
    // Only when the sheet opens — keeps manual date/time edits while open
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const whenLabel = occurredAtInput ? format(new Date(occurredAtInput), "d MMM yyyy, h:mm a") : ""

  const handleSave = async () => {
    if (!isComplete || isSaving || !occurredAtInput) return
    setIsSaving(true)
    const occurredAt = new Date(occurredAtInput).toISOString()
    try {
      handleClose()
      onSuccess?.()
    } finally {
      setIsSaving(false)
    }
  }

  const handleClose = () => {
    onClose()
    // Reset after close animation
    setTimeout(() => {
      setAmount("")
      setNote("")
      setCategory(null)
      setAccount(null)
      setActiveField("amount")
      setConfirmed(false)
      setDateTimeOpen(false)
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
          {/* Header */}
          <DrawerHeader
            className="border-b border-line grid 
          grid-cols-[2.25rem_1fr_2.25rem] items-center gap-3 px-5 pb-3 pt-2 text-center"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close add expense sheet"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-elevated text-ms-muted transition-colors active:scale-95 active:bg-surface-alt"
            >
              <X size={16} />
            </button>
            <div>
              <DrawerTitle className="text-lg font-bold uppercase tracking-wide text-ink">
                Add Expense
              </DrawerTitle>
              <DrawerDescription className="text-[12px] font-medium text-ms-muted">
                Fill the sentence to save a spend
              </DrawerDescription>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                aria-expanded={dateTimeOpen}
                aria-controls="add-expense-datetime"
                aria-label="Choose transaction date and time"
                onClick={() => setDateTimeOpen((v) => !v)}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border bg-surface-elevated text-ms-muted transition-colors active:scale-95 active:bg-surface-alt",
                  dateTimeOpen ? "border-line-strong text-ink" : "border-line",
                )}
              >
                <Calendar size={16} aria-hidden />
              </button>
            </div>
          </DrawerHeader>

          <AnimatePresence initial={false}>
            {dateTimeOpen ? (
              <motion.div
                key="datetime"
                id="add-expense-datetime"
                role="region"
                aria-label="Transaction date and time"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-b border-line bg-surface-alt/80"
              >
                <label className="block px-5 pb-3 pt-2">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-ms-muted">
                    When
                  </span>
                  <input
                    type="datetime-local"
                    value={occurredAtInput}
                    onChange={(e) => setOccurredAtInput(e.target.value)}
                    className="flex h-12 w-full rounded-xl border border-line bg-surface-elevated px-3 text-base font-semibold text-ink outline-none transition-colors focus:border-line-strong focus:ring-2 focus:ring-ink/10"
                  />
                </label>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {!confirmed ? (
              // ── Step 1: Fill in sentence ──────────────────
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="min-h-[480px] flex-1 overflow-y-auto"
              >
                {/* Sentence */}
                <div className="px-5 py-4">
                  <p className="text-[26px] font-black leading-[1.15] tracking-tight text-ink">
                    I spent{" "}
                    <SentenceChip
                      active={activeField === "amount"}
                      filled={!!amount}
                      color="var(--expense)"
                      onTap={() => setActiveField("amount")}
                    >
                      {amount ? `₹${amount}` : "₹---"}
                    </SentenceChip>{" "}
                    on{" "}
                    <SentenceChip
                      active={activeField === "note"}
                      filled={!!note}
                      color="var(--ink)"
                      onTap={() => setActiveField("note")}
                    >
                      {note || "---"}
                    </SentenceChip>{" "}
                    for{" "}
                    <SentenceChip
                      active={activeField === "category"}
                      filled={!!category}
                      color="var(--warning)"
                      onTap={() => setActiveField("category")}
                    >
                      {category ? `${category.emoji}${category.label}` : "---"}
                    </SentenceChip>{" "}
                    from{" "}
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

                {/* Active field input */}
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
              // ── Step 2: Confirm ───────────────────────────
              <motion.div
                key="confirm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-4"
              >
                <p className="mb-8 rounded-3xl border border-line bg-surface-elevated p-4 text-[28px] font-black leading-[1.15] tracking-tight text-ink">
                  I spent <span className="text-neg">₹{amount}</span> on{" "}
                  <span className="text-ink">{note.trim()}</span> for{" "}
                  <span className="text-ms-warning">
                    {category?.emoji}
                    {category?.label}
                  </span>{" "}
                  from <span style={{ color: account?.color }}>{account?.label}</span>
                  {whenLabel ? (
                    <>
                      {" "}
                      on <span className="text-ms-muted">{whenLabel}</span>
                    </>
                  ) : null}
                </p>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-ink text-base font-bold text-background shadow-sm transition-transform active:scale-[0.98] disabled:opacity-60"
                >
                  {isSaving ? "Saving…" : "✓ Save Transaction"}
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

// ── Sentence chip ──────────────────────────────────────────
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

// ── Amount input ───────────────────────────────────────────
function AmountInput({
  value,
  onChange,
  onNext,
}: {
  value: string
  onChange: (v: string) => void
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
    >
      <label className="mb-4 flex h-14 cursor-text items-center gap-2 rounded-xl border border-neg/40 bg-surface-elevated px-4 transition-colors focus-within:border-neg focus-within:ring-2 focus-within:ring-neg/10">
        <span className="text-xl font-bold text-neg">₹</span>
        <input
          type="number"
          inputMode="decimal"
          enterKeyHint="next"
          placeholder="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && value && onNext()}
          className="min-w-0 flex-1 bg-transparent text-xl font-bold text-ink outline-none placeholder:text-ms-muted focus:outline-none focus-visible:outline-none"
          style={{ outline: "none" }}
        />
      </label>
      {/* Suggested amounts */}
      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-ms-muted">
        Suggested Amounts
      </p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTED_AMOUNTS.map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => {
              onChange(String(amt))
              onNext()
            }}
            className="h-9 rounded-full border border-line bg-surface-elevated px-4 text-sm font-semibold text-ink transition-colors active:scale-95 active:bg-surface-alt"
          >
            ₹{amt.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

// ── Note input ─────────────────────────────────────────────
function NoteInput({
  value,
  onChange,
  onNext,
}: {
  value: string
  onChange: (v: string) => void
  onNext: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
    >
      <label className="mb-4 flex h-14 cursor-text items-center gap-2 rounded-xl border border-line bg-surface-elevated px-4 transition-colors focus-within:border-neg focus-within:ring-2 focus-within:ring-neg/10">
        <input
          type="text"
          enterKeyHint="done"
          placeholder="e.g. Coffee, Uber, Lunch..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && value.trim() && onNext()}
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

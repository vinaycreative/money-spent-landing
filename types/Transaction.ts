export interface Transaction {
  id: string
  user_id: string
  account_id: string
  category_id: string | null
  type: "expense" | "income" | "transfer" | null
  amount: number
  currency: string
  title: string | null
  description: string | null
  occurred_at: string
  related_transfer_id: string | null
  created_at: string
  updated_at: string
  /** Joined row; null if missing or broken FK. */
  categories: {
    id: string
    icon: string
    kind: string
    name: string
    color: string
  } | null
  /** Joined row; null if missing or broken FK. */
  accounts: {
    id: string
    name: string
    type: string
  } | null
  /** Set when this row exists only in IndexedDB and is waiting for API sync. */
  offlinePending?: boolean
  /** Last background sync attempt failed; user can retry when online. */
  offlineFailed?: boolean
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Building2, CreditCard, Wallet, PiggyBank } from "lucide-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getAccountIcon = (type: string) => {
  switch (type) {
    case "bank":
      return Building2
    case "credit":
      return CreditCard
    case "cash":
      return Wallet
    case "wallet":
      return Wallet
    case "savings":
      return PiggyBank
    case "investment":
      return PiggyBank
    default:
      return Building2
  }
}

export const getAccountTypeLabel = (type: string) => {
  switch (type) {
    case "bank":
      return "Bank"
    case "credit":
      return "Credit Card"
    case "cash":
      return "Cash"
    case "wallet":
      return "Wallet"
    case "savings":
      return "Savings"
    case "investment":
      return "Investment"
    default:
      return type
  }
}

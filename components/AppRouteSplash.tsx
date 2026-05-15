import Image from "next/image"

export function AppRouteSplash() {
  return (
    <div
      className="mx-auto flex h-dvh w-full max-w-md flex-col items-center justify-center bg-background px-6"
      aria-busy="true"
      aria-live="polite"
    >
      <Image
        src="/logo.svg"
        alt="MoneySpent"
        width={48}
        height={48}
        className="h-12 w-12 rounded-xl"
        priority
      />
      <div
        className="mt-6 size-9 animate-spin rounded-full border-2 border-income/25 border-t-income"
        aria-hidden
      />
      <p className="mt-5 text-xs font-bold text-ms-muted">Loading…</p>
    </div>
  )
}

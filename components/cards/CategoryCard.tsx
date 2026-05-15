export interface CategoryItemData {
  category: string
  icon: string
  color: string
  amount: number
  percentage: number
  count: number
}

interface CategoryCardProps {
  category: CategoryItemData
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="w-full bg-card border border-line rounded-xl p-4  active:bg-surface-alt transition-colors text-left">
      {/* Content Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-surface-alt flex items-center justify-center text-2xl shrink-0">
          {category.icon || "💰"}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <p className="text-base font-bold text-ink capitalize">
              {category.category.replace(/_/g, " ")}
            </p>
            <p className="text-base font-bold text-ink">
              ₹
              {Number(category.amount).toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-ms-muted font-medium">
              {category.count ?? 0} transaction{(category.count ?? 0) !== 1 ? "s" : ""}
            </p>
            <p className="text-xs font-bold text-ink">
              {Number(category.percentage ?? 0).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 rounded-full bg-surface-alt overflow-hidden">
        <div
          className="h-full rounded-full bg-ink transition-all duration-1000 ease-out"
          style={{ width: `${Math.max(2, category.percentage)}%` }}
        />
      </div>
    </div>
  )
}

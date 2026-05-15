export type CategoryKind = "expense" | "income"

export type Category = {
  id: string
  name: string
  icon: string
  kind: CategoryKind
  color: string
}

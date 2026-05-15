"use client"
// import { useAuth } from "@/hooks"
import { cn } from "@/lib/utils"
interface Header {
  subText: string
  mainText?: string
  rightComponent?: React.ReactNode
  h1className?: string
}

const Header = ({ subText, mainText, rightComponent, h1className }: Header) => {
  // const { user, userName } = useAuth()

  const firstName = "Vinay"
  return (
    <header className="h-fit flex items-start justify-between px-4 pt-4">
      <div>
        <p className="text-xs text-tertiary font-medium mb-0.5">{subText}</p>
        <h1 className={cn("text-3xl font-bold text-primary tracking-tight", h1className)}>
          {mainText ?? `Hey ${firstName}`}
        </h1>
      </div>
      {rightComponent}
    </header>
  )
}

export default Header

"use client"
import RotatingText from "./RotatingText"

interface RotatingWordProps {
  texts: string[]
}

export const RotatingWord = ({ texts }: RotatingWordProps) => {
  return (
    <RotatingText
      texts={texts}
      mainClassName="px-2 w-[270px] sm:px-3 bg-lp-em-soft text-lp-em py-1 sm:py-1.5 justify-center rounded-lg inline-flex items-center"
      staggerFrom="first"
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
      splitBy="characters"
      auto
      loop
    />
  )
}

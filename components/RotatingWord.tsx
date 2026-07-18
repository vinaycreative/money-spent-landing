"use client"
import RotatingText from "./RotatingText"

interface RotatingWordProps {
  texts: string[]
}

export const RotatingWord = ({ texts }: RotatingWordProps) => {
  return (
    <RotatingText
      texts={texts}
      mainClassName="w-auto px-2.5 sm:px-3 bg-lp-em-soft text-lp-em py-0.5 sm:py-1 justify-center rounded-md inline-flex items-center overflow-hidden"
      staggerFrom="first"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      staggerDuration={0.02}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
      transition={{ type: "spring", damping: 28, stiffness: 380 }}
      rotationInterval={2000}
      splitBy="characters"
      auto
      loop
    />
  )
}

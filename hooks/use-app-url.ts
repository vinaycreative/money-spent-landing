import { useState, useEffect } from "react"

export function useAppUrl(path: string) {
  const [url, setUrl] = useState(`https://my.moneyspent.app${path}`)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname

      if (hostname.includes("moneyspend.app")) {
        setUrl(`https://my.moneyspend.app${path}`)
      } else if (hostname.includes("moneyspent.in")) {
        setUrl(`https://my.moneyspent.in${path}`)
      } else if (hostname.includes("moneyspent.app")) {
        setUrl(`https://my.moneyspent.app${path}`)
      }
    }
  }, [path])

  return url
}

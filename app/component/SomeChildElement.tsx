"use client"

import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

function SomeChildElement() {
  const [cnt, setCnt] = useState(3)

  useEffect(() => {
    let a: NodeJS.Timeout | undefined
    if (cnt > 0) {
      a = setTimeout(() => {
        setCnt(cnt - 1)
      }, 500);
    }
    return () => a && clearTimeout(a)
  }, [cnt])

  useEffect(() => {
    if (cnt <= 0) {
      redirect("https://google.com")
    }
  }, [cnt])

  return (
    <p>
      redirect to google {cnt}
    </p>

  )
}

export default SomeChildElement
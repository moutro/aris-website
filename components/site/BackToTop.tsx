"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTop = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" })
  }

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={[
        "fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg",
        "bg-[#7f1d1d] text-white hover:bg-[#991b1b]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7f1d1d]/40",
        "transition-opacity", show ? "opacity-100" : "opacity-0 pointer-events-none"
      ].join(" ")}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#3b2b2a] bg-[#151012] text-zinc-50 shadow-md">
      {/* FULL WIDTH ROW */}
      <div className="flex w-full items-center justify-between gap-4 px-6 py-3">
        {/* LEFT: Brand / name */}
        <div className="flex shrink-0 items-baseline gap-2">
          <Link
            href={isEnglish ? "/en" : "/"}
            className="text-lg sm:text-xl font-semibold tracking-tight"
          >
            {isEnglish ? "Aris Papadopoulos" : "Άρης Παπαδόπουλος"}
          </Link>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-zinc-400 sm:inline">
            {isEnglish ? "Author" : "Συγγραφέας"}
          </span>
        </div>

        {/* RIGHT (desktop): nav + language toggle */}
        <div className="hidden md:flex min-w-0 items-center justify-end gap-4 text-xs sm:text-sm whitespace-nowrap">
          <nav className="flex items-center gap-4">
            <a
              href="#book"
              className="text-zinc-200 hover:text-[#fca5a5] cursor-pointer transition-colors"
            >
              {isEnglish ? "Book" : "Βιβλίο"}
            </a>
            <a
              href="#about"
              className="text-zinc-200 hover:text-[#fca5a5] cursor-pointer transition-colors"
            >
              {isEnglish ? "Author" : "Συγγραφέας"}
            </a>
            <a
              href="#contact"
              className="text-zinc-200 hover:text-[#fca5a5] cursor-pointer transition-colors"
            >
              {isEnglish ? "Contact" : "Επικοινωνία"}
            </a>
          </nav>

          <div className="ml-4 flex items-center gap-1">
            {/* GR button */}
            <Button
              asChild
              size="sm"
              variant={isEnglish ? "outline" : "default"}
              className={
                isEnglish
                  ? "border border-zinc-500 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:text-white cursor-pointer"
                  : "bg-[#7f1d1d] text-zinc-50 hover:bg-[#991b1b] cursor-pointer"
              }
            >
              <Link href="/">GR</Link>
            </Button>

            {/* EN button */}
            <Button
              asChild
              size="sm"
              variant={isEnglish ? "default" : "outline"}
              className={
                isEnglish
                  ? "bg-[#7f1d1d] text-zinc-50 hover:bg-[#991b1b] cursor-pointer"
                  : "border border-zinc-500 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:text-[#fca5a5] cursor-pointer"
              }
            >
              <Link href="/en">EN</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT (mobile): hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu (full width as well) */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#3b2b2a] bg-[#151012]">
          <div className="flex w-full flex-col gap-3 px-6 py-4 text-sm">
            <nav className="flex flex-col gap-2">
              <a
                href="#book"
                className="text-zinc-200 hover:text-[#fca5a5] cursor-pointer transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {isEnglish ? "Book" : "Βιβλίο"}
              </a>
              <a
                href="#about"
                className="text-zinc-200 hover:text-[#fca5a5] cursor-pointer transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {isEnglish ? "Author" : "Συγγραφέας"}
              </a>
              <a
                href="#contact"
                className="text-zinc-200 hover:text-[#fca5a5] cursor-pointer transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {isEnglish ? "Contact" : "Επικοινωνία"}
              </a>
            </nav>

            <div className="mt-3 flex items-center gap-2">
              <Button
                asChild
                size="sm"
                variant={isEnglish ? "outline" : "default"}
                className={
                  isEnglish
                    ? "border border-zinc-500 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:text-white cursor-pointer"
                    : "bg-[#7f1d1d] text-zinc-50 hover:bg-[#991b1b] cursor-pointer"
                }
              >
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  GR
                </Link>
              </Button>

              <Button
                asChild
                size="sm"
                variant={isEnglish ? "default" : "outline"}
                className={
                  isEnglish
                    ? "bg-[#7f1d1d] text-zinc-50 hover:bg-[#991b1b] cursor-pointer"
                    : "border border-zinc-500 bg-transparent text-zinc-200 hover:bg-zinc-800 hover:text-[#fca5a5] cursor-pointer"
                }
              >
                <Link href="/en" onClick={() => setMenuOpen(false)}>
                  EN
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
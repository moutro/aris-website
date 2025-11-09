import { Facebook, Instagram, Twitter, Music2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-zinc-100 to-zinc-200/70 dark:from-[#121012] dark:to-[#080607]/80 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_24px_rgba(0,0,0,0.35)]">
      <div className="flex flex-col gap-6 px-6 py-12 md:py-16 text-sm text-zinc-600 dark:text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
        {/* Socials */}
        <div className="flex flex-wrap gap-4">
          {[
            { href: "https://x.com/aris_arisp", label: "@aris_arisp", Icon: Twitter },
            { href: "https://instagram.com/papadopoulos.aris_greg", label: "Instagram", Icon: Instagram },
            { href: "https://www.tiktok.com/@aris.greg", label: "TikTok", Icon: Music2 },
            { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
          ].map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 no-underline transition-colors
                         text-[var(--brand-burgundy)] hover:text-[var(--brand-burgundy-hover)]
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-burgundy)]/40 rounded-sm"
            >
              <Icon className="h-4 w-4 transition-colors" />
              {label}
            </a>
          ))}
        </div>

        {/* Credits */}
        <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 sm:whitespace-nowrap">
          Site design &amp; development:{" "}
          <a
            href="https://www.webdev323.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:no-underline transition-colors
                       text-[var(--brand-burgundy)] hover:text-[var(--brand-burgundy-hover)]
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-burgundy)]/40 rounded-sm"
          >
            WebDev323
          </a>{" "}
          /{" "}
          <a
            href="https://www.jasonbariamis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:no-underline transition-colors
                       text-[var(--brand-burgundy)] hover:text-[var(--brand-burgundy-hover)]
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-burgundy)]/40 rounded-sm"
          >
            Jason Bariamis
          </a>{" "}
        </div>
      </div>
    </footer>
  )
}
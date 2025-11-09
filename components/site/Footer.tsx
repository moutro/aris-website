import { Facebook, Instagram, Twitter, Music2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-zinc-100/90 dark:bg-zinc-900/80">
      <div className="flex flex-col gap-4 px-6 py-6 text-sm text-zinc-600 dark:text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
        {/* Socials */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://x.com/aris_arisp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Twitter className="h-4 w-4" />
            @aris_arisp
          </a>
          <a
            href="https://instagram.com/papadopoulos.aris_greg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@aris.greg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Music2 className="h-4 w-4" />
            TikTok
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </a>
        </div>

        {/* Credits – try to keep on one line on larger screens */}
        <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 sm:whitespace-nowrap">
          Site design &amp; development:{" "}
          <a
            href="https://www.webdev323.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WebDev323
          </a>{" "}
          –{" "}
          <a
            href="https://www.jasonbariamis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Jason Bariamis
          </a>{" "}
          · November 2025
        </div>
      </div>
    </footer>
  )
}
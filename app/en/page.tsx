import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import ContactForm from "@/components/site/ContactForm"
import BackToTop from "@/components/site/BackToTop"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <Header />

      {/* HERO */}
      <main className="flex-1">
        <section className="relative h-[420px] w-full overflow-hidden">
          <Image
            src="/aris/books/few-oranges-cover.jpg"
            alt="A Few Oranges for Sissy cover"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-6">
            <div className="space-y-4 text-white">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-200">
                Aris Papadopoulos
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                A Few Oranges for Sissy
              </h1>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                Novel
              </p>
              <p className="max-w-xl text-sm sm:text-base text-zinc-200">
                The official site of author and journalist Aris Papadopoulos.
                Learn more about the novel, the author&apos;s work, and how to
                get in touch.
              </p>
              <div className="flex flex-wrap gap-3">
  {/* Primary hero button – deep red (match GR) */}
  <Button asChild className="bg-[#7f1d1d] hover:bg-[#991b1b] cursor-pointer">
    <Link href="#book">About the book</Link>
  </Button>

  {/* Secondary hero button – white with burgundy hover text (match GR) */}
  <Button
    variant="outline"
    asChild
    className="bg-white/90 text-black hover:bg-white hover:text-[#7f1d1d] cursor-pointer"
  >
    <Link href="#about">About the author</Link>
  </Button>
</div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-12">
          {/* BOOK FIRST */}
          <section
            id="book"
            className="grid items-start gap-6 md:grid-cols-[minmax(0,260px),minmax(0,1fr)]"
          >
            {/* cover */}
            <div className="flex justify-center">
              <a
                href="/aris/books/few-oranges-cover.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full max-w-[300px] aspect-[2/3] overflow-hidden rounded-xl bg-zinc-200 shadow"
              >
                <Image
                  src="/aris/books/few-oranges-cover.jpg"
                  alt="A Few Oranges for Sissy"
                  fill
                  className="object-contain"
                />
              </a>
            </div>

            <Card>
              <CardContent className="space-y-3 p-6">
                <h2 className="text-2xl font-semibold">
                  A Few Oranges for Sissy
                </h2>
                <p className="text-sm uppercase tracking-wide text-zinc-500">
                  Λίγα πορτοκάλια για τη Σίσσυ
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  The novel opens with two soldiers escorting a woman—mother of
                  four—branded a “communist” and punished for choices that were
                  never entirely her own. Through Sissy and her siblings, we
                  follow a family that carries the weight of civil war,
                  migration, and long–kept secrets.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  The book was first drafted in Greek in the late 1980s in
                  Chicago, then set aside for years before being revised,
                  tightened, and translated into English. It traces the
                  emotional and political landscapes of Greek communities at
                  home and abroad, and the ways the past continues to shape the
                  present.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* ABOUT + IMAGES */}
        <section
        id="about"
        className="grid items-center gap-12 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]"
        >
        {/* Text */}
        <div className="space-y-6 leading-relaxed">
            <h2 className="text-2xl font-semibold">Aris Papadopoulos</h2>

            {/* Intro */}
            <p className="text-zinc-700 dark:text-zinc-300">
            Aris Papadopoulos is a Greek-American journalist and author whose career has
            bridged New York and Athens for more than three decades, chronicling the Greek
            diaspora and the intersections of culture, politics, and identity.
            </p>

            {/* Journalistic Career */}
            <h3 className="text-lg font-semibold mt-8">Journalistic Career</h3>
            <p className="text-zinc-700 dark:text-zinc-3 00">
            Since 1991 he has worked for the daily Greek-American newspaper
            <span className="italic"> The National Herald (Εθνικός Κήρυξ)</span>,
            first in New York and, from 1996, at the Athens Bureau, where he served as
            Managing Editor and bureau lead (2001–2015). Over three decades he has interviewed
            U.S., Greek-American, and Greek politicians, and authored in-depth features on topics
            such as AIDS, the missing of the Cyprus tragedy, Greek diners, and Modern Greek Studies
            in North America.
            </p>

            {/* Cultural Reporting */}
            <h3 className="text-lg font-semibold">Cultural Reporting</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
            He covered major exhibitions of Greek antiquities at the Metropolitan Museum of Art and
            the largest retrospective of Greek cinema at MoMA. He served as editor-in-chief of
            <span className="italic"> Rizes</span>, led community news, and wrote the daily column
            <span className="italic"> “Eilikrina Ymeteros” (Sincerely Yours)</span>. He also advised
            U.S. Congresswoman Carolyn Maloney on Greek affairs.
            </p>

            {/* Current Work */}
            <h3 className="text-lg font-semibold">Now</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
            He retired from <span className="italic">The National Herald</span> in 2024 and continues
            to collaborate part-time. <span className="italic">A Few Oranges for Sissy</span> is his
            debut novel, published in Greek and English.
            </p>

            {/* 3 images grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a href="/aris/headshots/hero-1.jpg" target="_blank" rel="noopener noreferrer"
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
                <Image src="/aris/headshots/hero-1.jpg" alt="Aris Papadopoulos" fill className="object-cover" />
            </a>
            <a href="/aris/headshots/hero-3.jpg" target="_blank" rel="noopener noreferrer"
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
                <Image src="/aris/headshots/hero-3.jpg" alt="Aris Papadopoulos" fill className="object-cover" />
            </a>
            <a href="/aris/headshots/hero-4.jpg" target="_blank" rel="noopener noreferrer"
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
                <Image src="/aris/headshots/hero-4.jpg" alt="Aris Papadopoulos" fill className="object-cover" />
            </a>
            </div>
        </div>

        {/* Portrait */}
        <div className="flex justify-center">
            <a href="/aris/headshots/hero-2.jpg" target="_blank" rel="noopener noreferrer"
            className="block w-full max-w-sm">
            <Image
                src="/aris/headshots/hero-2.jpg"
                alt="Aris Papadopoulos"
                width={800}
                height={1200}
                className="h-auto w-full rounded-2xl shadow object-cover bg-zinc-200"
                priority
            />
            </a>
        </div>
        </section>

          {/* CONTACT */}
          <ContactForm />
        </div>
      </main>
        <BackToTop />
      <Footer />
    </div>
  )
}
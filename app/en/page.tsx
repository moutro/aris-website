import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/site/Header"
import Footer from "@/components/site/Footer"
import ContactForm from "@/components/site/ContactForm"

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
                <Button asChild>
                  <Link href="#book">About the book</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="bg-white/90 text-black hover:bg-white"
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
            className="grid items-center gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Aris Papadopoulos</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                Aris Papadopoulos has been a journalist with the Greek-American
                daily newspaper <em>Ethnikos Kirikas</em> (The National Herald)
                since 1991, first in New York and from 1996 in the Athens
                bureau. From 2001 to 2015 he served as Managing Editor and head
                of the Athens office. Over three decades he conducted numerous
                interviews with American and Greek-American politicians, as well
                as Greek political figures of all parties visiting New York, and
                authored in-depth investigative features on topics such as AIDS,
                the missing of the Cyprus tragedy, the future of Greek diners,
                and Modern Greek Studies in North America.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                He has also worked extensively on culture, contributing long
                feature inserts on major exhibitions of Greek antiquities at the
                Metropolitan Museum of Art and the largest international
                retrospective of Greek cinema at the Museum of Modern Art
                (MoMA). He served as editor-in-chief of the Greek-American
                magazine <em>Rizes</em>, was responsible for community news and
                wrote the daily column “Eilikrina Hymeteros” (“Sincerely
                Yours”). He has acted as an adviser on Greek issues to U.S.
                Congresswoman Carolyn Maloney. He retired from <em>Ethnikos
                Kirikas</em> in 2024 and continues to collaborate with the
                newspaper part time. <em>A Few Oranges for Sissy</em> is his
                first novel to be published in both Greek and English.
              </p>

              {/* 3 wider images */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href="/aris/headshots/hero-1.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src="/aris/headshots/hero-1.jpg"
                    alt="Aris Papadopoulos"
                    fill
                    className="object-cover"
                  />
                </a>
                <a
                  href="/aris/headshots/hero-3.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src="/aris/headshots/hero-3.jpg"
                    alt="Aris Papadopoulos"
                    fill
                    className="object-cover"
                  />
                </a>
                <a
                  href="/aris/headshots/hero-4.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src="/aris/headshots/hero-4.jpg"
                    alt="Aris Papadopoulos"
                    fill
                    className="object-cover"
                  />
                </a>
              </div>
            </div>

            {/* main portrait */}
            <div className="flex justify-center">
              <a
                href="/aris/headshots/hero-2.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-sm"
              >
                <Image
                  src="/aris/headshots/hero-2.jpg"
                  alt="Aris Papadopoulos"
                  width={800}
                  height={1200}
                  className="h-auto w-full rounded-2xl shadow object-contain bg-zinc-200"
                  priority
                />
              </a>
            </div>
          </section>

          {/* CONTACT */}
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
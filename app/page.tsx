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
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
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
                Άρης Παπαδόπουλος
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Λίγα πορτοκάλια για τη Σίσσυ
              </h1>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                Μυθιστόρημα
              </p>
              <p className="max-w-xl text-sm sm:text-base text-zinc-200">
                Το επίσημο site του Άρη Παπαδόπουλου. Βρείτε πληροφορίες για το
                μυθιστόρημα, βιογραφικό και στοιχεία επικοινωνίας.
              </p>
              <div className="flex flex-wrap gap-3">
  {/* Primary hero button – deep red */}
  <Button
    asChild
    className="bg-[#7f1d1d] hover:bg-[#991b1b] cursor-pointer"
  >
    <Link href="#book">Περισσότερα για το βιβλίο</Link>
  </Button>

  {/* Secondary hero button – white with red hover text */}
  <Button
    variant="outline"
    asChild
    className="bg-white/90 text-black hover:bg-white hover:text-[#7f1d1d] cursor-pointer"
  >
    <Link href="#about">Για τον συγγραφέα</Link>
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
                  Λίγα πορτοκάλια για τη Σίσσυ
                </h2>
                <p className="text-sm uppercase tracking-wide text-zinc-500">
                  A Few Oranges for Sissy
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Μυθιστόρημα που ξεκινά με δύο φαντάρους να μεταφέρουν μια
                  γυναίκα, μητέρα τεσσάρων παιδιών, στιγματισμένη ως
                  «παλιοκομμουνίστρια». Μέσα από τη Σίσσυ και τα αδέλφια της
                  παρακολουθούμε μια οικογένεια που πληρώνει το τίμημα του
                  εμφυλίου, της μετανάστευσης και των μυστικών που τη βαραίνουν.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Το βιβλίο γράφτηκε αρχικά στα ελληνικά στα τέλη της δεκαετίας
                  του ’80 στο Σικάγο, μπήκε για χρόνια «στο συρτάρι» και στη
                  συνέχεια αναθεωρήθηκε, συντομεύτηκε και μεταφράστηκε στα
                  αγγλικά.
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
    <h2 className="text-2xl font-semibold">Άρης Παπαδόπουλος</h2>

    {/* Intro */}
    <p className="text-zinc-700 dark:text-zinc-300">
      Ο Άρης Παπαδόπουλος είναι ελληνοαμερικανός δημοσιογράφος και συγγραφέας.
      Για περισσότερα από τριάντα χρόνια γεφυρώνει τη Νέα Υόρκη και την Αθήνα,
      καταγράφοντας την εμπειρία της ομογένειας και τις τομές ανάμεσα στην
      πολιτική, τον πολιτισμό και την ταυτότητα.
    </p>

    {/* Journalistic Career */}
    <h3 className="text-lg font-semibold mt-8">Δημοσιογραφική πορεία</h3>
    <p className="text-zinc-700 dark:text-zinc-300">
      Από το 1991 εργάζεται στην ημερήσια ομογενειακή εφημερίδα
      <span className="italic"> «Εθνικός Κήρυξ» (The National Herald)</span>,
      αρχικά στη Νέα Υόρκη και από το 1996 στο Γραφείο Αθηνών,
      όπου διετέλεσε Υπεύθυνος Ύλης και υπεύθυνος του γραφείου (2001–2015).
      Έχει πραγματοποιήσει συνεντεύξεις με αμερικανούς, ελληνοαμερικανούς και
      έλληνες πολιτικούς και έχει υπογράψει εκτενείς έρευνες για ζητήματα όπως
      το AIDS, οι αγνοούμενοι της κυπριακής τραγωδίας, τα ελληνικά diners
      και οι νεοελληνικές σπουδές στη Βόρεια Αμερική.
    </p>

    {/* Cultural Reporting */}
    <h3 className="text-lg font-semibold">Πολιτιστικό ρεπορτάζ</h3>
    <p className="text-zinc-700 dark:text-zinc-300">
      Κάλυψε σημαντικές εκθέσεις ελληνικών αρχαιοτήτων στο Μητροπολιτικό Μουσείο
      Νέας Υόρκης και τη μεγαλύτερη διεθνώς αναδρομή του ελληνικού κινηματογράφου
      στο MoMA. Υπήρξε αρχισυντάκτης του περιοδικού
      <span className="italic"> «Ρίζες»</span>, υπεύθυνος ομογενειακών ειδήσεων
      και συντάκτης του καθημερινού χρονογραφήματος
      <span className="italic"> «Ειλικρινά Υμέτερος»</span>.
      Συνεργάστηκε επίσης ως σύμβουλος για ελληνικά θέματα της βουλευτού Carolyn Maloney.
    </p>

    {/* Current Work */}
    <h3 className="text-lg font-semibold">Σήμερα</h3>
    <p className="text-zinc-700 dark:text-zinc-300">
      Συνταξιοδοτήθηκε από τον «Εθνικό Κήρυκα» το 2024 και συνεχίζει να
      συνεργάζεται με την εφημερίδα part-time. Το
      <span className="italic"> «Λίγα πορτοκάλια για τη Σίσσυ»</span> είναι το
      πρώτο του μυθιστόρημα, διαθέσιμο στα ελληνικά και στα αγγλικά.
    </p>

    {/* 3 images grid */}
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <a href="/aris/headshots/hero-1.jpg" target="_blank" rel="noopener noreferrer"
         className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
        <Image src="/aris/headshots/hero-1.jpg" alt="Άρης Παπαδόπουλος" fill className="object-cover" />
      </a>
      <a href="/aris/headshots/hero-3.jpg" target="_blank" rel="noopener noreferrer"
         className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
        <Image src="/aris/headshots/hero-3.jpg" alt="Άρης Παπαδόπουλος" fill className="object-cover" />
      </a>
      <a href="/aris/headshots/hero-4.jpg" target="_blank" rel="noopener noreferrer"
         className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200">
        <Image src="/aris/headshots/hero-4.jpg" alt="Άρης Παπαδόπουλος" fill className="object-cover" />
      </a>
    </div>
  </div>

  {/* Portrait */}
  <div className="flex justify-center">
    <a href="/aris/headshots/hero-2.jpg" target="_blank" rel="noopener noreferrer"
       className="block w-full max-w-sm">
      <Image
        src="/aris/headshots/hero-2.jpg"
        alt="Άρης Παπαδόπουλος"
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
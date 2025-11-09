"use client"

import { useState, FormEvent } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [clicked, setClicked] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname.startsWith("/en")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value

    const subject = encodeURIComponent(
      isEnglish ? "Message from author site" : "Μήνυμα από το author site"
    )
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )

    // open email client
    window.location.href = `mailto:greataris@yahoo.gr?subject=${subject}&body=${body}`

    // clear the form + show feedback
    form.reset()
    setClicked(true)

    // popup notice
    window.alert(
      isEnglish
        ? "Your email app should now be open. Please send the message from there."
        : "Το πρόγραμμα email της συσκευής σας θα πρέπει να έχει ανοίξει. Ολοκληρώστε την αποστολή από εκεί."
    )

    setTimeout(() => setClicked(false), 5000)
  }

  return (
    <section
      id="contact"
      className="max-w-xl w-full mx-auto text-center"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {isEnglish ? "Contact" : "Επικοινωνία"}
      </h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        {isEnglish
          ? "For events, interviews, or comments, you can contact me using the form below or through social media."
          : "Για παρουσιάσεις, συνεντεύξεις ή σχόλια, μπορείτε να επικοινωνήσετε μαζί μου μέσω της παρακάτω φόρμας ή των κοινωνικών δικτύων."}
      </p>

      <form
        className="mt-2 space-y-3 text-left"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder={isEnglish ? "Name" : "Όνομα"}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
        />
        <textarea
          name="message"
          rows={5}
          placeholder={isEnglish ? "Message" : "Μήνυμα"}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
        />

        <div className="mt-3 flex justify-center">
          <Button type="submit" disabled={clicked}
          className="bg-[#7f1d1d] hover:bg-[#991b1b] cursor-pointer disabled:bg-[#7f1d1d]/70">
            {clicked
              ? isEnglish
                ? "Check email"
                : "Ελέγξτε το email"
              : isEnglish
              ? "Send"
              : "Αποστολή"}
          </Button>
        </div>
      </form>

      {clicked && (
        <p className="mt-2 text-xs text-zinc-500">
          {isEnglish
            ? "Open your email app to complete sending the message."
            : "Ανοίξτε το πρόγραμμα email της συσκευής σας για να ολοκληρώσετε την αποστολή."}
        </p>
      )}
    </section>
  )
}
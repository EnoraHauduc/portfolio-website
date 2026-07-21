"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-wide">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border-b-2 border-black bg-transparent py-2 outline-none focus:border-neutral-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-wide">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border-b-2 border-black bg-transparent py-2 outline-none focus:border-neutral-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border-b-2 border-black bg-transparent py-2 outline-none focus:border-neutral-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full border-2 border-black px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-black hover:text-paper disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-neutral-700">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-neutral-700">
          Something went wrong. Please try again, or email me directly.
        </p>
      )}
    </form>
  );
}

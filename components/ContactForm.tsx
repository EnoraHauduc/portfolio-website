"use client";

import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID ?? "");

  if (state.succeeded) {
    return (
      <p className="mt-8 max-w-xl text-sm text-neutral-700">
        Thanks for reaching out — I&apos;ll get back to you soon.
      </p>
    );
  }

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
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-700" />
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
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-700" />
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
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-700" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-full border-2 border-black px-8 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-black hover:text-paper disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send message"}
      </button>

      {!FORMSPREE_ID && (
        <p className="text-sm text-neutral-700">
          Contact form is not configured. Set NEXT_PUBLIC_FORMSPREE_ID to enable it.
        </p>
      )}
      {FORMSPREE_ID && state.errors && state.errors.getFormErrors().length > 0 && (
        <p className="text-sm text-neutral-700">
          Something went wrong. Please try again, or email me directly.
        </p>
      )}
    </form>
  );
}

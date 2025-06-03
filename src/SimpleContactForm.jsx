import React, { useState } from "react";

export default function SimpleContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div className="p-8 text-center text-green-500 font-semibold">
      Danke für deine Nachricht! Wir melden uns schnellstmöglich.
    </div>
  ) : (
    <form
      className="max-w-md mx-auto bg-neutral-900 p-8 rounded-xl shadow-lg space-y-6"
      action="https://formsubmit.co/mamicstudios@gmail.com"
      method="POST"
    >
      {/* Honeypot field for spam protection */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
      {/* Disable captcha by Formsubmit */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Redirect to thank you message (optional) */}
      {/* <input type="hidden" name="_next" value="https://yourdomain.com/danke.html" /> */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
          placeholder="Dein Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
          placeholder="deine@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">Betreff</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
          placeholder="Worum geht es?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Nachricht</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100 focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
          placeholder="Deine Nachricht..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-base px-5 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Nachricht senden
      </button>
    </form>
  );
}

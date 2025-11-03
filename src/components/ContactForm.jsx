import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name}! We received your message and will reply soon.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative w-full bg-[#0a0f1f] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_-10%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">Let’s talk</h2>
          <p className="mt-2 text-blue-100/80">Questions about pricing, features, or enterprise? Send us a message.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-md border border-white/10 bg-[#0b132b] px-3 py-2">
              <User className="h-4 w-4 text-blue-300" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-transparent text-white placeholder:text-blue-200/60 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-3 rounded-md border border-white/10 bg-[#0b132b] px-3 py-2">
              <Mail className="h-4 w-4 text-blue-300" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent text-white placeholder:text-blue-200/60 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can we help?"
              className="w-full rounded-md border border-white/10 bg-[#0b132b] p-3 text-white placeholder:text-blue-200/60 focus:outline-none"
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-blue-200/70">We’ll get back within 1–2 business days.</p>
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-400"
            >
              Send message
            </button>
          </div>
          {status && (
            <div className="mt-4 rounded-md border border-blue-500/30 bg-blue-500/10 p-3 text-sm text-blue-200">
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

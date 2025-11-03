import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0a0f1f] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0f1f]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="font-['Manrope'] text-lg font-bold">BlueWave</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-blue-100/80 sm:flex">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#blog" className="hover:text-white">Blog</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-white/10">Sign in</a>
            <a href="#pricing" className="rounded-md bg-blue-500 px-3 py-1.5 font-medium text-white hover:bg-blue-400">Sign up</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Pricing />
        <BlogPreview />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0f1f] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-blue-200/70 sm:flex-row">
          <p>© {new Date().getFullYear()} BlueWave, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-[#0a0f1f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1f]/60 via-[#0a0f1f]/70 to-[#0a0f1f]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-blue-300" />
          <span>Fintech-grade security</span>
        </div>
        <h1 className="font-['Manrope'] text-4xl font-extrabold leading-tight text-white drop-shadow-sm sm:text-6xl">
          Launch your SaaS faster with a modern, dark-blue design
        </h1>
        <p className="mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">
          Payments-ready, scalable architecture, and polished UI out of the box. Focus on your product—not boilerplate.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-400"
          >
            <Rocket className="h-4 w-4" />
            Get Started
          </a>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

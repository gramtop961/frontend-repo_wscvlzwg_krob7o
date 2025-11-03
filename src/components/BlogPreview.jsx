import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Designing fintech experiences that build trust',
    excerpt: 'How thoughtful UI, motion, and copy create confidence for your users.',
    tag: 'Design',
    date: 'Oct 2025',
  },
  {
    title: 'From MVP to scale: a pragmatic SaaS stack',
    excerpt: 'Tools, patterns, and workflows that help startups move faster.',
    tag: 'Engineering',
    date: 'Oct 2025',
  },
  {
    title: 'Pricing strategy 101 for modern SaaS',
    excerpt: 'Find the right balance between value, simplicity, and growth.',
    tag: 'Growth',
    date: 'Sep 2025',
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="relative w-full bg-[#0b132b] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_20%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">Latest from the blog</h2>
            <p className="mt-2 text-blue-100/80">Insights on product, design, and engineering.</p>
          </div>
          <a href="#" className="hidden items-center gap-2 text-blue-300 hover:text-blue-200 sm:inline-flex">
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-xs text-blue-200/80">
                <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-300">{p.tag}</span>
                <span>•</span>
                <span>{p.date}</span>
              </div>
              <h3 className="text-lg font-semibold group-hover:text-blue-300">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-100/90">{p.excerpt}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200">
                Read more
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

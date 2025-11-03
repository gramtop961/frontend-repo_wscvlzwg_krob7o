import React from 'react';
import { Check, Shield } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: 'mo',
    highlight: false,
    features: ['Up to 3 projects', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'mo',
    highlight: true,
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'API access'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: ['Dedicated SSO', 'Custom SLAs', 'Security review', 'Onboarding & training'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#0a0f1f] py-24 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1000px_circle_at_50%_-10%,rgba(37,99,235,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-blue-300" />
            <span>Simple, transparent pricing</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl font-bold sm:text-4xl">Choose your plan</h2>
          <p className="mt-2 text-blue-100/80">Scale with confidence. Upgrade or cancel anytime.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition ${
                tier.highlight ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold">{tier.price}</span>
                  {tier.period && <span className="text-sm text-blue-200/80">/{tier.period}</span>}
                </div>
              </div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-blue-100/90">
                    <Check className="h-4 w-4 text-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-md px-4 py-2 font-medium transition ${
                  tier.highlight
                    ? 'bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-900/40'
                    : 'border border-white/15 bg-transparent text-white hover:bg-white/10'
                }`}
              >
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

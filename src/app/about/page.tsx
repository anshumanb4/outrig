import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Outrig | Our Mission & Values",
  description:
    "Founded in 2020, Outrig simplifies RV ownership with centralized storage, amenities, and repair services at 20+ locations nationwide.",
};

const values = [
  {
    letter: "D",
    title: "Dream big & strive for excellence",
    description: "We set ambitious goals and hold ourselves to the highest standards.",
  },
  {
    letter: "R",
    title: "Refine. Hustle. Persist",
    description: "We continuously improve, work hard, and never give up on our mission.",
  },
  {
    letter: "I",
    title: "Innovate. Adapt. Evolve",
    description: "We embrace change and find creative solutions to real problems.",
  },
  {
    letter: "V",
    title: "Value each other. Invest in each other",
    description: "We build a culture of mutual respect, support, and growth.",
  },
  {
    letter: "E",
    title: "Earn trust every day",
    description: "We show up, follow through, and treat every customer like a neighbor.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Our Mission: Make RV Ownership Easy
            </h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              Founded in 2020 by an RV owner who experienced the pain of scattered
              services, unreliable storage, and long repair wait times firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                We Built What We Wished Existed
              </h2>
              <div className="mt-6 space-y-4 text-brand-muted leading-relaxed">
                <p>
                  When our founder bought their first RV, they quickly discovered
                  the hidden complexity of ownership. Storage was in one place,
                  service in another, and getting anything done meant juggling
                  multiple providers with long wait times.
                </p>
                <p>
                  Outrig was born from a simple idea: bring storage, amenities, and
                  repair services together in one location. Since then, we&apos;ve
                  expanded to over 20 facilities across the country, serving
                  thousands of RV owners, boaters, and vehicle enthusiasts.
                </p>
                <p>
                  We&apos;ve also grown into commercial and self-storage, but our
                  core mission remains the same — make ownership easy.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/hero/mom-daughter-rv.png"
                alt="Family enjoying their RV"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Our DRIVE Values
          </h2>
          <p className="text-center text-brand-muted text-lg mb-16 max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.letter} className="p-6 bg-white rounded-xl border border-brand-border text-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold mx-auto">
                  {v.letter}
                </div>
                <h3 className="mt-4 font-bold text-foreground text-sm font-[family-name:var(--font-sans)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs text-brand-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join / Sell */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-brand-border">
              <h3 className="text-2xl font-bold text-foreground">Join Our Team</h3>
              <p className="mt-3 text-brand-muted">
                We&apos;re always looking for passionate people who want to make
                RV ownership better. Check out our open positions.
              </p>
              <Link
                href="/careers"
                className="mt-6 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
              >
                View Careers
              </Link>
            </div>
            <div className="p-8 rounded-2xl border border-brand-border">
              <h3 className="text-2xl font-bold text-foreground">Sell Your Property</h3>
              <p className="mt-3 text-brand-muted">
                Own a storage facility or suitable property? We&apos;re actively
                expanding and would love to talk.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

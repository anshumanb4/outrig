import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Outrig | Our Mission & Values",
  description: "Founded in 2020, Outrig simplifies RV ownership with centralized storage, amenities, and repair services.",
};

const values = [
  { letter: "D", title: "Dream big & strive for excellence", description: "We set ambitious goals and hold ourselves to the highest standards." },
  { letter: "R", title: "Refine. Hustle. Persist", description: "We continuously improve, work hard, and never give up." },
  { letter: "I", title: "Innovate. Adapt. Evolve", description: "We embrace change and find creative solutions." },
  { letter: "V", title: "Value & invest in each other", description: "We build a culture of mutual respect and growth." },
  { letter: "E", title: "Earn trust every day", description: "We show up, follow through, and treat every customer like a neighbor." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-darker py-20 sm:py-28 overflow-hidden">
        <Image src="/images/hero/mom-daughter-rv.png" alt="" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-darker to-warm-darker/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Making RV ownership <span className="text-accent">easy</span>
            </h1>
            <p className="mt-4 text-lg text-stone-400 leading-relaxed">
              Founded in 2020 by an RV owner who was tired of the runaround.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground">
                We built what we wished existed
              </h2>
              <div className="mt-6 space-y-4 text-warm-muted leading-relaxed">
                <p>
                  When our founder bought their first RV, they quickly discovered
                  the hidden complexity of ownership. Storage was in one place,
                  service in another, and getting anything done meant juggling
                  providers with long wait times.
                </p>
                <p>
                  Outrig was born from a simple idea: bring storage, amenities, and
                  repair services together in one location. Since then, we&apos;ve
                  expanded to over 20 facilities across the country.
                </p>
                <p>
                  We&apos;ve also grown into commercial and self-storage, but our
                  core mission stays the same — make ownership easy.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image src="/images/hero/mom-daughter-rv.png" alt="Family enjoying their RV" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-3">
            Our DRIVE values
          </h2>
          <p className="text-center text-warm-muted mb-14 max-w-lg mx-auto">
            The principles that guide everything we do.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v) => (
              <div key={v.letter} className="p-5 bg-white rounded-2xl border border-warm-border text-center card-lift">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold mx-auto">
                  {v.letter}
                </div>
                <h3 className="mt-3 font-bold text-foreground text-sm leading-snug">{v.title}</h3>
                <p className="mt-1.5 text-xs text-warm-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join / Sell */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-warm-border bg-warm-light">
              <h3 className="text-2xl font-extrabold text-foreground">Join our team</h3>
              <p className="mt-3 text-warm-muted leading-relaxed">
                We&apos;re always looking for passionate people who want to make RV ownership better.
              </p>
              <Link href="/careers" className="mt-6 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all">
                View Careers
              </Link>
            </div>
            <div className="p-8 rounded-2xl border border-warm-border bg-warm-light">
              <h3 className="text-2xl font-extrabold text-foreground">Sell your property</h3>
              <p className="mt-3 text-warm-muted leading-relaxed">
                Own a storage facility? We&apos;re actively expanding and would love to talk.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";

const faqs = [
  { q: "What types of storage do you offer?", a: "We offer enclosed, canopy (covered), and outdoor open parking for RVs, boats, cars, and commercial vehicles. Many locations also have traditional self-storage units. Availability varies by location." },
  { q: "Do I have 24/7 access to my stored vehicle?", a: "Yes. All of our facilities provide 24/7 keypad access so you can get to your vehicle whenever you need it." },
  { q: "Are your facilities secure?", a: "Absolutely. Every Outrig facility features gated entry, security cameras, perimeter fencing, and night lighting." },
  { q: "Do you offer RV service and repair?", a: "Yes, at our Colorado locations (Boulder County and Weld County). Our certified technicians handle everything from routine maintenance to complex repairs, often with next-day availability." },
  { q: "What amenities are available on-site?", a: "Amenities vary by location but can include dump stations, wash bays, power hookups, propane refill, ice machines, tire air stations, and more." },
  { q: "Do you work with insurance companies?", a: "Yes. Our service team works with insurance companies and services all extended warranties." },
  { q: "How do I reserve a storage space?", a: "Contact your nearest location directly by phone, or use our contact form. Our team will help you find the right unit size and type." },
  { q: "Do I need insurance for my stored vehicle?", a: "We strongly recommend maintaining insurance on your vehicle while in storage. Many policies have specific requirements — check with your provider." },
  { q: "Can I store my food truck at Outrig?", a: "Yes! We offer food truck storage and service at select locations. Our techs handle generators, electrical, propane, and more." },
  { q: "Do you offer month-to-month leases?", a: "Yes. Flexible month-to-month storage at all locations. No long-term commitment required." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-warm-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="font-semibold text-foreground pr-4 group-hover:text-accent transition-colors">{q}</span>
        <svg className={`w-5 h-5 text-warm-muted flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-warm-muted text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-warm-darker py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">FAQ</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}

          <div className="mt-16 p-8 rounded-2xl bg-warm-light border border-warm-border text-center">
            <h3 className="text-xl font-extrabold text-foreground">Still have questions?</h3>
            <p className="mt-2 text-warm-muted text-sm">Our team is happy to help.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:1-833-464-7678" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all">
                Call 1-833-464-7678
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-accent border border-accent/30 rounded-lg hover:bg-accent/5 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

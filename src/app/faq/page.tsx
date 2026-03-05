"use client";

import { useState } from "react";
import type { Metadata } from "next";

const faqs = [
  {
    q: "What types of storage do you offer?",
    a: "We offer enclosed, canopy (covered), and outdoor open parking for RVs, boats, cars, and commercial vehicles. Many locations also have traditional self-storage units. Availability varies by location.",
  },
  {
    q: "Do I have 24/7 access to my stored vehicle?",
    a: "Yes. All of our facilities provide 24/7 keypad access so you can get to your vehicle whenever you need it.",
  },
  {
    q: "Are your facilities secure?",
    a: "Absolutely. Every Outrig facility features gated entry, security cameras, perimeter fencing, and night lighting. Your vehicle's safety is our top priority.",
  },
  {
    q: "Do you offer RV service and repair?",
    a: "Yes, at our Colorado locations (Boulder County and Weld County). Our certified technicians handle everything from routine maintenance to complex repairs, often with next-day appointment availability.",
  },
  {
    q: "What amenities are available on-site?",
    a: "Amenities vary by location but can include dump stations, wash bays, power hookups, propane refill, ice machines, tire air stations, and more. Check your nearest location for specifics.",
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes. Our service team works with insurance companies and services all extended warranties.",
  },
  {
    q: "How do I reserve a storage space?",
    a: "Contact your nearest location directly by phone, or use our contact form. Our team will help you find the right unit size and type for your needs.",
  },
  {
    q: "Do I need insurance for my stored vehicle?",
    a: "We strongly recommend maintaining insurance on your vehicle while in storage. Many policies have specific requirements for stored vehicles — check with your insurance provider.",
  },
  {
    q: "Can I store my food truck at Outrig?",
    a: "Yes! We offer food truck storage and service at select locations. Our technicians can handle generator maintenance, electrical systems, propane, and more.",
  },
  {
    q: "Do you offer month-to-month leases?",
    a: "Yes. We offer flexible month-to-month storage agreements at all locations. No long-term commitment required.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-brand-muted leading-relaxed">{a}</div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-brand-blue py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y-0">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-brand-light text-center">
            <h3 className="text-xl font-bold text-foreground">Still Have Questions?</h3>
            <p className="mt-2 text-brand-muted">
              Our team is happy to help. Give us a call or send a message.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1-833-464-7678"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg"
              >
                Call 1-833-464-7678
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-brand-blue border border-brand-blue rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

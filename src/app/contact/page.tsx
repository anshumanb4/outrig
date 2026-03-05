import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Outrig",
  description: "Get in touch with Outrig. Find storage, book RV service, or ask us anything.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-blue py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-3 text-lg text-blue-100">
            Have a question? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
              <form className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    <option>General Inquiry</option>
                    <option>Storage Question</option>
                    <option>Book RV Service</option>
                    <option>Property Inquiry</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-brand-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Other Ways to Reach Us</h2>
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground font-[family-name:var(--font-sans)]">Phone</h3>
                  <a href="tel:1-833-464-7678" className="mt-1 text-lg text-brand-blue font-semibold block">
                    1-833-464-7678
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-[family-name:var(--font-sans)]">Hours</h3>
                  <p className="mt-1 text-brand-muted">
                    Mon — Fri: 8am — 6pm (local time)<br />
                    Sat: 9am — 4pm<br />
                    Sun: Closed (24/7 storage access available)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-[family-name:var(--font-sans)]">
                    Find a Location
                  </h3>
                  <p className="mt-1 text-brand-muted">
                    Contact your nearest facility directly for storage
                    availability and pricing.
                  </p>
                  <a href="/locations" className="mt-2 inline-block text-sm font-semibold text-brand-blue hover:underline">
                    View all locations &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

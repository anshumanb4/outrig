import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Outrig",
  description: "Get in touch with Outrig. Find storage, book RV service, or ask us anything.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-warm-darker py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Contact us</h1>
          <p className="mt-3 text-lg text-stone-400">We&apos;re here to help.</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-extrabold text-foreground">Send us a message</h2>
              <form className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                    <input id="firstName" type="text" className="w-full px-4 py-2.5 rounded-lg border border-warm-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                    <input id="lastName" type="text" className="w-full px-4 py-2.5 rounded-lg border border-warm-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input id="email" type="email" className="w-full px-4 py-2.5 rounded-lg border border-warm-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone (optional)</label>
                  <input id="phone" type="tel" className="w-full px-4 py-2.5 rounded-lg border border-warm-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <select id="subject" className="w-full px-4 py-2.5 rounded-lg border border-warm-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                    <option>General Inquiry</option>
                    <option>Storage Question</option>
                    <option>Book RV Service</option>
                    <option>Property Inquiry</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2.5 rounded-lg border border-warm-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
                </div>
                <button type="submit" className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-foreground">Other ways to reach us</h2>
              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Phone</h3>
                  <a href="tel:1-833-464-7678" className="mt-1 text-lg text-accent font-semibold block hover:text-accent-hover transition-colors">
                    1-833-464-7678
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Hours</h3>
                  <p className="mt-1 text-warm-muted text-sm leading-relaxed">
                    Mon — Fri: 8am — 6pm (local time)<br />
                    Sat: 9am — 4pm<br />
                    Sun: Closed (24/7 storage access)
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Locations</h3>
                  <p className="mt-1 text-warm-muted text-sm">Contact your nearest facility for availability and pricing.</p>
                  <a href="/locations" className="mt-2 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors">
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

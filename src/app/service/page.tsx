import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV Service & Repair | Outrig",
  description:
    "Expert RV maintenance, repairs, and upgrades. Certified techs, next-day appointments, all makes and models.",
};

const serviceCategories = [
  {
    title: "Preventative Maintenance",
    services: ["Complete systems check", "Oil changes (engine & generator)", "Roof maintenance & sealing", "Winterization & de-winterization", "Battery inspection & replacement"],
  },
  {
    title: "Repairs",
    services: ["Roof repair & replacement", "Water system repairs", "Electrical system diagnostics", "Propane system service", "Towing systems & axles", "Appliance repair"],
  },
  {
    title: "Upgrades & Custom Work",
    services: ["Solar system installation", "Custom interior modifications", "Entertainment systems", "Lighting upgrades", "Custom storage solutions"],
  },
  {
    id: "food-truck",
    title: "Food Truck Service",
    services: ["Generator maintenance", "Electrical system service", "Propane system inspection", "Custom equipment installation", "DOT inspection prep"],
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-darker py-20 sm:py-28 overflow-hidden">
        <Image src="/images/hero/technician-welding.jpg" alt="" fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-darker to-warm-darker/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Next-day appointments</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Stress-free <span className="text-accent">RV service</span>
            </h1>
            <p className="mt-4 text-lg text-stone-400 leading-relaxed">
              Expert maintenance, repairs, and upgrades — with shorter wait
              times and techs who actually care. All makes and models.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-warm-darker bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all">
                Book Service
              </Link>
              <a href="tel:1-833-464-7678" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-stone-300 border border-stone-700 rounded-lg hover:bg-stone-800 transition-all">
                Call 1-833-464-7678
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Next-Day Availability", desc: "While most shops have weeks-long backlogs, we often have same or next-day slots." },
              { title: "Certified Technicians", desc: "Experienced, certified, and passionate about getting the job done right." },
              { title: "All Makes & Models", desc: "Class A, B, C, travel trailers, fifth wheels — we service them all." },
              { title: "Insurance & Warranty", desc: "We work with insurance companies and service all extended warranties." },
            ].map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-warm-light border border-warm-border">
                <h3 className="text-base font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-warm-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 sm:py-24 bg-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-14">
            What we service
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((cat) => (
              <div key={cat.title} id={cat.id} className="p-6 sm:p-8 bg-white rounded-2xl border border-warm-border scroll-mt-24">
                <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.services.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm text-warm-muted">
                      <svg className="w-4 h-4 text-sage flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-3">Service locations</h2>
          <p className="text-center text-warm-muted mb-10">RV service is currently available at our Colorado facilities.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { name: "Outrig Boulder County", address: "451 S Andersen St, Longmont, CO", phone: "(720) 399-5700" },
              { name: "Outrig Weld County", address: "17164 E I-25 Frontage Rd, Platteville, CO", phone: "(720) 508-5800" },
            ].map((loc) => (
              <div key={loc.name} className="p-6 rounded-2xl bg-warm-light border border-warm-border">
                <h3 className="font-bold text-foreground">{loc.name}</h3>
                <p className="mt-1 text-sm text-warm-muted">{loc.address}</p>
                <a href={`tel:${loc.phone}`} className="mt-3 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors">
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image src="/images/hero/technician-welding.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-warm-darker/90" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to book service?</h2>
          <p className="mt-4 text-lg text-stone-400">Get your RV maintained, repaired, or upgraded by certified techs.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center px-7 py-3 text-sm font-semibold text-warm-darker bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

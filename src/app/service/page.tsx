import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV Service & Repair | Outrig",
  description:
    "Expert RV maintenance, repairs, and upgrades. Certified techs, next-day appointments, all makes and models. Book service at our Colorado locations.",
};

const serviceCategories = [
  {
    title: "Preventative Maintenance",
    services: [
      "Complete systems check",
      "Oil changes (engine & generator)",
      "Roof maintenance & sealing",
      "Winterization & de-winterization",
      "Battery inspection & replacement",
    ],
  },
  {
    title: "Repairs",
    services: [
      "Roof repair & replacement",
      "Water system repairs",
      "Electrical system diagnostics",
      "Propane system service",
      "Towing systems & axles",
      "Appliance repair",
    ],
  },
  {
    title: "Upgrades & Custom Work",
    services: [
      "Solar system installation",
      "Custom interior modifications",
      "Entertainment system upgrades",
      "Lighting upgrades",
      "Custom storage solutions",
    ],
  },
  {
    id: "food-truck",
    title: "Food Truck Service",
    services: [
      "Generator maintenance",
      "Electrical system service",
      "Propane system inspection",
      "Custom equipment installation",
      "DOT inspection prep",
    ],
  },
];

const benefits = [
  {
    title: "Next-Day Appointments",
    description: "While most shops have weeks-long backlogs, we often have next-day availability.",
  },
  {
    title: "Certified Technicians",
    description: "Our techs are experienced, certified, and passionate about getting the job done right.",
  },
  {
    title: "All Makes & Models",
    description: "Class A, B, C, travel trailers, fifth wheels — we service them all.",
  },
  {
    title: "Insurance & Warranty",
    description: "We work with insurance companies and service all extended warranties.",
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Stress-Free RV Service
            </h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              Expert maintenance, repairs, and upgrades — with shorter wait
              times and techs who actually care. All makes and models welcome.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                Book Service
              </Link>
              <a
                href="tel:1-833-464-7678"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                Call 1-833-464-7678
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-sans)]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 sm:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            What We Service
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((cat) => (
              <div
                key={cat.title}
                id={cat.id}
                className="p-8 bg-white rounded-2xl border border-brand-border"
              >
                <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-sans)]">
                  {cat.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.services.map((service) => (
                    <li key={service} className="flex items-center gap-3 text-brand-muted">
                      <svg
                        className="w-4 h-4 text-brand-green flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            Service Locations
          </h2>
          <p className="text-center text-brand-muted text-lg mb-12">
            RV service is currently available at our Colorado facilities.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Outrig Boulder County",
                address: "451 S Andersen St, Longmont, CO",
                phone: "(720) 399-5700",
              },
              {
                name: "Outrig Weld County",
                address: "17164 E I-25 Frontage Rd, Platteville, CO",
                phone: "(720) 508-5800",
              },
            ].map((loc) => (
              <div key={loc.name} className="p-6 rounded-xl border border-brand-border bg-brand-light">
                <h3 className="font-bold text-foreground font-[family-name:var(--font-sans)]">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-brand-muted">{loc.address}</p>
                <a
                  href={`tel:${loc.phone}`}
                  className="mt-3 inline-block text-sm font-semibold text-brand-blue"
                >
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-brand-blue text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Book Service?
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Get your RV maintained, repaired, or upgraded by certified techs who care.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3.5 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

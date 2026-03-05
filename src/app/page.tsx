import Link from "next/link";
import Image from "next/image";
import { locations } from "@/data/locations";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: "20+", label: "Locations Nationwide" },
  { value: "24/7", label: "Secure Access" },
  { value: "4.8", label: "Average Rating" },
];

const storageTypes = [
  {
    title: "RV Storage",
    description:
      "Enclosed, canopy, and outdoor options with on-site amenities like dump stations, wash bays, and power hookups.",
    iconSrc: "/images/icons/covered-storage-blue.png",
    href: "/storage",
  },
  {
    title: "RV Service & Repair",
    description:
      "Certified techs, next-day appointments, all makes and models. Maintenance, repairs, and custom upgrades.",
    iconSrc: "/images/icons/repairs-wrench-blue.png",
    href: "/service",
  },
  {
    title: "Boat, Car & Commercial",
    description:
      "Flexible storage for boats, classic cars, commercial vehicles, and business inventory. Climate-controlled units available.",
    iconSrc: "/images/icons/enclosed-storage-blue.png",
    href: "/storage#commercial",
  },
];

const uniqueStates = [...new Set(locations.map((l) => l.state))];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-blue overflow-hidden">
        <Image
          src="/images/hero/covered-parking.png"
          alt="Outrig RV storage facility with covered parking"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/95 to-brand-blue/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Storage + Service,{" "}
              <span className="text-blue-200">All in One Place</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-xl">
              Secure, accessible storage for your RV, boat, or vehicle — plus expert
              on-site RV service and repair at select locations. 20+ facilities
              nationwide.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/locations"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                Find a Location
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                Book RV Service
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Everything You Need, One Place
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              Most storage companies just give you a parking spot. We give you a
              full-service home base for your RV, boat, or vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {storageTypes.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="group relative p-8 rounded-2xl border border-brand-border hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-blue/5 group-hover:bg-brand-blue/10 flex items-center justify-center transition-colors">
                  <Image src={type.iconSrc} alt={type.title} width={32} height={32} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground font-[family-name:var(--font-sans)]">
                  {type.title}
                </h3>
                <p className="mt-3 text-brand-muted leading-relaxed">
                  {type.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Outrig */}
      <section className="py-20 sm:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Why RV Owners Choose Outrig
              </h2>
              <p className="mt-4 text-lg text-brand-muted leading-relaxed">
                We started Outrig because we know how hard RV ownership can be.
                Scattered services, unreliable storage, long wait times for
                repairs. We built something better.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Storage + service in one stop",
                    desc: "Drop off your RV, get it serviced, and pick it up ready to go. No more driving between facilities.",
                  },
                  {
                    title: "Next-day service appointments",
                    desc: "Certified techs who actually care. Most shops have weeks-long wait times — we often have next-day availability.",
                  },
                  {
                    title: "Real amenities, not just a lot",
                    desc: "Dump stations, wash bays, power hookups, propane refill, and more at select locations.",
                  },
                  {
                    title: "24/7 secure, gated access",
                    desc: "Keypad entry, security cameras, night lighting, and fenced perimeters at every facility.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-brand-green/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground font-[family-name:var(--font-sans)]">{item.title}</h4>
                      <p className="mt-1 text-sm text-brand-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/hero/mom-daughter-rv.png"
                  alt="Family enjoying their RV experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-5">
                <div className="text-3xl font-bold text-brand-blue">20+</div>
                <div className="text-sm text-brand-muted">Locations in {uniqueStates.length} states</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="p-8 rounded-2xl bg-brand-light border border-brand-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="text-brand-muted"> &middot; {t.location}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-20 sm:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our Locations
              </h2>
              <p className="mt-3 text-brand-muted text-lg">
                {locations.length} facilities across {uniqueStates.length} states
              </p>
            </div>
            <Link
              href="/locations"
              className="hidden sm:inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-blue/80"
            >
              View all locations
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, 6).map((loc) => (
              <div
                key={loc.slug}
                className="p-6 bg-white rounded-xl border border-brand-border hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-foreground font-[family-name:var(--font-sans)]">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-brand-muted">
                  {loc.city}, {loc.state}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {loc.storageTypes.map((type) => (
                    <span
                      key={type}
                      className="inline-block px-2 py-0.5 text-xs font-medium bg-brand-blue/5 text-brand-blue rounded"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm font-medium text-brand-blue"
                  >
                    {loc.phone}
                  </a>
                  <Link
                    href={`/locations#${loc.slug}`}
                    className="text-sm font-semibold text-brand-blue hover:underline"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/locations"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-brand-blue border border-brand-blue rounded-lg"
            >
              View All {locations.length} Locations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 sm:py-28 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Simplify RV Ownership?
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Find secure storage with real amenities, or book expert RV service
            with next-day availability. It all starts here.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Find Storage Near You
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

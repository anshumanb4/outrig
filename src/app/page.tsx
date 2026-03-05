import Link from "next/link";
import Image from "next/image";
import { locations } from "@/data/locations";
import { testimonials } from "@/data/testimonials";

const uniqueStates = [...new Set(locations.map((l) => l.state))];

export default function Home() {
  return (
    <>
      {/* ── Hero: Split layout with lifestyle image ── */}
      <section className="relative bg-warm-darker overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
            {/* Left: Copy */}
            <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-20 lg:py-24 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  20+ locations nationwide
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight">
                Your RV&apos;s
                <br />
                <span className="text-accent">Home Base</span>
              </h1>

              <p className="mt-5 text-lg text-stone-400 leading-relaxed max-w-md">
                Secure storage with real amenities, plus expert on-site service
                and repair. One place for everything your RV needs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/locations"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-warm-darker bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all"
                >
                  Find Storage Near You
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-stone-300 border border-stone-700 rounded-lg hover:bg-stone-800 transition-all"
                >
                  Book RV Service
                </Link>
              </div>

              {/* Trust strip */}
              <div className="mt-12 flex items-center gap-6 text-stone-500">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-medium text-stone-400">4.8 avg rating</span>
                </div>
                <span className="text-stone-700">|</span>
                <span className="text-xs font-medium text-stone-400">24/7 secure access</span>
                <span className="text-stone-700">|</span>
                <span className="text-xs font-medium text-stone-400">
                  {uniqueStates.length} states
                </span>
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative hidden lg:block">
              <Image
                src="/images/hero/mom-daughter-rv.png"
                alt="Family enjoying their RV adventure"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-warm-darker via-warm-darker/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Mobile hero image: show as banner below copy */}
        <div className="lg:hidden relative h-64 sm:h-80">
          <Image
            src="/images/hero/mom-daughter-rv.png"
            alt="Family enjoying their RV adventure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-darker/80 to-transparent" />
        </div>
      </section>

      {/* ── Visual tiles: 3 large photo cards ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 stagger">
            {[
              {
                title: "Secure Storage",
                subtitle: "Enclosed, canopy & outdoor",
                image: "/images/hero/covered-parking.png",
                href: "/storage",
              },
              {
                title: "Expert RV Service",
                subtitle: "Next-day appointments available",
                image: "/images/hero/technician-welding.jpg",
                href: "/service",
              },
              {
                title: "All Vehicle Types",
                subtitle: "RVs, boats, cars & commercial",
                image: "/images/hero/classic-car.png",
                href: "/storage#commercial",
              },
            ].map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden card-lift animate-fade-up"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {tile.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {tile.title}
                  </h3>
                  <span className="inline-flex items-center mt-3 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    Learn more
                    <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Outrig: Clean icon-stat row ── */}
      <section className="py-16 sm:py-24 bg-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Not just a parking lot
            </h2>
            <p className="mt-4 text-lg text-warm-muted leading-relaxed">
              Most storage companies give you a spot and a lock. We give you a
              full-service home base — with amenities, maintenance, and people
              who actually give a damn.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                ),
                title: "Next-Day Service",
                desc: "Certified techs, often available tomorrow",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                ),
                title: "20+ Locations",
                desc: `Across ${uniqueStates.length} states and growing`,
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
                title: "24/7 Access",
                desc: "Keypad entry, cameras, gated perimeter",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                  </svg>
                ),
                title: "Real Amenities",
                desc: "Dump stations, wash bays, power & more",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-warm-border card-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-warm-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials: horizontal scroll strip ── */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Loved by RV owners
            </h2>
          </div>
          <div className="scroll-strip -mx-4 px-4">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="w-[340px] sm:w-[400px] p-6 rounded-2xl bg-warm-light border border-warm-border flex flex-col"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 pt-4 border-t border-warm-border">
                  <span className="text-sm font-semibold text-foreground">{t.name}</span>
                  <span className="text-sm text-warm-muted"> &middot; {t.location}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations preview: compact with search prompt ── */}
      <section className="py-16 sm:py-24 bg-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: prompt */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                Find your nearest Outrig
              </h2>
              <p className="mt-4 text-warm-muted leading-relaxed">
                {locations.length} facilities across {uniqueStates.length} states.
                Chances are we&apos;re closer than you think.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {uniqueStates.map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1 text-xs font-semibold bg-white border border-warm-border rounded-full text-warm-muted"
                  >
                    {state}
                  </span>
                ))}
              </div>
              <Link
                href="/locations"
                className="mt-8 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all"
              >
                View All Locations
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right: location cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
              {locations.slice(0, 6).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations#${loc.slug}`}
                  className="group flex items-start gap-3 p-4 bg-white rounded-xl border border-warm-border hover:border-accent/30 card-lift"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors truncate">
                      {loc.name}
                    </h4>
                    <p className="text-xs text-warm-muted mt-0.5">
                      {loc.city}, {loc.state}
                    </p>
                    <p className="text-xs text-warm-muted mt-1">
                      {loc.storageTypes.join(" · ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="/images/hero/covered-parking.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-darker/90" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to simplify RV ownership?
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            Find secure storage with real amenities, or book expert service
            with next-day availability.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-warm-darker bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all"
            >
              Find Storage Near You
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-stone-300 border border-stone-600 rounded-lg hover:bg-stone-800 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

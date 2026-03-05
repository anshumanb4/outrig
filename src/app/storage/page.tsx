import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV, Boat & Vehicle Storage | Outrig",
  description:
    "Secure storage for RVs, boats, cars, and commercial vehicles. Enclosed, canopy, and outdoor options with 24/7 access and on-site amenities.",
};

const storageImages: Record<string, string> = {
  rv: "/images/hero/covered-parking.png",
  boat: "/images/hero/aerial-uncovered-units.jpg",
  car: "/images/hero/classic-car.png",
  commercial: "/images/storage/storage-inventory.png",
  self: "/images/hero/cabazon-aerial.jpg",
};

const storageOptions = [
  {
    id: "rv",
    title: "RV Storage",
    description:
      "Whether you need covered protection or budget-friendly outdoor parking, we have flexible options for rigs of every size. Many locations include pull-through access.",
    features: [
      "Enclosed, canopy, and open parking",
      "Pull-through and back-in options",
      "On-site dump stations and wash bays",
      "Power hookups at select locations",
      "On-site RV service available",
    ],
  },
  {
    id: "boat",
    title: "Boat Storage",
    description:
      "Keep your boat secure and ready for the water. Our facilities accommodate boats of all sizes with easy access.",
    features: [
      "Covered and uncovered options",
      "Easy trailer access",
      "Boat launch access at select locations",
      "Secure, fenced facilities",
    ],
  },
  {
    id: "car",
    title: "Car Storage",
    description:
      "Classic car, seasonal vehicle, or extra family car — store it with confidence in a secure, well-maintained facility.",
    features: [
      "Enclosed climate-controlled units",
      "Covered and outdoor options",
      "Ideal for classic and collector cars",
      "24/7 keypad access",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Storage",
    description:
      "Flexible storage solutions for businesses. Store commercial vehicles, equipment, inventory, and more.",
    features: [
      "Large units for commercial vehicles",
      "Inventory and equipment storage",
      "Food truck parking at select locations",
      "Month-to-month flexibility",
    ],
  },
  {
    id: "self",
    title: "Self-Storage",
    description:
      "Traditional self-storage units in a variety of sizes. Perfect for household items, business supplies, or seasonal gear.",
    features: [
      "Multiple unit sizes available",
      "Climate-controlled options",
      "Drive-up access",
      "Month-to-month leases",
    ],
  },
];

const amenities = [
  "24/7 Keypad Access",
  "Security Cameras",
  "Night Lighting",
  "Gated & Fenced",
  "Dump Station",
  "Wash Station",
  "Electricity",
  "Propane Refill",
  "Climate Control",
  "Valet Service",
  "Ice Machine",
  "Tire Air",
];

export default function StoragePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-darker py-20 sm:py-28 overflow-hidden">
        <Image src="/images/hero/covered-parking.png" alt="" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-darker to-warm-darker/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              More than a <span className="text-accent">parking spot</span>
            </h1>
            <p className="mt-4 text-lg text-stone-400 leading-relaxed">
              Secure, accessible, fully equipped. Our facilities go beyond
              storage — with on-site amenities and optional RV service.
            </p>
            <Link
              href="/locations"
              className="mt-8 inline-flex items-center px-6 py-3 text-sm font-semibold text-warm-darker bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all"
            >
              Find Storage Near You
            </Link>
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {storageOptions.map((option, i) => (
            <div
              key={option.id}
              id={option.id}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {option.title}
                </h2>
                <p className="mt-3 text-warm-muted leading-relaxed">
                  {option.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`aspect-[4/3] rounded-2xl overflow-hidden relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={storageImages[option.id] || "/images/hero/covered-parking.png"}
                  alt={option.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 sm:py-24 bg-warm-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-3">
            On-site amenities
          </h2>
          <p className="text-center text-warm-muted mb-12 max-w-lg mx-auto">
            Availability varies by location. Contact your nearest facility for details.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-warm-border">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="text-sm font-medium text-foreground">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image src="/images/hero/aerial-uncovered-units.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-warm-darker/90" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Find the right storage for you
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            Browse our locations to see available units, pricing, and amenities.
          </p>
          <Link
            href="/locations"
            className="mt-8 inline-flex items-center px-7 py-3 text-sm font-semibold text-warm-darker bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all"
          >
            View All Locations
          </Link>
        </div>
      </section>
    </>
  );
}

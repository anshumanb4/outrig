import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV, Boat & Vehicle Storage | Outrig",
  description:
    "Secure storage for RVs, boats, cars, and commercial vehicles. Enclosed, canopy, and outdoor options with 24/7 access, dump stations, and on-site amenities.",
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
      "Whether you need covered protection or budget-friendly outdoor parking, we have flexible options for rigs of every size. Many locations include pull-through access for easy maneuvering.",
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
      "Keep your boat secure and ready for the water. Our facilities accommodate boats of all sizes with easy access and the amenities you need.",
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
      "Flexible storage solutions for businesses. Store commercial vehicles, equipment, inventory, and more at competitive rates.",
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
  { name: "24/7 Keypad Access", icon: "🔑" },
  { name: "Security Cameras", icon: "📹" },
  { name: "Night Lighting", icon: "💡" },
  { name: "Gated & Fenced", icon: "🔒" },
  { name: "Dump Station", icon: "🚿" },
  { name: "Wash Station", icon: "🧽" },
  { name: "Electricity", icon: "⚡" },
  { name: "Propane Refill", icon: "🔥" },
  { name: "Climate Control", icon: "❄️" },
  { name: "Valet Service", icon: "🚗" },
  { name: "Ice Machine", icon: "🧊" },
  { name: "Tire Air", icon: "🛞" },
];

export default function StoragePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              More Than Storage
            </h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              Secure, accessible, and fully equipped. Our facilities go beyond
              parking — with on-site amenities and optional RV service to
              simplify ownership.
            </p>
            <Link
              href="/locations"
              className="mt-8 inline-flex items-center px-6 py-3 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-gray-50 transition-colors"
            >
              Find Storage Near You
            </Link>
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center">
            Storage Options for Every Need
          </h2>

          <div className="space-y-16">
            {storageOptions.map((option, i) => (
              <div
                key={option.id}
                id={option.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-sans)]">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-brand-muted leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-foreground">{feature}</span>
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
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 sm:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            On-Site Amenities
          </h2>
          <p className="text-center text-brand-muted text-lg mb-12 max-w-2xl mx-auto">
            Amenities vary by location. Contact your nearest facility for details.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-border"
              >
                <span className="text-2xl">{amenity.icon}</span>
                <span className="text-sm font-medium text-foreground">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-brand-blue text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Find the Right Storage for You
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Browse our locations to see available units, pricing, and amenities.
          </p>
          <Link
            href="/locations"
            className="mt-8 inline-flex items-center px-8 py-3.5 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-gray-50 transition-colors"
          >
            View All Locations
          </Link>
        </div>
      </section>
    </>
  );
}

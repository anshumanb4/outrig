"use client";

import { useState } from "react";
import { locations, states } from "@/data/locations";

export default function LocationsPage() {
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [serviceFilter, setServiceFilter] = useState<string>("all");

  const allServices = [...new Set(locations.flatMap((l) => l.services))].sort();

  const filtered = locations.filter((loc) => {
    if (stateFilter !== "all" && loc.state !== stateFilter) return false;
    if (serviceFilter !== "all" && !loc.services.includes(serviceFilter)) return false;
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-warm-darker py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Our Locations</h1>
          <p className="mt-3 text-lg text-stone-400 max-w-md">
            {locations.length} facilities across {states.length} states.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-warm-border bg-white text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
            >
              <option value="all">All States</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-warm-border bg-white text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
            >
              <option value="all">All Services</option>
              {allServices.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {(stateFilter !== "all" || serviceFilter !== "all") && (
              <button
                onClick={() => { setStateFilter("all"); setServiceFilter("all"); }}
                className="text-sm font-medium text-accent hover:text-accent-hover self-center transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          <p className="text-xs text-warm-muted mb-5">
            Showing {filtered.length} of {locations.length} locations
          </p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((loc) => (
              <div
                key={loc.slug}
                id={loc.slug}
                className="p-5 bg-white rounded-xl border border-warm-border card-lift scroll-mt-24"
              >
                <h3 className="text-base font-bold text-foreground">{loc.name}</h3>
                <p className="mt-1 text-xs text-warm-muted">{loc.address}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {loc.services.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[11px] font-medium bg-accent/5 text-accent rounded">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {loc.storageTypes.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[11px] font-medium bg-sage/5 text-sage rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-2 text-xs text-warm-muted">{loc.amenities.join(" · ")}</p>

                <div className="mt-3 pt-3 border-t border-warm-border flex items-center justify-between">
                  <a href={`tel:${loc.phone}`} className="text-sm font-semibold text-accent">
                    {loc.phone}
                  </a>
                  {loc.servicePhone && (
                    <a href={`tel:${loc.servicePhone}`} className="text-xs text-warm-muted hover:text-foreground transition-colors">
                      Service: {loc.servicePhone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-warm-muted">
                No locations match your filters.{" "}
                <button onClick={() => { setStateFilter("all"); setServiceFilter("all"); }} className="text-accent font-semibold hover:underline">
                  Clear filters
                </button>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

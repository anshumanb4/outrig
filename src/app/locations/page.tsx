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
      <section className="bg-brand-blue py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Locations</h1>
          <p className="mt-3 text-lg text-blue-100 max-w-xl">
            {locations.length} facilities across {states.length} states. Find
            secure storage near you.
          </p>
        </div>
      </section>

      {/* Filters + List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-brand-border bg-white text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="all">All States</option>
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-brand-border bg-white text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="all">All Services</option>
              {allServices.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {(stateFilter !== "all" || serviceFilter !== "all") && (
              <button
                onClick={() => { setStateFilter("all"); setServiceFilter("all"); }}
                className="text-sm font-medium text-brand-blue hover:underline self-center"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Results count */}
          <p className="text-sm text-brand-muted mb-6">
            Showing {filtered.length} of {locations.length} locations
          </p>

          {/* Location Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((loc) => (
              <div
                key={loc.slug}
                id={loc.slug}
                className="p-6 bg-white rounded-xl border border-brand-border hover:shadow-md transition-shadow scroll-mt-24"
              >
                <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-sans)]">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-brand-muted">{loc.address}</p>

                {/* Services */}
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Services
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.services.map((service) => (
                      <span
                        key={service}
                        className="inline-block px-2 py-0.5 text-xs font-medium bg-brand-blue/5 text-brand-blue rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Storage Types */}
                <div className="mt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Storage Types
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.storageTypes.map((type) => (
                      <span
                        key={type}
                        className="inline-block px-2 py-0.5 text-xs font-medium bg-brand-green/5 text-brand-green rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Amenities
                  </h4>
                  <p className="text-xs text-brand-muted">
                    {loc.amenities.join(" · ")}
                  </p>
                </div>

                {/* Contact */}
                <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between">
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm font-semibold text-brand-blue"
                  >
                    {loc.phone}
                  </a>
                  {loc.servicePhone && (
                    <a
                      href={`tel:${loc.servicePhone}`}
                      className="text-xs text-brand-muted"
                    >
                      Service: {loc.servicePhone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-brand-muted">
                No locations match your filters.{" "}
                <button
                  onClick={() => { setStateFilter("all"); setServiceFilter("all"); }}
                  className="text-brand-blue font-semibold hover:underline"
                >
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

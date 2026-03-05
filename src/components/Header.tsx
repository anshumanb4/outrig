"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Storage", href: "/storage" },
  { label: "RV Service", href: "/service" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-brand-blue rounded-md px-2.5 py-1.5">
              <Image
                src="/images/logo.svg"
                alt="Outrig"
                width={80}
                height={42}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/locations"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
            >
              Find Storage
            </Link>
            <a
              href="tel:1-833-464-7678"
              className="hidden lg:inline-flex items-center text-sm font-medium text-brand-blue"
            >
              1-833-464-7678
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-600"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-border bg-white">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/locations"
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg mt-4"
            >
              Find Storage
            </Link>
            <a
              href="tel:1-833-464-7678"
              className="block text-center text-sm font-medium text-brand-blue mt-2"
            >
              1-833-464-7678
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

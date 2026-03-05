import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Storage: [
    { label: "RV Storage", href: "/storage" },
    { label: "Boat Storage", href: "/storage#boat" },
    { label: "Car Storage", href: "/storage#car" },
    { label: "Commercial Storage", href: "/storage#commercial" },
    { label: "Self-Storage", href: "/storage#self" },
  ],
  Services: [
    { label: "RV Service & Repair", href: "/service" },
    { label: "Food Truck Service", href: "/service#food-truck" },
    { label: "Book Service", href: "/contact" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/images/logo.svg" alt="Outrig" width={90} height={47} />
            <p className="mt-3 text-sm text-blue-200 leading-relaxed">
              Your premier solution for secure storage and expert RV service, nationwide.
            </p>
            <a
              href="tel:1-833-464-7678"
              className="inline-block mt-4 text-sm font-semibold text-white hover:text-blue-200 transition-colors"
            >
              1-833-464-7678
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4 font-[family-name:var(--font-sans)]">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-blue-100 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-blue-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Outrig. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-blue-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

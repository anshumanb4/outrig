import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Outrig",
  description: "Join the Outrig team. We're building the future of RV storage and service.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-brand-blue py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Join Our Team
            </h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              We&apos;re a growing company on a mission to make RV ownership
              easy. If you&apos;re passionate, hardworking, and want to make a
              real impact, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            We&apos;re Always Looking for Great People
          </h2>
          <p className="mt-4 text-lg text-brand-muted leading-relaxed">
            From RV technicians and facility managers to corporate roles, we
            offer competitive pay, growth opportunities, and a team that truly
            values each other.
          </p>
          <p className="mt-6 text-brand-muted">
            Interested? Reach out and tell us about yourself.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3.5 text-base font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

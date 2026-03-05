import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Outrig",
  description: "Join the Outrig team. We're building the future of RV storage and service.",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-warm-darker py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Join our <span className="text-accent">team</span>
            </h1>
            <p className="mt-4 text-lg text-stone-400 leading-relaxed">
              We&apos;re a growing company on a mission to make RV ownership easy.
              If you&apos;re passionate and hardworking, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground">
            We&apos;re always looking for great people
          </h2>
          <p className="mt-4 text-lg text-warm-muted leading-relaxed">
            From RV technicians and facility managers to corporate roles — we
            offer competitive pay, growth opportunities, and a team that values
            each other.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center px-7 py-3 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover btn-lift transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

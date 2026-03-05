import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Outrig" };

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-warm-darker py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-warm-muted leading-relaxed">
            Outrig is committed to protecting your privacy. This policy describes how we collect, use, and protect your personal information.
          </p>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Information We Collect</h2>
            <p className="text-warm-muted leading-relaxed text-sm">
              We may collect personal information you provide directly, such as your name, email, phone number, and payment information when you reserve storage or book services. We also collect usage data through cookies and analytics tools.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">How We Use Your Information</h2>
            <p className="text-warm-muted leading-relaxed text-sm">
              We use your information to provide and improve our services, process transactions, communicate with you, and comply with legal obligations.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Contact</h2>
            <p className="text-warm-muted leading-relaxed text-sm">
              For questions about this policy, contact us at 1-833-464-7678 or through our contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

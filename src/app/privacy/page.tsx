import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Outrig",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-blue py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <p className="text-brand-muted leading-relaxed">
            Outrig is committed to protecting your privacy. This policy describes how we collect, use, and protect your personal information when you visit our website or use our services.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Information We Collect</h2>
          <p className="text-brand-muted leading-relaxed">
            We may collect personal information you provide directly, such as your name, email, phone number, and payment information when you reserve storage or book services. We also collect usage data through cookies and analytics tools.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">How We Use Your Information</h2>
          <p className="text-brand-muted leading-relaxed">
            We use your information to provide and improve our services, process transactions, communicate with you, and comply with legal obligations.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8 mb-3">Contact</h2>
          <p className="text-brand-muted leading-relaxed">
            For questions about this policy, contact us at 1-833-464-7678 or through our contact page.
          </p>
        </div>
      </section>
    </>
  );
}

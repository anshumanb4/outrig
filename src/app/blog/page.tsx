import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Outrig",
  description: "Tips, guides, and insights for RV owners, boaters, and storage customers.",
};

const posts = [
  { slug: "5-common-rv-services-and-repairs", title: "5 Common Outrig RV Services and Repairs", excerpt: "From roof maintenance to winterization, here are the most common services RV owners request.", category: "RV Service", date: "Feb 2026" },
  { slug: "how-to-choose-rv-storage", title: "How to Choose the Right RV Storage Option", excerpt: "Enclosed, canopy, or outdoor? Here's how to decide which type is right for your rig.", category: "Storage Tips", date: "Jan 2026" },
  { slug: "rv-inspection-checklist", title: "RV Inspection Checklist: Before Every Trip", excerpt: "A comprehensive pre-trip checklist to keep you safe and catch problems early.", category: "RV Tips", date: "Jan 2026" },
  { slug: "how-to-dewinterize-your-rv", title: "How to De-Winterize Your RV", excerpt: "Follow these steps to safely bring your RV out of winter storage.", category: "Seasonal", date: "Dec 2025" },
  { slug: "do-you-need-insurance-in-storage", title: "Do You Need Insurance in Storage? Yes.", excerpt: "Your insurance requirements change when your rig is in storage. Here's what to know.", category: "Insurance", date: "Nov 2025" },
  { slug: "climate-controlled-storage", title: "Climate-Controlled Storage: Do You Need It?", excerpt: "Not everything needs climate control — but some things really do.", category: "Storage Tips", date: "Oct 2025" },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-warm-darker py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Blog</h1>
          <p className="mt-3 text-lg text-stone-400">Tips and insights for RV owners.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="group flex flex-col p-6 rounded-2xl bg-white border border-warm-border card-lift">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-accent/5 text-accent rounded">{post.category}</span>
                  <span className="text-xs text-warm-muted">{post.date}</span>
                </div>
                <h2 className="text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug">{post.title}</h2>
                <p className="mt-2 text-sm text-warm-muted leading-relaxed flex-grow">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-accent">Read more &rarr;</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Outrig",
  description: "Tips, guides, and insights for RV owners, boaters, and storage customers.",
};

const posts = [
  {
    slug: "5-common-rv-services-and-repairs",
    title: "5 Common Outrig RV Services and Repairs",
    excerpt: "From roof maintenance to winterization, here are the most common services RV owners request — and why regular maintenance matters.",
    category: "RV Service",
    date: "Feb 2026",
  },
  {
    slug: "how-to-choose-rv-storage",
    title: "How to Choose the Right RV Storage Option",
    excerpt: "Enclosed, canopy, or outdoor? Here's how to decide which storage type is right for your rig and budget.",
    category: "Storage Tips",
    date: "Jan 2026",
  },
  {
    slug: "rv-inspection-checklist",
    title: "RV Inspection Checklist: What to Check Before Every Trip",
    excerpt: "A comprehensive pre-trip checklist to keep you safe on the road and catch problems before they become expensive.",
    category: "RV Tips",
    date: "Jan 2026",
  },
  {
    slug: "how-to-dewinterize-your-rv",
    title: "How to De-Winterize Your RV",
    excerpt: "Spring is here. Follow these steps to safely bring your RV out of winter storage and get it road-ready.",
    category: "Seasonal",
    date: "Dec 2025",
  },
  {
    slug: "do-you-need-insurance-in-storage",
    title: "Do You Need Insurance When Your RV Is in Storage? Yes.",
    excerpt: "Many RV owners don't realize their insurance requirements change when their rig is in storage. Here's what you need to know.",
    category: "Insurance",
    date: "Nov 2025",
  },
  {
    slug: "climate-controlled-storage",
    title: "Climate-Controlled Storage: How to Decide If You Need It",
    excerpt: "Not everything needs climate control — but some things really do. Here's how to make the right call.",
    category: "Storage Tips",
    date: "Oct 2025",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-blue py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Blog</h1>
          <p className="mt-3 text-lg text-blue-100">
            Tips, guides, and insights for RV owners and storage customers.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col p-6 rounded-2xl border border-brand-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-0.5 text-xs font-semibold bg-brand-blue/5 text-brand-blue rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-brand-muted">{post.date}</span>
                </div>
                <h2 className="text-lg font-bold text-foreground group-hover:text-brand-blue transition-colors font-[family-name:var(--font-sans)]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-semibold text-brand-blue">
                  Read more &rarr;
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

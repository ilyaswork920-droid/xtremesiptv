import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BlogCoverImage } from "@/components/BlogCoverImage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { blogArticles } from "@/lib/data/blog";
import { getBlogImage } from "@/lib/data/blog-images";

export const metadata: Metadata = buildMetadata({
  title: "Blog — IPTV Guides, Setup Tips & Troubleshooting",
  description:
    "Xtremes IPTV's blog covers IPTV fundamentals, device setup guides, troubleshooting, and streaming quality tips.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const sorted = [...blogArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              The Xtremes IPTV Blog
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Guides and tips on IPTV setup, devices, troubleshooting, and
              getting the most out of your streaming quality.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-md"
              >
                <BlogCoverImage image={getBlogImage(article.slug)} />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {article.category}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">
                    {article.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-muted">
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

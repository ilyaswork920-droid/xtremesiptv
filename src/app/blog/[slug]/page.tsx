import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BlogCoverImage } from "@/components/BlogCoverImage";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { blogArticles, getBlogArticleBySlug, getRelatedArticles } from "@/lib/data/blog";
import { getBlogImage } from "@/lib/data/blog-images";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const coverImage = getBlogImage(article.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: article.title, path: `/blog/${slug}` },
          ]),
          articleJsonLd({
            title: article.title,
            description: article.metaDescription,
            slug: article.slug,
            image: `${siteConfig.url}${coverImage.src}`,
            publishedAt: article.publishedAt,
            modifiedAt: article.modifiedAt,
            authorName: siteConfig.name,
          }),
          ...(article.faq ? [faqJsonLd(article.faq)] : []),
        ]}
      />

      <article className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav className="text-xs text-muted" aria-label="Breadcrumb">
              <Link href="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-foreground">{article.category}</span>
            </nav>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {article.title}
            </h1>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted">
              <span>{siteConfig.name}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readTime}</span>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl">
              <BlogCoverImage image={coverImage} priority />
            </div>

            <div
              className="prose-article mt-10"
              dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
            />

            {article.faq ? (
              <div className="mt-14">
                <h2 className="text-xl font-bold text-foreground">
                  Frequently asked questions
                </h2>
                <div className="mt-5">
                  <Accordion items={article.faq} />
                </div>
              </div>
            ) : null}

            {related.length > 0 ? (
              <div className="mt-16 border-t border-border pt-10">
                <h2 className="text-xl font-bold text-foreground">
                  Related articles
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="rounded-xl border border-border bg-surface p-4 text-sm font-medium text-foreground transition hover:border-brand/50"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </article>
    </>
  );
}

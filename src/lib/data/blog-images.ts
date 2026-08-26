import manifest from "./blog-photo-manifest.json";

export type BlogImage = {
  slug: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  license?: string;
  artist?: string;
  sourceUrl?: string;
};

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 675;

type PhotoManifestRow = {
  slug: string;
  alt: string;
  license?: string;
  artist?: string;
  sourceUrl?: string;
};

const blogImages: Record<string, BlogImage> = Object.fromEntries(
  (manifest as PhotoManifestRow[]).map((row) => [
    row.slug,
    {
      slug: row.slug,
      src: `/images/blog/${row.slug}.webp`,
      alt: row.alt,
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      license: row.license,
      artist: row.artist,
      sourceUrl: row.sourceUrl,
    },
  ])
);

export function getBlogImage(slug: string): BlogImage {
  return (
    blogImages[slug] ?? {
      slug,
      src: `/images/blog/${slug}.webp`,
      alt: "Xtremes IPTV blog article photo",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
    }
  );
}

import manifest from "./device-photo-manifest.json";

export type DeviceImage = {
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

const deviceImages: Record<string, DeviceImage> = Object.fromEntries(
  (manifest as PhotoManifestRow[]).map((row) => [
    row.slug,
    {
      slug: row.slug,
      src: `/images/devices/${row.slug}.webp`,
      alt: row.alt,
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      license: row.license,
      artist: row.artist,
      sourceUrl: row.sourceUrl,
    },
  ])
);

export function getDeviceImage(slug: string): DeviceImage {
  return (
    deviceImages[slug] ?? {
      slug,
      src: `/images/devices/${slug}.webp`,
      alt: "Xtremes IPTV device setup photo",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
    }
  );
}

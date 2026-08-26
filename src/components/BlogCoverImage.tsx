import Image from "next/image";

export type PhotoImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  license?: string;
  artist?: string;
  sourceUrl?: string;
};

const ATTRIBUTION_REQUIRED = /^CC BY(-SA)?/i;

function attributionTitle(image: PhotoImage): string | undefined {
  if (!image.license || !ATTRIBUTION_REQUIRED.test(image.license)) return undefined;
  const by = image.artist ? ` by ${image.artist}` : "";
  return `Photo${by}, licensed under ${image.license} (Wikimedia Commons)`;
}

export function BlogCoverImage({
  image,
  className = "",
  priority = false,
}: {
  image: PhotoImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      title={attributionTitle(image)}
      width={image.width}
      height={image.height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      className={`aspect-[16/9] w-full object-cover ${className}`}
    />
  );
}

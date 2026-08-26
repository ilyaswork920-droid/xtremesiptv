const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const STAGING = "/private/tmp/claude-501/-Users-ilyastisli-Desktop-xtremesiptv/05afdcd8-779b-4e62-acbf-dc91eac12767/scratchpad/wm-staging";
const BLOG_OUT = path.join(__dirname, "..", "public", "images", "blog");
const DEVICE_OUT = path.join(__dirname, "..", "public", "images", "devices");
const HERO_OUT = path.join(__dirname, "..", "public", "images", "hero");

fs.mkdirSync(BLOG_OUT, { recursive: true });
fs.mkdirSync(DEVICE_OUT, { recursive: true });
fs.mkdirSync(HERO_OUT, { recursive: true });

const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "src", "lib", "data", "blog-photo-manifest.json"), "utf8")
);
const deviceManifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "src", "lib", "data", "device-photo-manifest.json"), "utf8")
);

async function processOne(slug, srcPath, outPath, width, height) {
  await sharp(srcPath)
    .resize(width, height, { fit: "cover", position: "attention" })
    .webp({ quality: 82 })
    .toFile(outPath);
}

(async () => {
  let ok = 0;
  let fail = [];
  for (const item of manifest) {
    const src = path.join(STAGING, `${item.slug}.jpg`);
    const out = path.join(BLOG_OUT, `${item.slug}.webp`);
    if (!fs.existsSync(src)) {
      fail.push(item.slug);
      continue;
    }
    try {
      await processOne(item.slug, src, out, 1200, 675);
      ok++;
    } catch (e) {
      console.log(`ERROR processing ${item.slug}: ${e.message}`);
      fail.push(item.slug);
    }
  }

  let deviceOk = 0;
  let deviceFail = [];
  for (const item of deviceManifest) {
    const src = path.join(STAGING, `device-${item.slug}.jpg`);
    const out = path.join(DEVICE_OUT, `${item.slug}.webp`);
    if (!fs.existsSync(src)) {
      deviceFail.push(item.slug);
      continue;
    }
    try {
      await processOne(item.slug, src, out, 1200, 675);
      deviceOk++;
    } catch (e) {
      console.log(`ERROR processing device-${item.slug}: ${e.message}`);
      deviceFail.push(item.slug);
    }
  }

  // hero
  const heroSrc = path.join(STAGING, "__hero__.jpg");
  if (fs.existsSync(heroSrc)) {
    await sharp(heroSrc)
      .resize(1400, 1050, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(path.join(HERO_OUT, "xtreme-siptv-hero-tv.webp"));
    console.log("Hero processed.");
  } else {
    console.log("Hero source missing.");
  }

  console.log(`Processed ${ok}/${manifest.length} blog images.`);
  console.log(`Missing/failed: ${fail.length}`, fail);
  console.log(`Processed ${deviceOk}/${deviceManifest.length} device images.`);
  console.log(`Missing/failed: ${deviceFail.length}`, deviceFail);
})();

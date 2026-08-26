import type { LucideIcon } from "lucide-react";
import { Apple, Laptop, MonitorSmartphone, Smartphone, Tablet, Tv, Tv2 } from "lucide-react";

export type Device = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: LucideIcon;
  playerNote: string;
};

export const devices: Device[] = [
  {
    slug: "firestick",
    name: "Amazon Fire TV / Firestick",
    shortDescription:
      "Stream through a compatible IPTV player app installed from the Amazon Appstore or sideloaded via the Downloader app.",
    icon: Tv,
    playerNote: "Works with most third-party IPTV player apps available for Fire OS.",
  },
  {
    slug: "android-tv",
    name: "Android TV",
    shortDescription:
      "Install a compatible IPTV player from the Google Play Store on any Android TV or Google TV device.",
    icon: Tv2,
    playerNote: "Compatible with Android TV boxes, Chromecast with Google TV, and Android TV-based smart TVs.",
  },
  {
    slug: "smart-tv",
    name: "Smart TV (Samsung & LG)",
    shortDescription:
      "Samsung Tizen and LG webOS smart TVs can stream through supported apps available on their respective app stores or via sideloading tools.",
    icon: MonitorSmartphone,
    playerNote: "Setup steps differ slightly between Tizen and webOS — see the dedicated guide for both.",
  },
  {
    slug: "iphone-ipad",
    name: "iPhone & iPad",
    shortDescription:
      "Install a compatible IPTV player from the App Store and load your subscription details to start streaming on iOS.",
    icon: Tablet,
    playerNote: "AirPlay support lets you mirror playback to an Apple TV or AirPlay-enabled television.",
  },
  {
    slug: "android",
    name: "Android Phones & Tablets",
    shortDescription:
      "Any Android phone or tablet running a recent OS version can stream through a Play Store IPTV player app.",
    icon: Smartphone,
    playerNote: "Chromecast support lets you cast playback to a TV from most Android IPTV apps.",
  },
  {
    slug: "windows",
    name: "Windows",
    shortDescription:
      "Use a desktop IPTV player application or a browser-based player on Windows 10 and Windows 11.",
    icon: Laptop,
    playerNote: "A wired or stable Wi-Fi connection is recommended for the smoothest desktop playback.",
  },
  {
    slug: "mac",
    name: "Mac",
    shortDescription:
      "macOS supports the same class of desktop and browser-based IPTV players available for Windows.",
    icon: Laptop,
    playerNote: "Works on both Apple Silicon and Intel-based Macs running a supported macOS version.",
  },
  {
    slug: "apple-tv",
    name: "Apple TV",
    shortDescription:
      "Install a compatible IPTV player from the tvOS App Store, or AirPlay from an iPhone, iPad, or Mac.",
    icon: Apple,
    playerNote: "Requires a 4th-generation Apple TV or newer to run tvOS apps natively.",
  },
];

export function getDeviceBySlug(slug: string) {
  return devices.find((device) => device.slug === slug);
}

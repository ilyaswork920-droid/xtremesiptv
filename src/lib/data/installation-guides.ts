export type InstallStep = {
  title: string;
  description: string;
};

export type InstallGuide = {
  deviceSlug: string;
  title: string;
  metaDescription: string;
  intro: string;
  requirements: string[];
  steps: InstallStep[];
  troubleshooting: { issue: string; fix: string }[];
};

export const installationGuides: InstallGuide[] = [
  {
    deviceSlug: "firestick",
    title: "How to Install Xtremes IPTV on Firestick",
    metaDescription:
      "Step-by-step guide to setting up Xtremes IPTV on Amazon Firestick and Fire TV, including app installation and troubleshooting tips.",
    intro:
      "Firestick is one of the most popular ways to stream Xtremes IPTV on a television, thanks to its low cost and wide app support. This guide walks through installing a compatible IPTV player and loading your subscription so you can start watching in a few minutes.",
    requirements: [
      "An Amazon Fire TV Stick or Fire TV device with Fire OS 6 or newer",
      "An active Xtremes IPTV subscription with your login details or M3U URL",
      "A stable internet connection — at least 15 Mbps is recommended for HD",
      "An Amazon account signed in on the device",
    ],
    steps: [
      {
        title: "Enable apps from unknown sources",
        description:
          "On the Fire TV home screen, go to Settings > My Fire TV > Developer Options and turn on Apps from Unknown Sources. This allows sideloaded IPTV player apps to run.",
      },
      {
        title: "Install the Downloader app",
        description:
          "From the Fire TV search bar, find and install the free Downloader app from the Amazon Appstore. It's used to fetch the IPTV player installer file.",
      },
      {
        title: "Download a compatible IPTV player",
        description:
          "Open Downloader and enter the URL for a supported IPTV player app (such as IPTV Smarters or a similar player). Confirm the download and run the installer when prompted.",
      },
      {
        title: "Enter your Xtremes IPTV credentials",
        description:
          "Launch the player app, choose to add a new playlist, and enter the username, password, and server URL (or the M3U link) provided in your Xtremes IPTV welcome email.",
      },
      {
        title: "Load the channel list and start streaming",
        description:
          "The app will sync your channel list and EPG data. Once the sync finishes, browse categories or use search to find a channel and start watching.",
      },
    ],
    troubleshooting: [
      {
        issue: "Downloader can't find the file at the URL I entered",
        fix: "Double-check the URL for typos, or search the Downloader app's built-in browser for the IPTV player's official download page instead.",
      },
      {
        issue: "The app installs but crashes on launch",
        fix: "Restart the Firestick from Settings > My Fire TV > Restart, then reopen the app. If it still crashes, uninstall and reinstall the player.",
      },
      {
        issue: "Channels load but keep buffering",
        fix: "Run a speed test on the same network. If speeds are below 15 Mbps, connect the Firestick via Ethernet adapter or move closer to the router.",
      },
      {
        issue: "\"Invalid credentials\" error when adding the playlist",
        fix: "Re-enter your username, password, and server URL carefully, avoiding extra spaces. If the issue continues, contact support to confirm your account is active.",
      },
    ],
  },
  {
    deviceSlug: "android-tv",
    title: "How to Install Xtremes IPTV on Android TV",
    metaDescription:
      "Set up Xtremes IPTV on Android TV boxes, Google TV, and Android TV-based smart TVs with this complete installation walkthrough.",
    intro:
      "Android TV's open app ecosystem makes it one of the easiest platforms to run Xtremes IPTV on, since most IPTV players are available directly through the Google Play Store. Here's how to get set up.",
    requirements: [
      "An Android TV box, Chromecast with Google TV, or Android TV-based smart TV",
      "A Google account signed in on the device",
      "An active Xtremes IPTV subscription with your credentials or M3U URL",
      "A wired or stable Wi-Fi connection",
    ],
    steps: [
      {
        title: "Open the Google Play Store",
        description:
          "From the Android TV home screen, launch the Play Store app using your remote.",
      },
      {
        title: "Search for a compatible IPTV player",
        description:
          "Search for a supported IPTV player app and select Install. Most players are free to download.",
      },
      {
        title: "Open the app and add your playlist",
        description:
          "Launch the installed player and choose the option to add a new playlist using either Xtream Codes login (username, password, server URL) or a direct M3U link.",
      },
      {
        title: "Sync channels and EPG",
        description:
          "Allow the app a moment to download the full channel list and program guide data before browsing.",
      },
      {
        title: "Organize favorites for easier navigation",
        description:
          "Most players let you star or favorite frequently watched channels so they appear at the top of the list.",
      },
    ],
    troubleshooting: [
      {
        issue: "Can't find an IPTV player in the Play Store",
        fix: "Some regions restrict certain apps. Try searching by the exact app name, or sideload the APK using a file manager if it's unavailable in your region's store.",
      },
      {
        issue: "Playlist won't load after entering details",
        fix: "Confirm the server URL doesn't have a trailing slash and that the username/password match exactly what was sent in your welcome email.",
      },
      {
        issue: "Picture is pixelated or freezes intermittently",
        fix: "Lower the stream quality setting inside the player app, or test your connection speed and switch to a wired connection if possible.",
      },
      {
        issue: "EPG (program guide) shows no data",
        fix: "Give the app a few minutes after first setup to fully download guide data, then restart the app.",
      },
    ],
  },
  {
    deviceSlug: "smart-tv",
    title: "How to Install Xtremes IPTV on Samsung & LG Smart TVs",
    metaDescription:
      "Guide to streaming Xtremes IPTV on Samsung Tizen and LG webOS smart TVs, covering app store setup and sideloading options.",
    intro:
      "Samsung and LG smart TVs run their own operating systems — Tizen and webOS — which support IPTV playback through dedicated apps or web-based players. This guide covers both platforms.",
    requirements: [
      "A Samsung Tizen or LG webOS smart TV connected to the internet",
      "An active Xtremes IPTV subscription with your login details",
      "A Samsung or LG account, depending on your TV brand",
      "A stable internet connection, ideally wired for 4K content",
    ],
    steps: [
      {
        title: "Open your TV's app store",
        description:
          "On Samsung TVs, open the Samsung Smart Hub and go to Apps. On LG TVs, open the LG Content Store from the home screen.",
      },
      {
        title: "Search for a supported IPTV app",
        description:
          "Look for a compatible IPTV player app in the store. If none is available for your model, use the TV's built-in web browser to access a browser-based player instead.",
      },
      {
        title: "Install and open the app",
        description:
          "Download the app and open it once installation finishes.",
      },
      {
        title: "Enter your subscription details",
        description:
          "Add your Xtremes IPTV username, password, and server URL, or paste your M3U playlist link if the app supports it.",
      },
      {
        title: "Wait for the channel list to sync",
        description:
          "The app will download the channel list and guide data. This can take a minute on the first run.",
      },
    ],
    troubleshooting: [
      {
        issue: "No IPTV app available in my TV's store",
        fix: "Use the TV's built-in browser to open a web-based IPTV player, or stream through a connected Firestick, Android TV box, or Apple TV instead.",
      },
      {
        issue: "App interface feels slow or laggy",
        fix: "Older smart TV processors can struggle with heavier apps. Closing background apps and restarting the TV often helps.",
      },
      {
        issue: "Video plays but there's no sound",
        fix: "Check the TV's audio output settings and confirm the app isn't muted independently from the system volume.",
      },
      {
        issue: "TV loses connection to the app frequently",
        fix: "Switch to a wired Ethernet connection if possible, or move the router closer to reduce Wi-Fi interference.",
      },
    ],
  },
  {
    deviceSlug: "iphone-ipad",
    title: "How to Install Xtremes IPTV on iPhone & iPad",
    metaDescription:
      "Learn how to set up Xtremes IPTV on iPhone and iPad using a compatible App Store player, plus AirPlay streaming to your TV.",
    intro:
      "Watching Xtremes IPTV on iPhone or iPad is a matter of installing a supported player from the App Store and entering your subscription details — you can also mirror playback to a TV using AirPlay.",
    requirements: [
      "An iPhone or iPad running a recent iOS or iPadOS version",
      "An Apple ID signed in to the App Store",
      "An active Xtremes IPTV subscription with your credentials or M3U URL",
      "A stable Wi-Fi or cellular data connection",
    ],
    steps: [
      {
        title: "Open the App Store",
        description:
          "Search for a compatible IPTV player app designed for iOS, such as a player supporting Xtream Codes or M3U playlists.",
      },
      {
        title: "Download and install the app",
        description: "Tap Get to install the app on your device.",
      },
      {
        title: "Add your Xtremes IPTV account",
        description:
          "Open the app and choose to add a new playlist. Enter your username, password, and server URL, or your M3U link if that's how your account was provisioned.",
      },
      {
        title: "Let the app sync channels",
        description:
          "The app will download the full channel list and EPG data before playback becomes available.",
      },
      {
        title: "Use AirPlay to watch on a TV",
        description:
          "While a channel is playing, open Control Center and tap the AirPlay icon to send video to an Apple TV or AirPlay-compatible television.",
      },
    ],
    troubleshooting: [
      {
        issue: "App rejects my login details",
        fix: "Verify the username, password, and server URL exactly match the details in your welcome email, with no extra spaces.",
      },
      {
        issue: "AirPlay option doesn't appear",
        fix: "Confirm your iPhone/iPad and Apple TV are on the same Wi-Fi network, then reopen Control Center.",
      },
      {
        issue: "Playback stutters on cellular data",
        fix: "Switch to Wi-Fi where possible, or lower the stream quality inside the app's settings menu.",
      },
      {
        issue: "App was removed from the App Store",
        fix: "Some IPTV apps rotate in and out of app stores. Check for an alternative supported player or use a browser-based option.",
      },
    ],
  },
  {
    deviceSlug: "android",
    title: "How to Install Xtremes IPTV on Android Phones & Tablets",
    metaDescription:
      "Complete setup guide for streaming Xtremes IPTV on Android phones and tablets, including Chromecast casting instructions.",
    intro:
      "Android's flexibility makes it simple to run Xtremes IPTV through a Play Store app, and Chromecast support means you can send playback to a TV without extra hardware.",
    requirements: [
      "An Android phone or tablet running Android 8.0 or newer",
      "A Google account signed in to the Play Store",
      "An active Xtremes IPTV subscription with your login details",
      "A stable Wi-Fi or mobile data connection",
    ],
    steps: [
      {
        title: "Install a compatible IPTV player",
        description:
          "Open the Play Store and search for a supported IPTV player app, then install it.",
      },
      {
        title: "Open the app and add your playlist",
        description:
          "Choose to add a new playlist and enter your Xtremes IPTV username, password, and server URL, or your M3U link.",
      },
      {
        title: "Allow the channel list to sync",
        description:
          "The app downloads your channel list and program guide before playback becomes available.",
      },
      {
        title: "Cast to a TV with Chromecast",
        description:
          "If your player app supports it, tap the Cast icon while a channel is playing to send video to a Chromecast-enabled TV.",
      },
    ],
    troubleshooting: [
      {
        issue: "App won't sync the channel list",
        fix: "Check your internet connection and re-enter the server URL, confirming there are no typos or missing characters.",
      },
      {
        issue: "Cast icon is missing",
        fix: "Confirm your phone and Chromecast device are connected to the same Wi-Fi network.",
      },
      {
        issue: "Video quality drops on mobile data",
        fix: "Mobile networks can throttle streaming quality. Switch to Wi-Fi or lower the resolution setting inside the app.",
      },
      {
        issue: "App closes unexpectedly",
        fix: "Clear the app's cache in Android Settings > Apps, or reinstall the player.",
      },
    ],
  },
  {
    deviceSlug: "windows",
    title: "How to Install Xtremes IPTV on Windows",
    metaDescription:
      "How to set up Xtremes IPTV on a Windows 10 or Windows 11 PC using a desktop IPTV player application.",
    intro:
      "Windows users can stream Xtremes IPTV through a dedicated desktop IPTV player, giving you full-screen playback on any monitor connected to your PC.",
    requirements: [
      "A PC running Windows 10 or Windows 11",
      "An active Xtremes IPTV subscription with your credentials or M3U URL",
      "A stable internet connection, wired recommended for 4K content",
    ],
    steps: [
      {
        title: "Download a compatible IPTV player",
        description:
          "Download a supported desktop IPTV player application (such as a VLC-based or dedicated Xtream Codes-compatible player) from its official website.",
      },
      {
        title: "Install the application",
        description:
          "Run the installer and follow the on-screen prompts to complete setup.",
      },
      {
        title: "Add your Xtremes IPTV playlist",
        description:
          "Open the player and enter your username, password, and server URL, or load your M3U playlist link directly.",
      },
      {
        title: "Start streaming",
        description:
          "Once the channel list syncs, browse categories or search to find a channel and begin watching.",
      },
    ],
    troubleshooting: [
      {
        issue: "Windows Defender flags the installer",
        fix: "Only download IPTV player software from the developer's official website, and verify the publisher name before allowing the installer through.",
      },
      {
        issue: "Playback is choppy on a wired connection",
        fix: "Close bandwidth-heavy background apps and check for other devices on the network consuming bandwidth simultaneously.",
      },
      {
        issue: "No audio during playback",
        fix: "Check the player's internal audio output setting matches your system's default playback device.",
      },
      {
        issue: "App won't accept the M3U link",
        fix: "Make sure the link was copied in full, including the protocol prefix, with no line breaks.",
      },
    ],
  },
  {
    deviceSlug: "mac",
    title: "How to Install Xtremes IPTV on Mac",
    metaDescription:
      "Set up Xtremes IPTV on macOS with a compatible desktop IPTV player, covering both Apple Silicon and Intel Macs.",
    intro:
      "macOS supports the same category of desktop IPTV players available on Windows, so Mac users can watch Xtremes IPTV in a dedicated app rather than a browser.",
    requirements: [
      "A Mac running a supported macOS version (Apple Silicon or Intel)",
      "An active Xtremes IPTV subscription with your login details",
      "A stable internet connection",
    ],
    steps: [
      {
        title: "Download a compatible IPTV player for macOS",
        description:
          "Choose a desktop IPTV player with native macOS support, or a cross-platform player such as VLC configured with your playlist URL.",
      },
      {
        title: "Install the application",
        description:
          "Open the downloaded file and drag the app into your Applications folder, or run the installer if one is provided.",
      },
      {
        title: "Approve the app in Security settings",
        description:
          "If macOS blocks the app on first launch, go to System Settings > Privacy & Security and allow it to open.",
      },
      {
        title: "Enter your Xtremes IPTV details",
        description:
          "Add your username, password, and server URL, or your M3U link, inside the player's playlist settings.",
      },
      {
        title: "Start watching",
        description:
          "Once the channel list finishes syncing, select a channel to begin streaming.",
      },
    ],
    troubleshooting: [
      {
        issue: "macOS says the app is from an unidentified developer",
        fix: "Go to System Settings > Privacy & Security, scroll to the security section, and click Open Anyway next to the blocked app.",
      },
      {
        issue: "Stream lags on Wi-Fi",
        fix: "Move closer to the router or switch to a wired connection via a USB-C to Ethernet adapter.",
      },
      {
        issue: "Player app doesn't launch on Apple Silicon",
        fix: "Confirm you downloaded a universal or Apple Silicon-native build rather than an Intel-only version.",
      },
    ],
  },
  {
    deviceSlug: "apple-tv",
    title: "How to Install Xtremes IPTV on Apple TV",
    metaDescription:
      "Guide to streaming Xtremes IPTV on Apple TV using a tvOS app or AirPlay from an iPhone, iPad, or Mac.",
    intro:
      "Apple TV supports Xtremes IPTV either through a dedicated tvOS app store player or by AirPlaying from another Apple device — this guide covers both routes.",
    requirements: [
      "An Apple TV HD or Apple TV 4K (4th generation or newer)",
      "An Apple ID signed in on the Apple TV",
      "An active Xtremes IPTV subscription with your login details",
      "A stable internet connection",
    ],
    steps: [
      {
        title: "Open the tvOS App Store",
        description:
          "From the Apple TV home screen, open the App Store and search for a compatible IPTV player.",
      },
      {
        title: "Install the app",
        description: "Select the app and choose Get to install it.",
      },
      {
        title: "Add your Xtremes IPTV playlist",
        description:
          "Open the app and enter your username, password, and server URL, or your M3U link, in the playlist setup screen.",
      },
      {
        title: "Alternative: AirPlay from another Apple device",
        description:
          "If no suitable tvOS app is available, install a player on your iPhone, iPad, or Mac instead, then use AirPlay to send playback to the Apple TV.",
      },
    ],
    troubleshooting: [
      {
        issue: "No IPTV apps appear in the tvOS App Store search",
        fix: "App availability varies by region and Apple TV generation. Use the AirPlay method from an iPhone, iPad, or Mac as a reliable fallback.",
      },
      {
        issue: "AirPlay option is greyed out",
        fix: "Ensure both devices are signed in with the same Apple ID and connected to the same Wi-Fi network.",
      },
      {
        issue: "Playback buffers frequently",
        fix: "Connect the Apple TV via Ethernet using an adapter, or move it closer to the router.",
      },
    ],
  },
];

export function getInstallGuideBySlug(slug: string) {
  return installationGuides.find((guide) => guide.deviceSlug === slug);
}

---
title: Shutterback
tagline: A macOS menu bar app that copies new photos and videos off your camera, then gives the camera back.
kind: app
platform: macOS
year: 2026
date: '2026-10-01'
status: New
order: 4
featured: true
accent: '#3b82f6'
icon: /projects/shutterback-icon.webp
image: /projects/shutterback.webp
imageAlt: The Shutterback panel open under its menu bar item, importing file 3 of 12 at 42 percent
stack: [Swift, SwiftUI, AppKit, IOKit, IOUSBHost, ImageCaptureCore]
links:
  - label: How it unsticks a Canon
    href: /blog/canon-stuck-usb-screen-mac
  - label: Ask me for a build
    href: mailto:bernis@bernisnukic.com?subject=Shutterback
gallery:
  - src: /projects/shutterback-states.webp
    alt: The panel ready to import, importing, and done
    width: 1600
    height: 589
  - src: /projects/shutterback-menubar.webp
    alt: The menu bar item's states, from no camera to done
    width: 1300
    height: 112
---

I set up a Canon R50 to film videos, and the first annoyance was getting footage off it. Every import on my Mac left the camera on its "connected to computer" screen, and it wouldn't shoot again until I pulled the cable.

Shutterback fixes that. It doesn't touch the camera until you click **Import new files**, and when the copy is done it hands the camera back, ready to shoot.

## How it works

The menu bar app only reads the USB device list, which never claims the camera. An import runs in a short-lived process that opens the camera, copies what's new and exits. macOS lets go of the camera at that point, but a Canon stays stuck in USB mode anyway, so Shutterback then talks to the camera directly over USB and sends Canon's own teardown commands. I wrote up [how I tracked that down](/blog/canon-stuck-usb-screen-mac).

- Copies only new files, into one folder per day
- Live progress in the menu bar, with the file, speed and time left in the panel
- Gives a Canon back the moment the import ends, no unplugging
- Never deletes anything from the card, and a stopped import never leaves half-written files
- Notices a Canon plugged in as a webcam and tells you which USB mode to switch to

It's native Swift with SwiftUI and AppKit, IOKit for detection, ImageCaptureCore for the transfer and raw PTP over IOUSBHost to release the camera. No dependencies, no network access.

---
title: Airprowl
tagline: A real-time Bluetooth, WiFi and Sub-GHz wireless scanner for the Linux terminal.
kind: app
platform: Linux
year: 2026
date: '2026-06-04'
status: v1.0
order: 6
featured: true
accent: '#4ade80'
image: /projects/airprowl.webp
video: /projects/airprowl.mp4
imageAlt: Airprowl's WiFi tab listing nearby access points and clients with signal bars and distance estimates
stack: [Rust, Tokio, Ratatui, BlueZ, libusb]
links:
  - label: View on GitHub
    href: https://github.com/bernisnukic/airprowl
---

Airprowl shows every wireless device around you in one live terminal view: Bluetooth (classic and BLE), WiFi access points and the clients talking to them, and Sub-GHz devices on 315, 433, 868 and 915 MHz through a Yard Stick One.

Each device gets a smoothed signal reading with a trend arrow, a rough distance estimate and a vendor name from bundled IEEE and Bluetooth SIG databases. WiFi scanning works without root; watching WiFi clients uses a monitor interface and parses the raw 802.11 frames.

There's also a headless mode that streams JSON, and a demo mode with simulated devices, which is what the recording above shows.

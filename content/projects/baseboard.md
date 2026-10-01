---
title: Baseboard
tagline: One desktop app for managing servers out of band, across IPMI, Lenovo IMM2, Dell iDRAC and Supermicro.
kind: app
platform: Windows, macOS, Linux
year: 2026
date: '2026-05-31'
status: Open source
order: 5
featured: true
accent: '#818cf8'
image: /projects/baseboard.webp
imageAlt: The Baseboard dashboard listing servers by project with their power state
stack: [Electron, TypeScript, noVNC, ipmitool]
links:
  - label: View on GitHub
    href: https://github.com/bernisnukic/baseboard
gallery:
  - src: /projects/baseboard-server.webp
    alt: A server's detail page with power controls and hardware information
    width: 1600
    height: 1067
---

Every server has a BMC, a small always-on computer that lets you read temperatures, check the hardware event log and power-cycle the machine even when its operating system is down. Every vendor ships its own clunky web interface for it, often with a Java applet for the console, and it usually lives on a locked-down management network you can only reach through a jump host.

Baseboard puts all of that in one app. Add your IPMI, IMM2, iDRAC or Supermicro endpoints once and get:

- Sensors, the system event log and FRU inventory, with a dashboard that polls every server in the background
- Power control: on, off, cycle, hard reset and ACPI soft shutdown
- A built-in HTML5 KVM console, without logging in again
- Access to isolated networks through a SOCKS5 proxy or an SSH jump tunnel it sets up for you
- Credentials encrypted at rest

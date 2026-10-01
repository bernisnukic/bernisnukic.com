---
title: ShareFiles
tagline: A tiny CLI that uploads a file to Cloudflare R2 and copies a share link to your clipboard.
kind: app
platform: macOS, Linux
year: 2025
date: '2025-12-21'
status: Open source
order: 8
accent: '#f59e0b'
terminal:
  - $ share ./report.pdf
  - UPLOAD [==========] 100.0%  2.4 MB
  - Copied to clipboard.
  - https://cdn.example.com/report.pdf
stack: [Bash, AWS Signature V4, Cloudflare R2]
links:
  - label: View on GitHub
    href: https://github.com/bernisnukic/sharefiles
---

`aws s3 cp` and `rclone` can upload a file, but for "upload this, give me a public link, put it on my clipboard" they're heavy: one is a 100 MB Python install, the other a big general-purpose tool.

ShareFiles is a single Bash script that needs nothing beyond what macOS and most Linux distributions already ship. It signs its own requests with AWS Signature V4, switches to multipart upload for large files, shows a progress bar with speed and time left, and retries when the network hiccups. It's tuned for Cloudflare R2 but works with any S3-compatible storage.

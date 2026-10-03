// Recently shipped, newest first. Dates are when each thing went out: a release, a merge or a
// first version.
export const timeline = [
  {
    date: '2026-10',
    title: 'Shutterback',
    text: 'A menu bar app that copies photos and videos off my camera, then gives the camera back.',
    href: '/projects/shutterback',
  },
  {
    date: '2026-09',
    title: 'FadeHost × Domain Connect',
    text: "FadeHost's templates were merged into the Domain Connect protocol, so supporting DNS providers can point a domain at a Minecraft server in one step.",
    href: 'https://github.com/Domain-Connect/Templates/pull/1808',
  },
  {
    date: '2026-08',
    title: 'TotoNote 1.24',
    text: 'Local-first world-building notes for macOS, Windows and Linux.',
    href: '/projects/totonote',
  },
  {
    date: '2026-06',
    title: 'Airprowl 1.0',
    text: 'A Bluetooth, WiFi and Sub-GHz scanner for the Linux terminal, written in Rust.',
    href: '/projects/airprowl',
  },
  {
    date: '2026-05',
    title: 'Baseboard',
    text: 'One desktop app for every server BMC: sensors, power and a KVM console.',
    href: '/projects/baseboard',
  },
  {
    date: '2026-03',
    title: 'EditClips AI tools',
    text: 'Server-side processing for the heavy AI tools, running on a GPU rig I maintain.',
    href: '/projects/editclips',
  },
  {
    date: '2025-12',
    title: 'ShareFiles',
    text: 'Upload a file to Cloudflare R2 and get a share link, from one Bash script.',
    href: '/projects/sharefiles',
  },
]

export function formatMonth(value) {
  const [year, month] = value.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

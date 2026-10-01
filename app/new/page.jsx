import { permanentRedirect } from 'next/navigation'

// /new was a placeholder; the page it was reserved for is /now.
export default function Page() {
  permanentRedirect('/now')
}

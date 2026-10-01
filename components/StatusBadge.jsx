export default function StatusBadge({ status }) {
  if (status.toLowerCase() === 'new') {
    return (
      <span className="badge-new rounded-full px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wider">
        New
      </span>
    )
  }

  return (
    <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[11px] text-zinc-400">{status}</span>
  )
}

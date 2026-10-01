export default function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p> : null}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
      {children ? <div className="mt-4 text-lg leading-8 text-zinc-300">{children}</div> : null}
    </header>
  )
}

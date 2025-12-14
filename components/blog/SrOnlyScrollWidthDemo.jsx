function CodeBlock({ children }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-950 p-4 text-sm text-gray-100">
      <code>{children}</code>
    </pre>
  )
}

function buildSrcDoc({ fixed }) {
  const thClass = fixed ? 'w0 th relative' : 'w0 th'
  const enableHighlight = fixed ? 'false' : 'true'

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>sr-only overflow demo</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0;
        background: #090a0f;
        color: #e5e7eb;
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      }
      .wrap { padding: 14px; }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: #e5e7eb;
        background: rgba(24, 24, 27, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 6px 10px;
        border-radius: 999px;
      }
      .bad { background: rgba(127, 29, 29, 0.35); border-color: rgba(239, 68, 68, 0.35); }
      .good { background: rgba(6, 78, 59, 0.35); border-color: rgba(52, 211, 153, 0.35); }

      .scroller { margin-top: 10px; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 10px; overflow-x: auto; background: rgba(24, 24, 27, 0.45); }
      table { border-collapse: collapse; width: 840px; }
      th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.08); white-space: nowrap; font-size: 14px; color: #e5e7eb; }
      th { font-weight: 600; color: #f4f4f5; }

      .relative { position: relative; }
      .w0 { width: 0; }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

      .leaky { right: -90px; top: 10px; }

      button {
        background: rgba(99, 102, 241, 0.14);
        border: 1px solid rgba(99, 102, 241, 0.35);
        color: #e5e7eb;
        padding: 6px 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div>
        <span id="badge" class="badge">Measuring…</span>
      </div>

      <div class="scroller" aria-label="Table scroller">
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Status</th>
              <th>Registered</th>
              <th class="${thClass}">
                <span class="sr-only leaky">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pro</td>
              <td>Active</td>
              <td>Dec 9, 2025</td>
              <td class="w0"><button type="button">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <script>
      const ENABLE_HIGHLIGHT = ${enableHighlight}

      function updateBadge() {
        const sw = document.documentElement.scrollWidth
        const cw = document.documentElement.clientWidth
        const overflow = Math.max(0, sw - cw)

        const badge = document.getElementById('badge')
        badge.textContent = overflow > 0
          ? ('Window overflow: YES (' + overflow + 'px)')
          : 'Window overflow: NO'
        badge.className = 'badge ' + (overflow > 0 ? 'bad' : 'good')
      }

      function clearHighlight() {
        const prev = document.querySelector('[data-overflow-highlight]')
        if (prev) {
          prev.style.outline = ''
          prev.style.outlineOffset = ''
          prev.removeAttribute('data-overflow-highlight')
        }
      }

      function highlightOverflowElement() {
        clearHighlight()
        const actionsHeader = document.querySelector('thead th:last-child')
        if (!actionsHeader) return

        const scroller = document.querySelector('.scroller')
        if (scroller) scroller.scrollLeft = scroller.scrollWidth

        actionsHeader.setAttribute('data-overflow-highlight', 'true')
        actionsHeader.style.outline = '3px solid red'
        actionsHeader.style.outlineOffset = '2px'
      }

      updateBadge()
      window.addEventListener('resize', updateBadge)

      if (ENABLE_HIGHLIGHT) {
        setTimeout(highlightOverflowElement, 0)
        window.addEventListener('resize', highlightOverflowElement)
      }
    </script>
  </body>
</html>`
}

function DemoCard({ title, description, code, srcDoc }) {
  return (
    <section className="rounded-xl border border-white/10 bg-zinc-900/70 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{description}</p>
      <iframe
        title={title}
        className="mt-4 h-44 w-full rounded-lg border border-white/10 bg-transparent"
        sandbox="allow-scripts"
        srcDoc={srcDoc}
      />
      <CodeBlock>{code}</CodeBlock>
    </section>
  )
}

export default function SrOnlyScrollWidthDemo() {
  const brokenCode = `<TableHeader className="w-0">
  <span className="sr-only">Actions</span>
</TableHeader>`

  const fixedCode = `<TableHeader className="relative w-0">
  <span className="sr-only">Actions</span>
</TableHeader>`

  return (
    <div className="not-prose mt-6">
      <p className="text-zinc-300">
        Both examples have a horizontally scrollable table. The only difference is whether the
        actions header cell is a positioning context.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DemoCard
          title="Broken"
          description="The hidden header text can leak out and inflate document scrollWidth."
          code={brokenCode}
          srcDoc={buildSrcDoc({ fixed: false })}
        />
        <DemoCard
          title="Fixed"
          description="Adding relative contains the positioned element so only the table scrolls."
          code={fixedCode}
          srcDoc={buildSrcDoc({ fixed: true })}
        />
      </div>
    </div>
  )
}

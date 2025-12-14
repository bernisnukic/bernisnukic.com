export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900" />
      <div className="absolute inset-0 [animation:pulse_10s_cubic-bezier(.4,0,.6,1)_infinite] bg-gradient-to-tr from-rose-950/30 via-transparent to-indigo-950/30" />
      <div
        className="absolute inset-0 [animation:pulse_10s_cubic-bezier(.4,0,.6,1)_infinite] bg-gradient-to-bl from-transparent via-rose-900/10 to-transparent"
        style={{ animationDelay: '2s' }}
      />
    </div>
  )
}


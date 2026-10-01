import LoopingVideo from './LoopingVideo'

// A project's picture: a looping muted video, a screenshot, or a little terminal transcript.
// `natural` shows images and video at their own aspect ratio instead of filling a fixed box.
export default function ProjectMedia({ project, className = '', eager = false, natural = false }) {
  const fill = natural ? 'block h-auto w-full' : 'h-full w-full object-cover object-top'

  if (project.video) {
    return (
      <LoopingVideo
        className={`${fill} ${className}`}
        src={project.video}
        poster={project.image}
        label={project.imageAlt}
      />
    )
  }

  if (project.image) {
    return (
      <img
        className={`${fill} ${className}`}
        src={project.image}
        alt={project.imageAlt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    )
  }

  if (project.terminal.length > 0) {
    return (
      <div
        className={`flex h-full w-full flex-col justify-center bg-[#0b0d12] px-5 py-4 font-mono text-[11.5px] leading-6 sm:text-[12.5px] ${className}`}
        aria-label={`${project.title} in a terminal`}
      >
        <div className="mb-3 flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        {project.terminal.map((line, index) => (
          <div
            key={index}
            className={[
              'truncate',
              line.startsWith('$') ? 'text-white' : line.startsWith('http') ? 'text-amber-300' : 'text-zinc-400',
            ].join(' ')}
          >
            {line}
          </div>
        ))}
      </div>
    )
  }

  return null
}

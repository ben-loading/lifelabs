'use client'

export function DNAHelix() {
  return (
    <svg
      className="w-full h-full opacity-20"
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="animate-[spin_60s_linear_infinite]" style={{ transformOrigin: '200px 300px' }}>
        {[...Array(12)].map((_, i) => {
          const y = 50 + i * 45
          const phase = (i * Math.PI) / 6
          const x1 = 150 + Math.sin(phase) * 80
          const x2 = 250 - Math.sin(phase) * 80

          return (
            <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              <circle
                cx={x1}
                cy={y}
                r="4"
                className="fill-secondary"
                opacity={0.6 + Math.sin(phase) * 0.4}
              />
              <circle
                cx={x2}
                cy={y}
                r="4"
                className="fill-accent"
                opacity={0.6 - Math.sin(phase) * 0.4}
              />
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                className="stroke-primary"
                strokeWidth="1"
                opacity={0.3}
              />
            </g>
          )
        })}
        <path
          d={[...Array(120)].map((_, i) => {
            const t = i / 10
            const x = 150 + Math.sin(t) * 80
            const y = t * 45 + 50
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
          }).join(' ')}
          className="stroke-secondary"
          strokeWidth="2"
          fill="none"
          opacity={0.2}
        />
        <path
          d={[...Array(120)].map((_, i) => {
            const t = i / 10
            const x = 250 - Math.sin(t) * 80
            const y = t * 45 + 50
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
          }).join(' ')}
          className="stroke-accent"
          strokeWidth="2"
          fill="none"
          opacity={0.2}
        />
      </g>
    </svg>
  )
}

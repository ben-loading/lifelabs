'use client'

// Deterministic "random" from index for SSR/hydration safety
function seeded(i: number, scale: number, offset: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453
  return (x - Math.floor(x)) * scale + offset
}

export function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: seeded(i, 3, 1),
    x: seeded(i + 1, 100, 0),
    y: seeded(i + 2, 100, 0),
    duration: seeded(i + 3, 20, 10),
    delay: seeded(i + 4, 5, 0),
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-30 animate-[float_linear_infinite]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: 'oklch(0.55 0.10 45)',
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

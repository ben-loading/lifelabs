'use client'

import { useEffect, useState } from 'react'

export function CodeGlitch() {
  const [codes, setCodes] = useState(['0x7F', '0xA3', '0x5C'])

  useEffect(() => {
    const interval = setInterval(() => {
      setCodes([
        '0x' + Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0'),
        '0x' + Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0'),
        '0x' + Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0'),
      ])
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center gap-6 text-muted-foreground/30 font-mono">
      {codes.map((code, i) => (
        <span
          key={`${code}-${i}`}
          className="text-sm transition-opacity duration-300 opacity-40"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {code}
        </span>
      ))}
    </div>
  )
}

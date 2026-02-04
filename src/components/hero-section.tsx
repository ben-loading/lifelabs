'use client'

import { DNAHelix } from '@/components/dna-helix'
import { MysticalSymbols } from '@/components/mystical-symbols'
import { ParticleField } from '@/components/particle-field'
import { TextDecode } from '@/components/text-decode'
import { CodeGlitch } from '@/components/code-glitch'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticleField />
        <MysticalSymbols />

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-96 opacity-30">
          <DNAHelix />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-96 opacity-30 scale-x-[-1]">
          <DNAHelix />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <svg viewBox="0 0 600 600" className="w-full h-full opacity-5 animate-[spin_120s_linear_infinite]">
            <circle cx="300" cy="300" r="250" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary" strokeDasharray="10 5" />
            <circle cx="300" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * Math.PI * 2) / 8
              const x1 = 300 + Math.cos(angle) * 150
              const y1 = 300 + Math.sin(angle) * 150
              const x2 = 300 + Math.cos(angle) * 250
              const y2 = 300 + Math.sin(angle) * 250
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" className="text-primary" />
            })}
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="text-4xl font-serif text-muted-foreground opacity-40">⚛</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            <TextDecode
              text="你的人生"
              delay={200}
              className="block mb-2 text-2xl md:text-3xl font-normal text-muted-foreground font-serif"
              as="span"
            />
            <span className="relative inline-block">
              <TextDecode
                text="值得一场"
                delay={800}
                className="block"
                as="span"
              />
              <TextDecode
                text="深度实验"
                delay={1400}
                className="block mt-3 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_8s_ease_infinite]"
                as="span"
              >
                <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_8s_ease_infinite]" style={{ backgroundImage: 'linear-gradient(90deg, oklch(0.55 0.10 45), oklch(0.62 0.15 30), oklch(0.55 0.10 45))' }}>
                  深度实验
                </span>
              </TextDecode>
            </span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-4">
            <TextDecode
              text="八字 · 紫微 · 星盘 · 生命编码"
              delay={2000}
              className="text-xl md:text-2xl text-foreground/80 font-serif leading-relaxed"
              as="p"
            />
            <TextDecode
              text="在 Lifelabs，每一次探索都是一场科学实验。用系统化的方法，重新认识你的性格、天赋和潜能。"
              delay={2400}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
              as="p"
            />
          </div>
        </div>

        <div className="pt-12 flex justify-center items-center gap-8">
          <div className="flex items-center gap-3 opacity-40">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-secondary" />
            <span className="text-xl font-serif">☯</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-secondary" />
          </div>
        </div>

        <div className="pt-8">
          <CodeGlitch />
        </div>
      </div>
    </section>
  )
}

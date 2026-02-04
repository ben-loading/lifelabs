'use client'

import { useLocale } from '@/contexts/locale-context'

export function PhilosophySection() {
  const { t } = useLocale()

  return (
    <section className="py-24 px-4 bg-muted/30 relative overflow-hidden" id="philosophy">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.45 0.02 270) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block text-5xl font-serif text-muted-foreground/40 mb-2">☯</div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="font-serif">{t.philosophy.title}</span>
            <span className="block mt-3 text-3xl md:text-4xl text-secondary">{t.philosophy.subtitle}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {t.philosophy.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-8 rounded-lg bg-card border border-border hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10 group">
            <div className="w-20 h-20 mx-auto rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform relative">
              <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping" style={{ animationDuration: '3s' }} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-12 h-12 text-secondary relative z-10"
                fill="currentColor"
              >
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <rect x="48" y="15" width="4" height="12" rx="2" fill="currentColor" />
                    <rect x="48" y="28" width="4" height="8" rx="2" fill="currentColor" opacity="0.6" />
                  </g>
                ))}
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-serif">{t.philosophy.card1Title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t.philosophy.card1Desc}
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group">
            <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-12 h-12 text-accent relative z-10"
                fill="none"
                stroke="currentColor"
              >
                <path d="M50,15 L75,30 L75,60 L50,75 L25,60 L25,30 Z" strokeWidth="2.5" opacity="0.4" />
                <circle cx="50" cy="50" r="18" strokeWidth="2.5" opacity="0.6" />
                <line x1="50" y1="15" x2="50" y2="32" strokeWidth="2" />
                <line x1="75" y1="30" x2="64" y2="40" strokeWidth="2" />
                <line x1="75" y1="60" x2="64" y2="55" strokeWidth="2" />
                <line x1="50" y1="75" x2="50" y2="68" strokeWidth="2" />
                <line x1="25" y1="60" x2="36" y2="55" strokeWidth="2" />
                <line x1="25" y1="30" x2="36" y2="40" strokeWidth="2" />
                <circle cx="50" cy="50" r="3" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-serif">{t.philosophy.card2Title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t.philosophy.card2Desc}
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-12 h-12 text-primary relative z-10"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M50,75 Q40,70 45,60 T50,45 Q55,35 50,25 T45,10"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <circle cx="50" cy="75" r="3" fill="currentColor" opacity="0.3" />
                <circle cx="45" cy="60" r="4" fill="currentColor" opacity="0.5" />
                <circle cx="50" cy="45" r="5" fill="currentColor" opacity="0.7" />
                <circle cx="50" cy="25" r="6" fill="currentColor" opacity="0.9" />
                <circle cx="45" cy="10" r="7" fill="currentColor" />
                <circle cx="45" cy="10" r="12" strokeWidth="2" opacity="0.4" />
                <circle cx="45" cy="10" r="18" strokeWidth="1.5" opacity="0.2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-serif">{t.philosophy.card3Title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t.philosophy.card3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

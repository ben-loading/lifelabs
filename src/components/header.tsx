'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocale } from '@/contexts/locale-context'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative group">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#headerGradient)" strokeWidth="2" opacity="0.3" />
                <path
                  d="M50,20 Q60,35 50,50 T50,80"
                  stroke="url(#headerGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  className="group-hover:opacity-80 transition-opacity"
                />
                <path
                  d="M50,20 Q40,35 50,50 T50,80"
                  stroke="url(#headerGradient)"
                  strokeWidth="2.5"
                  fill="none"
                  opacity={0.6}
                  className="group-hover:opacity-80 transition-opacity"
                />
                <circle cx="50" cy="20" r="3" fill="url(#headerGradient)" />
                <circle cx="50" cy="50" r="4" fill="url(#headerGradient)" />
                <circle cx="50" cy="80" r="3" fill="url(#headerGradient)" />
                <defs>
                  <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.55 0.10 45)" />
                    <stop offset="100%" stopColor="oklch(0.62 0.15 30)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide font-serif">Lifelabs</span>
              <span className="text-xs text-muted-foreground tracking-wider -mt-0.5">{t.header.subtitle}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.navPhilosophy}
            </a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.navProducts}
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.header.navAbout}
            </a>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <button
                type="button"
                onClick={() => setLocale('zh-Hans')}
                className={`px-2 py-0.5 rounded transition-colors ${locale === 'zh-Hans' ? 'text-foreground font-medium bg-muted' : 'hover:text-foreground'}`}
              >
                简
              </button>
              <span className="opacity-50">|</span>
              <button
                type="button"
                onClick={() => setLocale('zh-Hant')}
                className={`px-2 py-0.5 rounded transition-colors ${locale === 'zh-Hant' ? 'text-foreground font-medium bg-muted' : 'hover:text-foreground'}`}
              >
                繁
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex md:hidden items-center gap-1 text-sm text-muted-foreground">
              <button
                type="button"
                onClick={() => setLocale('zh-Hans')}
                className={`px-2 py-0.5 rounded ${locale === 'zh-Hans' ? 'text-foreground font-medium bg-muted' : ''}`}
              >
                简
              </button>
              <button
                type="button"
                onClick={() => setLocale('zh-Hant')}
                className={`px-2 py-0.5 rounded ${locale === 'zh-Hant' ? 'text-foreground font-medium bg-muted' : ''}`}
              >
                繁
              </button>
            </div>
            <button
              type="button"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3">
            <a
              href="#philosophy"
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.navPhilosophy}
            </a>
            <a
              href="#products"
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.navProducts}
            </a>
            <a
              href="#about"
              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.navAbout}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

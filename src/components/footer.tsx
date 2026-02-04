export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" id="about">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#footerGradient)" strokeWidth="2" opacity="0.3" />
                  <path
                    d="M50,20 Q60,35 50,50 T50,80"
                    stroke="url(#footerGradient)"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M50,20 Q40,35 50,50 T50,80"
                    stroke="url(#footerGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    opacity={0.6}
                  />
                  <circle cx="50" cy="20" r="3" fill="url(#footerGradient)" />
                  <circle cx="50" cy="50" r="4" fill="url(#footerGradient)" />
                  <circle cx="50" cy="80" r="3" fill="url(#footerGradient)" />
                  <defs>
                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="oklch(0.55 0.10 45)" />
                      <stop offset="100%" stopColor="oklch(0.62 0.15 30)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wide font-serif">Lifelabs</span>
                <span className="text-xs text-muted-foreground tracking-wider">人生实验室</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              探索生命的编码，提升自我的幸福感
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">我们的理念</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#philosophy" className="hover:text-foreground transition-colors">
                  生命工程学
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">加入社区</h3>
            <a
              href="https://discord.gg/qDHz3E6NYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Discord
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 Lifelabs 人生实验室. 探索自我，而非迷信命运。</p>
        </div>
      </div>
    </footer>
  )
}

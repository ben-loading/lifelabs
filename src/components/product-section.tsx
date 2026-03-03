'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/contexts/locale-context'

export function ProductSection() {
  const { t } = useLocale()

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="products">
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="secondary" className="text-sm px-5 py-1.5 font-serif">
            {t.product.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="block text-3xl font-serif text-muted-foreground mb-2">{t.product.title}</span>
            {t.product.subtitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {t.product.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="md:col-span-2 border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 via-background to-accent/5 relative overflow-hidden group hover:border-secondary/50 transition-all hover:shadow-2xl hover:shadow-secondary/20">
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,0 L100,0 L0,100 Z" fill="currentColor" className="text-secondary" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,0 L100,0 L0,100 Z" fill="currentColor" className="text-accent" />
              </svg>
            </div>

            <div className="absolute top-6 right-6">
              <Badge className="bg-accent text-accent-foreground animate-pulse shadow-lg">{t.product.mainBadge}</Badge>
            </div>
            <CardHeader>
              <div className="mb-3 text-4xl font-serif text-secondary/40">卍</div>
              <CardTitle className="text-3xl md:text-4xl font-serif group-hover:text-secondary transition-colors">{t.product.mainTitle}</CardTitle>
              <CardDescription className="text-base text-foreground/70">
                {t.product.mainDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {t.product.mainIntro}
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Badge variant="secondary" className="text-xs">{t.product.mainBadgeAi}</Badge>
                  <Badge variant="secondary" className="text-xs">{t.product.mainBadge1v1}</Badge>
                  <Badge variant="secondary" className="text-xs">{t.product.mainBadgeReport}</Badge>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.product.features.map((item) => (
                  <div key={item.title} className="flex gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 bg-secondary hover:bg-secondary/90 group/btn"
                onClick={() => window.open('https://lifecode.lifelabs.fun', '_blank')}
              >
                {t.product.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-secondary/30 transition-all hover:shadow-lg group/card bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="w-fit border-secondary/30 text-secondary">
                  {t.product.planned}
                </Badge>
                <span className="text-3xl opacity-30 font-serif group-hover/card:opacity-50 transition-opacity">✦</span>
              </div>
              <CardTitle className="text-2xl font-serif group-hover/card:text-secondary transition-colors">{t.product.astrologyTitle}</CardTitle>
              <CardDescription className="text-base">
                {t.product.astrologyDesc}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.product.astrologyIntro}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent/30 transition-all hover:shadow-lg group/card bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="w-fit border-accent/30 text-accent">
                  {t.product.planned}
                </Badge>
                <span className="text-3xl opacity-30 font-serif group-hover/card:opacity-50 transition-opacity">❋</span>
              </div>
              <CardTitle className="text-2xl font-serif group-hover/card:text-accent transition-colors">{t.product.tarotTitle}</CardTitle>
              <CardDescription className="text-base">
                {t.product.tarotDesc}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.product.tarotIntro}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">{t.product.moreTools}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">{t.product.toolZhouyi}</Badge>
            <Badge variant="secondary">{t.product.toolNumber}</Badge>
            <Badge variant="secondary">{t.product.toolDream}</Badge>
            <Badge variant="secondary">{t.product.toolFace}</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

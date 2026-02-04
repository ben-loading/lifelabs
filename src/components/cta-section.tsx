'use client'

import { TextDecode } from '@/components/text-decode'
import { CodeGlitch } from '@/components/code-glitch'

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-secondary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
          <TextDecode
            text="准备好探索"
            delay={0}
            className="block"
            as="span"
          />
          <TextDecode
            text="真实的自己了吗？"
            delay={500}
            as="span"
          >
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              真实的自己了吗？
            </span>
          </TextDecode>
        </h2>
        <TextDecode
          text="加入数万用户，开始你的生命工程学之旅。不需要相信命运，只需要相信探索的力量。"
          delay={1000}
          className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
          as="p"
        />

        <div className="pt-8 flex justify-center items-center gap-6">
          <div className="flex items-center gap-4 opacity-40">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <CodeGlitch />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-accent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

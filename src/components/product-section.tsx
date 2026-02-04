'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

export function ProductSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="products">
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="secondary" className="text-sm px-5 py-1.5 font-serif">
            人生系列产品
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="block text-3xl font-serif text-muted-foreground mb-2">多维度探索</span>
            开启你的探索之旅
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            从多个维度解读你的生命编码，每个产品都是一次深度的自我探索
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
              <Badge className="bg-accent text-accent-foreground animate-pulse shadow-lg">即将推出</Badge>
            </div>
            <CardHeader>
              <div className="mb-3 text-4xl font-serif text-secondary/40">卍</div>
              <CardTitle className="text-3xl md:text-4xl font-serif group-hover:text-secondary transition-colors">人生解码</CardTitle>
              <CardDescription className="text-base text-foreground/70">
                基于八字与紫微斗数的深度分析系统
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  通过你的出生时间，结合八字与紫微斗数的古老智慧，运用AI深度推理生成个性化报告，
                  配合真人1v1专业解答，为你提供全方位的人生洞察。
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Badge variant="secondary" className="text-xs">AI深度推理</Badge>
                  <Badge variant="secondary" className="text-xs">真人1v1解答</Badge>
                  <Badge variant="secondary" className="text-xs">个性化报告</Badge>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: '人生分析', desc: '深度解读性格特质与天赋潜能' },
                  { title: '未来运势', desc: '洞察人生阶段与发展趋势' },
                  { title: '仕途探索', desc: '发现最适合的职业方向' },
                  { title: '财富之路', desc: '理解财运格局与积累方式' },
                  { title: '爱情姻缘', desc: '探索情感模式与伴侣契合' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-secondary hover:bg-secondary/90 group/btn">
                加入了解
                <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-secondary/30 transition-all hover:shadow-lg group/card bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="w-fit border-secondary/30 text-secondary">
                  规划中
                </Badge>
                <span className="text-3xl opacity-30 font-serif group-hover/card:opacity-50 transition-opacity">✦</span>
              </div>
              <CardTitle className="text-2xl font-serif group-hover/card:text-secondary transition-colors">星座星盘解析</CardTitle>
              <CardDescription className="text-base">
                基于西方占星学的个性与命运探索
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                通过太阳、月亮、上升星座等多维度分析，
                帮助你从另一个角度认识自己。
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent/30 transition-all hover:shadow-lg group/card bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="w-fit border-accent/30 text-accent">
                  规划中
                </Badge>
                <span className="text-3xl opacity-30 font-serif group-hover/card:opacity-50 transition-opacity">❋</span>
              </div>
              <CardTitle className="text-2xl font-serif group-hover/card:text-accent transition-colors">塔罗占卜</CardTitle>
              <CardDescription className="text-base">
                专注于当下困惑的心灵指引
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                在人生的十字路口，通过塔罗获得启发，
                帮助你理清思路，做出更好的决定。
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">更多探索工具正在开发中</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">周易占卜</Badge>
            <Badge variant="secondary">生命数字</Badge>
            <Badge variant="secondary">梦境解析</Badge>
            <Badge variant="secondary">手相面相</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

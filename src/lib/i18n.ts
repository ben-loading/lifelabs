export type Locale = 'zh-Hans' | 'zh-Hant'

export interface ProductFeature {
  title: string
  desc: string
}

export interface Translations {
  header: {
    subtitle: string
    navPhilosophy: string
    navProducts: string
    navAbout: string
  }
  hero: {
    line1: string
    line2: string
    line3: string
    line4: string
    tagline: string
    intro: string
  }
  philosophy: {
    title: string
    subtitle: string
    desc: string
    card1Title: string
    card1Desc: string
    card2Title: string
    card2Desc: string
    card3Title: string
    card3Desc: string
  }
  product: {
    badge: string
    title: string
    subtitle: string
    desc: string
    mainBadge: string
    mainTitle: string
    mainDesc: string
    mainIntro: string
    mainBadgeAi: string
    mainBadge1v1: string
    mainBadgeReport: string
    features: ProductFeature[]
    cta: string
    planned: string
    astrologyTitle: string
    astrologyDesc: string
    astrologyIntro: string
    tarotTitle: string
    tarotDesc: string
    tarotIntro: string
    moreTools: string
    toolZhouyi: string
    toolNumber: string
    toolDream: string
    toolFace: string
  }
  cta: {
    line1: string
    line2: string
    desc: string
  }
  footer: {
    subtitle: string
    tagline: string
    ourPhilosophy: string
    philosophyLink: string
    joinCommunity: string
    discord: string
    copyright: string
  }
}

const translations: Record<Locale, Translations> = {
  'zh-Hans': {
    header: {
      subtitle: '人生实验室',
      navPhilosophy: '理念',
      navProducts: '产品',
      navAbout: '关于',
    },
    hero: {
      line1: '你的人生',
      line2: '值得一场',
      line3: '深度实验',
      line4: '深度实验',
      tagline: '八字 · 紫微 · 星盘 · 生命编码',
      intro: '在 Lifelabs，每一次探索都是一场科学实验。用系统化的方法，重新认识你的性格、天赋和潜能。',
    },
    philosophy: {
      title: '生命工程学',
      subtitle: '不是迷信，而是探索',
      desc: '每个人都有独特的生命编码。我们相信，通过系统的方法解读这些编码，能够帮助你更好地理解自己，规划人生。',
      card1Title: '古老智慧',
      card1Desc: '八字、紫微斗数、星盘等传统体系，蕴含着千年的观察与智慧',
      card2Title: '现代解读',
      card2Desc: '运用系统方法和现代认知科学，将传统智慧转化为实用的自我认知工具',
      card3Title: '个人成长',
      card3Desc: '专注于自我探索和提升，帮助你找到属于自己的人生方向',
    },
    product: {
      badge: '人生系列产品',
      title: '多维度探索',
      subtitle: '开启你的探索之旅',
      desc: '从多个维度解读你的生命编码，每个产品都是一次深度的自我探索',
      mainBadge: '即将推出',
      mainTitle: '人生解码',
      mainDesc: '基于八字与紫微斗数的深度分析系统',
      mainIntro: '通过你的出生时间，结合八字与紫微斗数的古老智慧，运用AI深度推理生成个性化报告，配合真人1v1专业解答，为你提供全方位的人生洞察。',
      mainBadgeAi: 'AI深度推理',
      mainBadge1v1: '真人1v1解答',
      mainBadgeReport: '个性化报告',
      features: [
        { title: '人生分析', desc: '深度解读性格特质与天赋潜能' },
        { title: '未来运势', desc: '洞察人生阶段与发展趋势' },
        { title: '仕途探索', desc: '发现最适合的职业方向' },
        { title: '财富之路', desc: '理解财运格局与积累方式' },
        { title: '爱情姻缘', desc: '探索情感模式与伴侣契合' },
      ],
      cta: '加入了解',
      planned: '规划中',
      astrologyTitle: '星座星盘解析',
      astrologyDesc: '基于西方占星学的个性与命运探索',
      astrologyIntro: '通过太阳、月亮、上升星座等多维度分析，帮助你从另一个角度认识自己。',
      tarotTitle: '塔罗占卜',
      tarotDesc: '专注于当下困惑的心灵指引',
      tarotIntro: '在人生的十字路口，通过塔罗获得启发，帮助你理清思路，做出更好的决定。',
      moreTools: '更多探索工具正在开发中',
      toolZhouyi: '周易占卜',
      toolNumber: '生命数字',
      toolDream: '梦境解析',
      toolFace: '手相面相',
    },
    cta: {
      line1: '准备好探索',
      line2: '真实的自己了吗？',
      desc: '加入数万用户，开始你的生命工程学之旅。不需要相信命运，只需要相信探索的力量。',
    },
    footer: {
      subtitle: '人生实验室',
      tagline: '探索生命的编码，提升自我的幸福感',
      ourPhilosophy: '我们的理念',
      philosophyLink: '生命工程学',
      joinCommunity: '加入社区',
      discord: 'Discord',
      copyright: '© 2026 Lifelabs 人生实验室. 探索自我，而非迷信命运。',
    },
  },
  'zh-Hant': {
    header: {
      subtitle: '人生實驗室',
      navPhilosophy: '理念',
      navProducts: '產品',
      navAbout: '關於',
    },
    hero: {
      line1: '你的人生',
      line2: '值得一場',
      line3: '深度實驗',
      line4: '深度實驗',
      tagline: '八字 · 紫微 · 星盤 · 生命編碼',
      intro: '在 Lifelabs，每一次探索都是一場科學實驗。用系統化的方法，重新認識你的性格、天賦和潛能。',
    },
    philosophy: {
      title: '生命工程學',
      subtitle: '不是迷信，而是探索',
      desc: '每個人都有獨特的生命編碼。我們相信，透過系統的方法解讀這些編碼，能夠幫助你更好地理解自己，規劃人生。',
      card1Title: '古老智慧',
      card1Desc: '八字、紫微斗數、星盤等傳統體系，蘊含著千年的觀察與智慧',
      card2Title: '現代解讀',
      card2Desc: '運用系統方法和現代認知科學，將傳統智慧轉化為實用的自我認知工具',
      card3Title: '個人成長',
      card3Desc: '專注於自我探索和提升，幫助你找到屬於自己的人生方向',
    },
    product: {
      badge: '人生系列產品',
      title: '多維度探索',
      subtitle: '開啟你的探索之旅',
      desc: '從多個維度解讀你的生命編碼，每個產品都是一次深度的自我探索',
      mainBadge: '即將推出',
      mainTitle: '人生解碼',
      mainDesc: '基於八字與紫微斗數的深度分析系統',
      mainIntro: '透過你的出生時間，結合八字與紫微斗數的古老智慧，運用AI深度推理生成個人化報告，配合真人1v1專業解答，為你提供全方位的人生洞察。',
      mainBadgeAi: 'AI深度推理',
      mainBadge1v1: '真人1v1解答',
      mainBadgeReport: '個人化報告',
      features: [
        { title: '人生分析', desc: '深度解讀性格特質與天賦潛能' },
        { title: '未來運勢', desc: '洞察人生階段與發展趨勢' },
        { title: '仕途探索', desc: '發現最適合的職業方向' },
        { title: '財富之路', desc: '理解財運格局與積累方式' },
        { title: '愛情姻緣', desc: '探索情感模式與伴侶契合' },
      ],
      cta: '加入了解',
      planned: '規劃中',
      astrologyTitle: '星座星盤解析',
      astrologyDesc: '基於西方占星學的個性與命運探索',
      astrologyIntro: '透過太陽、月亮、上升星座等多維度分析，幫助你從另一個角度認識自己。',
      tarotTitle: '塔羅占卜',
      tarotDesc: '專注於當下困惑的心靈指引',
      tarotIntro: '在人生的十字路口，透過塔羅獲得啟發，幫助你理清思路，做出更好的決定。',
      moreTools: '更多探索工具正在開發中',
      toolZhouyi: '周易占卜',
      toolNumber: '生命數字',
      toolDream: '夢境解析',
      toolFace: '手相面相',
    },
    cta: {
      line1: '準備好探索',
      line2: '真實的自己了嗎？',
      desc: '加入數萬用戶，開始你的生命工程學之旅。不需要相信命運，只需要相信探索的力量。',
    },
    footer: {
      subtitle: '人生實驗室',
      tagline: '探索生命的編碼，提升自我的幸福感',
      ourPhilosophy: '我們的理念',
      philosophyLink: '生命工程學',
      joinCommunity: '加入社區',
      discord: 'Discord',
      copyright: '© 2026 Lifelabs 人生實驗室. 探索自我，而非迷信命運。',
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations['zh-Hant']
}

export const LOCALE_STORAGE_KEY = 'lifelabs-locale'
export const DEFAULT_LOCALE: Locale = 'zh-Hant'

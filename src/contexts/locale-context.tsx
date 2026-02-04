'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import {
  DEFAULT_LOCALE,
  getTranslations,
  LOCALE_STORAGE_KEY,
  type Locale,
  type Translations,
} from '@/lib/i18n'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (stored === 'zh-Hans' || stored === 'zh-Hant') return stored
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
      if (typeof document !== 'undefined') document.documentElement.lang = next
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') document.documentElement.lang = locale
  }, [mounted, locale])

  const t = getTranslations(mounted ? locale : DEFAULT_LOCALE)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used within LocaleProvider')
  return value
}

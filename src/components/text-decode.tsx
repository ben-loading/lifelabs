'use client'

import React from "react"
import { useEffect, useState } from 'react'

interface TextDecodeProps {
  text: string
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  children?: React.ReactNode
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?一二三四五六七八九十甲乙丙丁'

export function TextDecode({ text, delay = 0, className = '', as: Component = 'span', children }: TextDecodeProps) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let interval: ReturnType<typeof setInterval>
    let iteration = 0

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index]
              }
              if (char === ' ') return ' '
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        })

        iteration += 1 / 3

        if (iteration >= text.length) {
          clearInterval(interval)
          setDisplayText(text)
        }
      }, 30)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, delay])

  return <Component className={className}>{children ?? displayText}</Component>
}

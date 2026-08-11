import type { CSSProperties } from 'react'

export function staggerDelay(index: number, baseMs = 80): CSSProperties {
  return { animationDelay: `${index * baseMs}ms` }
}

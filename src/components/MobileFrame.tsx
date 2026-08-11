import { ReactNode } from 'react'

interface MobileFrameProps {
  children: ReactNode
  compact?: boolean
}

export default function MobileFrame({ children, compact = false }: MobileFrameProps) {
  if (compact) {
    return (
      <div className="relative w-[320px]">
        <div className="pointer-events-none absolute -inset-[8px] rounded-[2.5rem] border-[8px] border-ink bg-ink shadow-2xl shadow-ink/30" />
        <div className="absolute left-1/2 top-0.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className="relative z-10 h-[640px] overflow-x-hidden overflow-y-auto rounded-[2rem] bg-cream">
          {children}
        </div>
        <div className="absolute bottom-2 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-ink/20" />
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-gradient-to-br from-cream-dark via-cream to-sage-light/40 lg:flex lg:items-center lg:justify-center lg:p-10">
      <div className="relative mx-auto w-full lg:w-[390px]">
        <div className="pointer-events-none absolute -inset-[10px] hidden rounded-[3rem] border-[10px] border-ink bg-ink shadow-2xl shadow-ink/25 lg:block" />
        <div className="absolute left-1/2 top-1 z-20 hidden h-7 w-28 -translate-x-1/2 rounded-full bg-ink lg:block" />
        <div className="relative z-10 min-h-dvh overflow-x-hidden bg-cream lg:h-[844px] lg:min-h-0 lg:overflow-y-auto lg:rounded-[2.35rem] lg:shadow-inner">
          {children}
        </div>
        <div className="absolute bottom-3 left-1/2 z-20 hidden h-1 w-32 -translate-x-1/2 rounded-full bg-ink/25 lg:block" />
        <p className="absolute -bottom-10 left-0 right-0 hidden text-center text-xs font-medium text-ink-muted lg:block">
          Member experience · mobile-first
        </p>
      </div>
    </div>
  )
}

import { ReactNode } from 'react'
import { mockClass } from '../data/mockClass'

interface CoachLayoutProps {
  children: ReactNode
}

export default function CoachLayout({ children }: CoachLayoutProps) {
  return (
    <div className="min-h-dvh bg-cream">
      <header className="border-b border-cream-dark bg-white px-8 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="text-sm font-medium text-ink-muted">
              {mockClass.gymName}
            </p>
            <h1 className="text-xl font-bold text-ink">Coach Dashboard</h1>
          </div>
          <div className="rounded-full bg-sage-light px-4 py-1.5 text-sm font-medium text-sage-dark">
            Today&apos;s Class
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-8 py-8">{children}</main>
    </div>
  )
}

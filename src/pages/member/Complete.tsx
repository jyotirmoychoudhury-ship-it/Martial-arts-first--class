import { Link, useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import { mockClass } from '../../data/mockClass'
import { isDemoPath } from '../../utils/navigation'

export default function Complete() {
  const { pathname } = useLocation()
  const homePath = isDemoPath(pathname) ? '/demo/member/confirmation' : '/'

  return (
    <MemberLayout showProgress={false}>
      <div className="flex flex-1 flex-col items-center text-center">
        <div className="animate-celebrate mb-6 mt-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-sage text-4xl text-white">
          🎉
        </div>

        <h1 className="animate-fade-up stagger-1 mb-3 text-2xl font-bold leading-tight text-ink">
          You showed up. That matters.
        </h1>
        <p className="animate-fade-up stagger-2 mb-8 max-w-xs text-base leading-relaxed text-ink-muted">
          First class done. Most people never make it this far — you did. Same
          time, same place next week?
        </p>

        <div className="animate-fade-up stagger-3 mb-auto w-full rounded-2xl border border-cream-dark bg-white p-5 text-left">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sage">
            Next class
          </p>
          <p className="text-lg font-bold text-ink">{mockClass.className}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {mockClass.gymName} · Tomorrow at {mockClass.time}
          </p>
          <p className="mt-4 text-sm text-ink-muted">
            Same place, same coach. You already know the way.
          </p>
        </div>

        <div className="animate-fade-up stagger-4 mt-8 flex w-full flex-col gap-3">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-2xl bg-sage px-6 py-4 text-base font-semibold text-white transition-all hover:bg-sage-dark active:scale-[0.98]"
          >
            Keep the momentum — book next class
          </button>
          <Link
            to={homePath}
            className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            {isDemoPath(pathname) ? 'Restart journey' : 'Back to home'}
          </Link>
        </div>
      </div>
    </MemberLayout>
  )
}

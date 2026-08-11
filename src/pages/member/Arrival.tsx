import { useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import ContinueButton from '../../components/ContinueButton'
import { mockClass } from '../../data/mockClass'
import { getNextPath, getPrevPath } from '../../utils/navigation'

export default function Arrival() {
  const { pathname } = useLocation()
  const nextPath = getNextPath(pathname)!
  const prevPath = getPrevPath(pathname)!

  return (
    <MemberLayout step={6} backTo={prevPath}>
      <div className="flex flex-1 flex-col items-center text-center">
        <div className="animate-celebrate mb-6 mt-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-sage-light text-4xl">
          🥋
        </div>

        <h1 className="animate-fade-up stagger-1 mb-3 text-2xl font-bold leading-tight text-ink">
          You&apos;re ready to walk in
        </h1>
        <p className="animate-fade-up stagger-2 mb-8 max-w-xs text-base leading-relaxed text-ink-muted">
          That&apos;s the hard part done — the worrying. Here&apos;s your
          cheat sheet for today.
        </p>

        <div className="animate-fade-up stagger-3 mb-auto w-full rounded-2xl border border-cream-dark bg-white p-5 text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-sage">
            Quick recap
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-sage">✓</span>
              <span>
                <span className="font-medium text-ink">{mockClass.className}</span>
                <span className="text-ink-muted"> at {mockClass.time}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-sage">✓</span>
              <span className="text-ink-muted">
                Floor 1 — Fundamentals mat area
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-sage">✓</span>
              <span className="text-ink-muted">
                Look for Coach {mockClass.coach.split(' ')[0]}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-sage">✓</span>
              <span className="text-ink-muted">Arrive 10 minutes early</span>
            </li>
          </ul>
        </div>

        <p className="animate-fade-up stagger-4 mt-6 text-sm text-ink-muted">
          Nerves are normal. So is showing up anyway — that&apos;s what counts.
        </p>

        <div className="animate-fade-up stagger-4 mt-8 w-full">
          <ContinueButton to={nextPath} label="See you on the mat" />
        </div>
      </div>
    </MemberLayout>
  )
}

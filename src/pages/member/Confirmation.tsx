import { useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import ContinueButton from '../../components/ContinueButton'
import { mockClass } from '../../data/mockClass'
import { getNextPath } from '../../utils/navigation'

export default function Confirmation() {
  const { pathname } = useLocation()
  const nextPath = getNextPath(pathname)!

  return (
    <MemberLayout step={1}>
      <div className="flex flex-1 flex-col">
        <div className="animate-scale-in mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light text-2xl">
          ✓
        </div>

        <h1 className="animate-fade-up stagger-1 mb-3 text-2xl font-bold leading-tight text-ink">
          You&apos;re in — we&apos;ve got you
        </h1>
        <p className="animate-fade-up stagger-2 mb-8 text-base leading-relaxed text-ink-muted">
          Your first class is locked in. Over the next few minutes, we&apos;ll
          answer every question you might have before you walk through the door.
        </p>

        <div className="animate-fade-up stagger-3 mb-auto rounded-2xl border border-cream-dark bg-white p-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sage">
            Your class
          </p>
          <p className="text-lg font-bold text-ink">{mockClass.className}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {mockClass.gymName} · {mockClass.time}
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            Coach: <span className="font-medium text-ink">{mockClass.coach}</span>
          </p>
        </div>

        <div className="animate-fade-up stagger-4 mt-8">
          <ContinueButton to={nextPath} label="Show me what to expect" />
        </div>
      </div>
    </MemberLayout>
  )
}

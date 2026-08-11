import { useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import ContinueButton from '../../components/ContinueButton'
import { mockClass } from '../../data/mockClass'
import { getNextPath, getPrevPath } from '../../utils/navigation'

export default function CoachIntro() {
  const { pathname } = useLocation()
  const nextPath = getNextPath(pathname)!
  const prevPath = getPrevPath(pathname)!

  return (
    <MemberLayout step={5} backTo={prevPath}>
      <div className="flex flex-1 flex-col">
        <h1 className="animate-fade-up mb-3 text-2xl font-bold leading-tight text-ink">
          Your coach is waiting for you
        </h1>
        <p className="animate-fade-up stagger-1 mb-8 text-base leading-relaxed text-ink-muted">
          You won&apos;t have to find them on your own. Look for this face near
          the mat — they already know your name.
        </p>

        <div className="animate-fade-up stagger-2 mb-auto rounded-2xl border border-cream-dark bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-sage-light text-4xl">
            🧑‍🏫
          </div>
          <p className="text-xl font-bold text-ink">{mockClass.coach}</p>
          <p className="mt-1 text-sm text-ink-muted">Head Fundamentals Coach</p>

          <div className="mt-6 rounded-xl bg-cream p-4 text-left">
            <p className="text-sm leading-relaxed text-ink-muted">
              &ldquo;I love working with first-timers. My job is to make sure
              you feel safe, learn something, and actually enjoy your first
              class. Just say hi when you arrive — I&apos;ll take it from
              there.&rdquo;
            </p>
          </div>
        </div>

        <div className="animate-fade-up stagger-3 mt-6 rounded-2xl bg-sage-light p-4">
          <p className="text-sm font-semibold text-sage-dark">
            One line is all you need
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            &ldquo;Hi, I&apos;m here for my first class.&rdquo; Coach Alex will
            take it from there.
          </p>
        </div>

        <div className="animate-fade-up stagger-4 mt-8">
          <ContinueButton to={nextPath} label="I'm ready to meet them" />
        </div>
      </div>
    </MemberLayout>
  )
}

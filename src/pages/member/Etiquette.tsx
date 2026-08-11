import { useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import ContinueButton from '../../components/ContinueButton'
import { mockClass } from '../../data/mockClass'
import { getNextPath, getPrevPath } from '../../utils/navigation'
import { staggerDelay } from '../../utils/animation'

const etiquetteRules = [
  {
    title: 'Bow when entering & leaving the mat',
    detail: 'A simple sign of respect — everyone does it, including beginners.',
  },
  {
    title: 'Listen when the coach is speaking',
    detail: 'Raise your hand if you have a question. There are no dumb questions here.',
  },
  {
    title: 'Tap early, tap often',
    detail: 'Tapping means "stop" — it keeps you safe and shows good awareness.',
  },
  {
    title: 'Keep the space clean',
    detail: 'Wipe down equipment after use and help keep the gym tidy.',
  },
]

export default function Etiquette() {
  const { pathname } = useLocation()
  const nextPath = getNextPath(pathname)!
  const prevPath = getPrevPath(pathname)!

  return (
    <MemberLayout step={3} backTo={prevPath}>
      <div className="flex flex-1 flex-col">
        <h1 className="animate-fade-up mb-3 text-2xl font-bold leading-tight text-ink">
          A few things to know
        </h1>
        <p className="animate-fade-up stagger-1 mb-6 text-base leading-relaxed text-ink-muted">
          Every gym has its own vibe. These four customs keep things safe and
          respectful — and yes, your coach will walk you through all of them.
        </p>

        <ul className="mb-6 space-y-3">
          {etiquetteRules.map((rule, i) => (
            <li
              key={rule.title}
              className="animate-fade-up rounded-2xl border border-cream-dark bg-white p-4"
              style={staggerDelay(i + 2)}
            >
              <p className="font-semibold text-ink">{rule.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {rule.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="animate-fade-up mb-auto rounded-2xl bg-warm-light p-4" style={staggerDelay(6)}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm">
            What to wear
          </p>
          <p className="text-sm leading-relaxed text-ink">
            <span className="font-semibold">Gi class:</span>{' '}
            {mockClass.equipmentRules.gi}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink">
            <span className="font-semibold">No-Gi class:</span>{' '}
            {mockClass.equipmentRules.noGi}
          </p>
        </div>

        <div className="animate-fade-up mt-8" style={staggerDelay(7)}>
          <ContinueButton to={nextPath} label="Makes sense" />
        </div>
      </div>
    </MemberLayout>
  )
}

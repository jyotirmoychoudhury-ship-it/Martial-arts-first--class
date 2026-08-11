import { useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import ContinueButton from '../../components/ContinueButton'
import { getNextPath, getPrevPath } from '../../utils/navigation'
import { staggerDelay } from '../../utils/animation'

const items = [
  {
    icon: '👕',
    title: 'Comfortable clothes',
    detail: 'Athletic wear you can move in — or a gi if you have one.',
  },
  {
    icon: '💧',
    title: 'Water bottle',
    detail: 'Stay hydrated. We have a refill station near the entrance.',
  },
  {
    icon: '🩴',
    title: 'Flip-flops or slides',
    detail: 'For walking to and from the mat area. No shoes on the mats.',
  },
  {
    icon: '🧴',
    title: 'Personal hygiene',
    detail: 'Trim nails, tie back long hair, and skip heavy fragrances.',
  },
]

export default function Prepare() {
  const { pathname } = useLocation()
  const nextPath = getNextPath(pathname)!
  const prevPath = getPrevPath(pathname)!

  return (
    <MemberLayout step={2} backTo={prevPath}>
      <div className="flex flex-1 flex-col">
        <h1 className="animate-fade-up mb-3 text-2xl font-bold leading-tight text-ink">
          Pack light, stress less
        </h1>
        <p className="animate-fade-up stagger-1 mb-6 text-base leading-relaxed text-ink-muted">
          You don&apos;t need special gear for day one. Here&apos;s a short list
          so you can show up feeling prepared — not overthinking it.
        </p>

        <ul className="mb-auto space-y-3">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="animate-fade-up flex gap-4 rounded-2xl border border-cream-dark bg-white p-4"
              style={staggerDelay(i + 2)}
            >
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-ink-muted">
          No gi yet? Athletic wear is perfectly fine. Most people borrow or
          rent gear before committing.
        </p>

        <div className="animate-fade-up stagger-4 mt-6">
          <ContinueButton to={nextPath} label="Got it" />
        </div>
      </div>
    </MemberLayout>
  )
}

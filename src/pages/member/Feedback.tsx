import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import ContinueButton from '../../components/ContinueButton'
import { getNextPath, getPrevPath } from '../../utils/navigation'
import { staggerDelay } from '../../utils/animation'

const feelings = [
  { value: 'great', emoji: '😊', label: 'Great!' },
  { value: 'okay', emoji: '🙂', label: 'It was okay' },
  { value: 'nervous', emoji: '😅', label: 'Still nervous' },
  { value: 'overwhelmed', emoji: '😮‍💨', label: 'A bit overwhelmed' },
]

export default function Feedback() {
  const [selected, setSelected] = useState<string | null>(null)
  const { pathname } = useLocation()
  const nextPath = getNextPath(pathname)!
  const prevPath = getPrevPath(pathname)!

  return (
    <MemberLayout step={7} backTo={prevPath}>
      <div className="flex flex-1 flex-col">
        <h1 className="animate-fade-up mb-3 text-2xl font-bold leading-tight text-ink">
          How are you feeling?
        </h1>
        <p className="animate-fade-up stagger-1 mb-6 text-base leading-relaxed text-ink-muted">
          Be honest — there&apos;s no wrong answer. However you feel right now
          helps us know how to support you next time.
        </p>

        <div className="mb-auto grid grid-cols-2 gap-3">
          {feelings.map((feeling, i) => (
            <button
              key={feeling.value}
              type="button"
              onClick={() => setSelected(feeling.value)}
              style={staggerDelay(i + 2)}
              className={`animate-fade-up rounded-2xl border p-4 text-center transition-all ${
                selected === feeling.value
                  ? 'border-sage bg-sage-light ring-2 ring-sage/30'
                  : 'border-cream-dark bg-white hover:border-sage/40'
              }`}
            >
              <span className="text-2xl" aria-hidden="true">
                {feeling.emoji}
              </span>
              <p className="mt-2 text-sm font-medium text-ink">
                {feeling.label}
              </p>
            </button>
          ))}
        </div>

        {selected && (
          <p className="animate-fade-up mt-4 text-sm leading-relaxed text-ink-muted">
            {selected === 'great' &&
              "That's awesome! Consistency is key — we'll see you next class."}
            {selected === 'okay' &&
              "Totally normal. It gets easier every time — stick with it."}
            {selected === 'nervous' &&
              "You're not alone. Most people feel this way at first. It fades quickly."}
            {selected === 'overwhelmed' &&
              "There's a lot to learn. Focus on one thing at a time — you've got this."}
          </p>
        )}

        <div className="mt-8">
          <ContinueButton
            to={nextPath}
            label={selected ? 'Continue' : 'Skip for now'}
          />
        </div>
      </div>
    </MemberLayout>
  )
}

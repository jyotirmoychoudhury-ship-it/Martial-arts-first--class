import { Link } from "react-router-dom";
import { mockClass } from '../data/mockClass'
import { getStepNumber, normalizeMemberPath } from '../utils/navigation'
import CoachDashboardContent from './CoachDashboardContent'

interface DemoCoachPanelProps {
  pathname: string
}

const stepInsights: Record<
  number,
  { title: string; message: string; highlight?: 'coach' | 'newMembers' }
> = {
  1: {
    title: 'New booking confirmed',
    message:
      'Jordan Lee just signed up for their first class. The guided flow starts now — before they ever walk in.',
  },
  2: {
    title: 'Reducing pre-class anxiety',
    message:
      'The member is reviewing what to bring. Clear prep checklists reduce no-shows and front-desk questions.',
  },
  3: {
    title: 'Setting expectations early',
    message:
      'Learning gym etiquette upfront means fewer awkward moments on the mat and less coaching interruption.',
  },
  4: {
    title: 'Wayfinding handled',
    message:
      'They know exactly where to go. That means less time at the front desk and a calmer arrival.',
  },
  5: {
    title: 'Coach connection primed',
    message: `They're looking for ${mockClass.coach}. A personal greeting here is the highest-impact moment of the day.`,
    highlight: 'coach',
  },
  6: {
    title: 'Ready to arrive',
    message:
      '2 new members are prepped and en route. They know what to say when they walk in — meet them at the mat.',
    highlight: 'newMembers',
  },
  7: {
    title: 'Post-class check-in',
    message:
      'Capture how they felt. Anyone who selects "overwhelmed" or "nervous" may need a follow-up before next class.',
  },
}

export default function DemoCoachPanel({ pathname }: DemoCoachPanelProps) {
  const normalized = normalizeMemberPath(pathname)
  const step = getStepNumber(pathname)
  const isComplete = normalized === '/member/complete'
  const insight = step ? stepInsights[step] : null

  return (
    <div className="flex h-full flex-col bg-cream">
      <header className="border-b border-cream-dark bg-white px-6 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-sage">
          Coach view
        </p>
        <h2 className="text-lg font-bold text-ink">{mockClass.gymName}</h2>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-5">
        {isComplete ? (
          <div className="animate-fade-up mb-6 rounded-2xl border border-sage/30 bg-sage-light p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sage-dark">
              Journey complete
            </p>
            <p className="font-bold text-ink">Member retained</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              From booking to next-class signup — the full loop. Coach visibility
              + member guidance = fewer drop-offs after class one.
            </p>
          </div>
        ) : insight ? (
          <div
            className={`animate-fade-up mb-6 rounded-2xl border p-5 ${
              insight.highlight
                ? 'border-sage/40 bg-sage-light'
                : 'border-cream-dark bg-white'
            }`}
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-sage">
              Step {step} insight
            </p>
            <p className="font-bold text-ink">{insight.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {insight.message}
            </p>
            {insight.highlight === 'coach' && (
              <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/70 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/20 text-lg">
                  🧑‍🏫
                </div>
                <div>
                  <p className="font-semibold text-ink">{mockClass.coach}</p>
                  <p className="text-xs text-ink-muted">Member is looking for you</p>
                </div>
              </div>
            )}
            {insight.highlight === 'newMembers' && (
              <div className="mt-4 space-y-2">
                {mockClass.members
                  .filter((m) => m.isNew)
                  .map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-sm"
                    >
                      <span>⭐</span>
                      <span className="font-medium text-ink">{m.name}</span>
                      <span className="text-ink-muted">· {m.notes}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : null}

        <CoachDashboardContent />
      </div>
    </div>
  )
}

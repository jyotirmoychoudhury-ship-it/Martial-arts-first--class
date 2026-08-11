import { useLocation } from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'
import ContinueButton from '../../components/ContinueButton'
import { mockClass } from '../../data/mockClass'
import { getNextPath, getPrevPath } from '../../utils/navigation'
import { staggerDelay } from '../../utils/animation'

export default function Navigation() {
  const { pathname } = useLocation()
  const nextPath = getNextPath(pathname)!
  const prevPath = getPrevPath(pathname)!

  return (
    <MemberLayout step={4} backTo={prevPath}>
      <div className="flex flex-1 flex-col">
        <h1 className="animate-fade-up mb-3 text-2xl font-bold leading-tight text-ink">
          You won&apos;t get lost
        </h1>
        <p className="animate-fade-up stagger-1 mb-6 text-base leading-relaxed text-ink-muted">
          Your class is on Floor 1 — highlighted below. Save this screen if it
          helps; you can always ask at the front desk too.
        </p>

        <div className="mb-auto space-y-4">
          {[mockClass.layout.floor1, mockClass.layout.floor2].map((floor, i) => (
            <div
              key={floor.name}
              style={staggerDelay(i + 2)}
              className={`animate-fade-up rounded-2xl border p-5 ${
                floor.name.includes('Floor 1')
                  ? 'border-sage bg-sage-light'
                  : 'border-cream-dark bg-white'
              }`}
            >
              <div className="mb-3 flex items-center gap-2">
                <p className="font-bold text-ink">{floor.name}</p>
                {floor.name.includes('Floor 1') && (
                  <span className="rounded-full bg-sage px-2.5 py-0.5 text-xs font-semibold text-white">
                    Your class
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {floor.rooms.map((room) => (
                  <li
                    key={room}
                    className="flex items-center gap-2 text-sm text-ink-muted"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        room.includes('Fundamentals')
                          ? 'bg-sage'
                          : 'bg-ink-muted/40'
                      }`}
                    />
                    <span
                      className={
                        room.includes('Fundamentals')
                          ? 'font-semibold text-sage-dark'
                          : ''
                      }
                    >
                      {room}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="animate-fade-up rounded-2xl border border-cream-dark bg-white p-4" style={staggerDelay(4)}>
            <p className="text-sm font-semibold text-ink">When you arrive</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              Front desk → locker room → mat area. Give yourself 10 extra
              minutes so you&apos;re not rushing.
            </p>
          </div>
        </div>

        <div className="animate-fade-up mt-8" style={staggerDelay(5)}>
          <ContinueButton to={nextPath} label="I know where to go" />
        </div>
      </div>
    </MemberLayout>
  )
}

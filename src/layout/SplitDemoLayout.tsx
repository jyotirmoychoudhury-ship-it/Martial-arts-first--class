import { Link, Outlet, useLocation } from 'react-router-dom'
import DemoCoachPanel from '../components/DemoCoachPanel'
import MobileFrame from '../components/MobileFrame'
import { MemberFrameProvider } from '../context/MemberFrameContext'
import { getMemberBase } from '../utils/navigation'

export default function SplitDemoLayout() {
  const { pathname } = useLocation()
  const restartPath = `${getMemberBase(pathname)}/confirmation`

  return (
    <>
      {/* Mobile fallback */}
      <div className="flex h-dvh flex-col items-center justify-center bg-ink px-6 text-center lg:hidden">
        <p className="mb-2 text-2xl" aria-hidden="true">
          🖥️
        </p>
        <p className="mb-2 text-lg font-bold text-white">Split-screen demo</p>
        <p className="mb-6 max-w-xs text-sm text-white/60">
          This presentation mode works best on a wide screen. Try member or
          coach views instead.
        </p>
        <div className="flex flex-col gap-2">
          <Link
            to="/member/confirmation"
            className="rounded-xl bg-sage px-5 py-3 text-sm font-semibold text-white"
          >
            Member journey
          </Link>
          <Link
            to="/"
            className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white"
          >
            Back to home
          </Link>
        </div>
      </div>

      {/* Desktop split view */}
      <div className="hidden h-dvh flex-col overflow-hidden bg-ink lg:flex">
      {/* Presentation header */}
      <header className="flex shrink-0 items-center justify-between border-b border-white/10 bg-ink px-6 py-3">
        <div className="flex items-center gap-3">
          <span className="text-lg" aria-hidden="true">
            🥋
          </span>
          <div>
            <p className="text-sm font-bold text-white">
              The First-Class Experience
            </p>
            <p className="text-xs text-white/50">Split-screen demo mode</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={restartPath}
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            Restart
          </Link>
          <Link
            to="/"
            className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
          >
            Exit demo
          </Link>
        </div>
      </header>

      {/* Split panels */}
      <div className="flex min-h-0 flex-1">
        {/* Member — left */}
        <div className="flex w-[44%] shrink-0 items-center justify-center bg-gradient-to-br from-cream-dark via-cream to-sage-light/30 p-6">
          <div className="relative">
            <p className="absolute -top-7 left-0 right-0 text-center text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Member · mobile
            </p>
            <MemberFrameProvider showFrame={false}>
              <MobileFrame compact>
                <Outlet />
              </MobileFrame>
            </MemberFrameProvider>
          </div>
        </div>

        {/* Coach — right */}
        <div className="relative min-w-0 flex-1 border-l border-white/10">
          <p className="absolute left-6 top-3 z-10 text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Coach · desktop
          </p>
          <DemoCoachPanel pathname={pathname} />
        </div>
      </div>
    </div>
    </>
  )
}

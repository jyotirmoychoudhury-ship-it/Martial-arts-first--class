import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-gradient-to-br from-cream-dark via-cream to-sage-light/40 px-6">
      <div className="animate-fade-up w-full max-w-md text-center">
        <div className="animate-scale-in mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-light text-3xl">
          🥋
        </div>
        <h1 className="animate-fade-up stagger-1 mb-3 text-3xl font-bold tracking-tight text-ink">
          The First-Class Experience
        </h1>
        <p className="animate-fade-up stagger-2 mb-10 text-base leading-relaxed text-ink-muted">
          First-time jitters are real. This prototype shows how a guided journey
          calms students before class — and gives coaches a clear view of who
          needs a warm welcome.
        </p>

        <div className="animate-fade-up stagger-3 flex flex-col gap-3">
          <Link
            to="/member/confirmation"
            className="rounded-2xl bg-sage px-6 py-4 text-base font-semibold text-white transition-all hover:bg-sage-dark active:scale-[0.98]"
          >
            Start Member Journey
          </Link>
          <Link
            to="/demo"
            className="rounded-2xl bg-ink px-6 py-4 text-base font-semibold text-white transition-all hover:bg-ink/90 active:scale-[0.98]"
          >
            Split-Screen Demo
          </Link>
          <Link
            to="/coach/dashboard"
            className="rounded-2xl border border-cream-dark bg-white px-6 py-4 text-base font-semibold text-ink transition-all hover:bg-cream-dark active:scale-[0.98]"
          >
            View Coach Dashboard
          </Link>
        </div>

        <p className="mt-8 text-xs text-ink-muted">
          Interactive prototype · No backend required
        </p>
      </div>
    </div>
  )
}

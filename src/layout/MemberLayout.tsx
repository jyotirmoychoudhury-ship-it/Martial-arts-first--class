import { ReactNode } from 'react'
import ProgressIndicator from '../components/ProgressIndicator'
import BackButton from '../components/BackButton'
import PageTransition from '../components/PageTransition'
import MobileFrame from '../components/MobileFrame'
import { useMemberFrame } from '../context/MemberFrameContext'
import { TOTAL_MEMBER_STEPS } from '../utils/navigation'

interface MemberLayoutProps {
  children: ReactNode
  step?: number
  backTo?: string
  showProgress?: boolean
}

export default function MemberLayout({
  children,
  step,
  backTo,
  showProgress = true,
}: MemberLayoutProps) {
  const { showFrame } = useMemberFrame()

  const content = (
    <div
      className={`mx-auto flex max-w-md flex-col px-5 pb-8 pt-6 ${showFrame ? 'min-h-dvh' : 'min-h-full'}`}
    >
      <header className="mb-6">
        {backTo && (
          <div className="mb-4 animate-fade-up">
            <BackButton to={backTo} />
          </div>
        )}
        {showProgress && step && (
          <div className="animate-fade-up" style={{ animationDelay: '50ms' }}>
            <ProgressIndicator
              currentStep={step}
              totalSteps={TOTAL_MEMBER_STEPS}
            />
          </div>
        )}
      </header>

      <PageTransition>
        <main className="flex flex-1 flex-col">{children}</main>
      </PageTransition>
    </div>
  )

  return showFrame ? <MobileFrame>{content}</MobileFrame> : content
}

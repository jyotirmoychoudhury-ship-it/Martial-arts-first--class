import { ReactNode, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getStepNumber, normalizeMemberPath } from '../utils/navigation'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const prevStep = useRef<number | null>(null)
  const direction = useRef<'forward' | 'back'>('forward')

  const currentStep = getStepNumber(location.pathname)

  if (currentStep !== null && prevStep.current !== null) {
    direction.current = currentStep >= prevStep.current ? 'forward' : 'back'
  } else if (normalizeMemberPath(location.pathname) === '/member/complete') {
    direction.current = 'forward'
  }

  useEffect(() => {
    if (currentStep !== null) {
      prevStep.current = currentStep
    }
  }, [currentStep])

  const animationClass =
    direction.current === 'forward'
      ? 'animate-page-forward'
      : 'animate-page-back'

  return (
    <div key={location.pathname} className={`flex flex-1 flex-col ${animationClass}`}>
      {children}
    </div>
  )
}

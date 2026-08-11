interface ProgressIndicatorProps {
  currentStep: number
  totalSteps?: number
}

export default function ProgressIndicator({
  currentStep,
  totalSteps = 7,
}: ProgressIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="w-full">
      <p className="mb-2 text-sm font-medium text-ink-muted">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-cream-dark">
        <div
          className="h-full rounded-full bg-sage transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

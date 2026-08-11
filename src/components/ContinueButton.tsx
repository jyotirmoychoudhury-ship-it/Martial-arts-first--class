import { Link } from 'react-router-dom'

interface ContinueButtonProps {
  to: string
  label?: string
}

export default function ContinueButton({
  to,
  label = 'Continue',
}: ContinueButtonProps) {
  return (
    <Link
      to={to}
      className="flex w-full items-center justify-center rounded-2xl bg-sage px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-sage-dark active:scale-[0.98]"
    >
      {label}
    </Link>
  )
}

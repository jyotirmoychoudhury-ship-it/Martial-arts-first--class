import CoachLayout from '../../layout/CoachLayout'
import CoachDashboardContent from '../../components/CoachDashboardContent'

export default function CoachDashboard() {
  return (
    <CoachLayout>
      <CoachDashboardContent />

      <p className="mt-6 text-sm text-ink-muted">
        These students may feel anxious. A quick personal greeting makes a big
        difference.
      </p>
    </CoachLayout>
  )
}

import { mockClass } from '../data/mockClass'

export default function CoachDashboardContent() {
  const newMembers = mockClass.members.filter((m) => m.isNew)
  const returningMembers = mockClass.members.filter((m) => !m.isNew)

  return (
    <>
      <div className="mb-6 rounded-2xl border border-cream-dark bg-white p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink">{mockClass.className}</h2>
            <p className="mt-1 text-sm text-ink-muted">
              {mockClass.time} · Coach {mockClass.coach}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-sage">{mockClass.members.length}</p>
            <p className="text-xs text-ink-muted">Enrolled</p>
          </div>
        </div>
      </div>

      <section className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <span aria-hidden="true">⭐</span>
          <h3 className="font-bold text-ink">
            New Members
            <span className="ml-2 rounded-full bg-warm-light px-2 py-0.5 text-xs font-semibold text-warm">
              {newMembers.length} need attention
            </span>
          </h3>
        </div>

        <div className="overflow-hidden rounded-2xl border border-warm/30 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream-dark bg-warm-light/50">
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Name
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Status
                </th>
                <th className="hidden px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted sm:table-cell">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {newMembers.map((member) => (
                <tr
                  key={member.name}
                  className="border-b border-cream-dark last:border-0"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warm-light text-xs font-bold text-warm">
                        {member.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-ink">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-sage-light px-2.5 py-0.5 text-xs font-semibold text-sage-dark">
                      ⭐ First class
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-ink-muted sm:table-cell">
                    {member.notes ?? '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-bold text-ink">Returning Members</h3>
        <div className="overflow-hidden rounded-2xl border border-cream-dark bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream-dark bg-cream">
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Name
                </th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {returningMembers.map((member) => (
                <tr
                  key={member.name}
                  className="border-b border-cream-dark last:border-0"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-dark text-xs font-bold text-ink-muted">
                        {member.name.charAt(0)}
                      </div>
                      <span className="font-medium text-ink">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium text-ink-muted">
                      Returning
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

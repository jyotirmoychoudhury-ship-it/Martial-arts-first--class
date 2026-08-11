export const MEMBER_STEPS = [
  { path: '/member/confirmation', label: 'Confirmation' },
  { path: '/member/prepare', label: 'Prepare' },
  { path: '/member/etiquette', label: 'Etiquette' },
  { path: '/member/navigation', label: 'Navigation' },
  { path: '/member/coach', label: 'Coach' },
  { path: '/member/arrival', label: 'Arrival' },
  { path: '/member/feedback', label: 'Feedback' },
] as const

export const TOTAL_MEMBER_STEPS = MEMBER_STEPS.length

export function normalizeMemberPath(pathname: string): string {
  return pathname.replace(/^\/demo\/member/, '/member')
}

export function getMemberBase(pathname: string): string {
  return pathname.startsWith('/demo') ? '/demo/member' : '/member'
}

function toRoutedPath(normalizedPath: string, pathname: string): string {
  const base = getMemberBase(pathname)
  const suffix = normalizedPath.replace('/member', '')
  return `${base}${suffix}`
}

export function getStepNumber(pathname: string): number | null {
  const normalized = normalizeMemberPath(pathname)
  const index = MEMBER_STEPS.findIndex((step) => step.path === normalized)
  return index >= 0 ? index + 1 : null
}

export function getNextPath(pathname: string): string | null {
  const normalized = normalizeMemberPath(pathname)
  const index = MEMBER_STEPS.findIndex((step) => step.path === normalized)

  if (index >= 0 && index < MEMBER_STEPS.length - 1) {
    return toRoutedPath(MEMBER_STEPS[index + 1].path, pathname)
  }
  if (index === MEMBER_STEPS.length - 1) {
    return toRoutedPath('/member/complete', pathname)
  }
  return null
}

export function getPrevPath(pathname: string): string | null {
  const normalized = normalizeMemberPath(pathname)
  const index = MEMBER_STEPS.findIndex((step) => step.path === normalized)
  if (index > 0) {
    return toRoutedPath(MEMBER_STEPS[index - 1].path, pathname)
  }
  return null
}

export function isDemoPath(pathname: string): boolean {
  return pathname.startsWith('/demo')
}

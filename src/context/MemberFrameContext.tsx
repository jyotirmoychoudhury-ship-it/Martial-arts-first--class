import { createContext, ReactNode, useContext } from 'react'

interface MemberFrameContextValue {
  showFrame: boolean
}

const MemberFrameContext = createContext<MemberFrameContextValue>({
  showFrame: true,
})

export function MemberFrameProvider({
  showFrame,
  children,
}: {
  showFrame: boolean
  children: ReactNode
}) {
  return (
    <MemberFrameContext.Provider value={{ showFrame }}>
      {children}
    </MemberFrameContext.Provider>
  )
}

export function useMemberFrame() {
  return useContext(MemberFrameContext)
}

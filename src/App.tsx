import { Navigate, Route, Routes } from 'react-router-dom'
import Confirmation from './pages/member/Confirmation'
import Prepare from './pages/member/Prepare'
import Etiquette from './pages/member/Etiquette'
import Navigation from './pages/member/Navigation'
import CoachIntro from './pages/member/CoachIntro'
import Arrival from './pages/member/Arrival'
import Feedback from './pages/member/Feedback'
import Complete from './pages/member/Complete'
import CoachDashboard from './pages/coach/Dashboard'
import Home from './pages/Home'
import SplitDemoLayout from './layout/SplitDemoLayout'

const demoMemberRoutes = [
  ['confirmation', Confirmation],
  ['prepare', Prepare],
  ['etiquette', Etiquette],
  ['navigation', Navigation],
  ['coach', CoachIntro],
  ['arrival', Arrival],
  ['feedback', Feedback],
  ['complete', Complete],
] as const

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Member flow */}
      <Route path="/member/confirmation" element={<Confirmation />} />
      <Route path="/member/prepare" element={<Prepare />} />
      <Route path="/member/etiquette" element={<Etiquette />} />
      <Route path="/member/navigation" element={<Navigation />} />
      <Route path="/member/coach" element={<CoachIntro />} />
      <Route path="/member/arrival" element={<Arrival />} />
      <Route path="/member/feedback" element={<Feedback />} />
      <Route path="/member/complete" element={<Complete />} />

      {/* Split-screen demo */}
      <Route path="/demo" element={<SplitDemoLayout />}>
        <Route index element={<Navigate to="member/confirmation" replace />} />
        {demoMemberRoutes.map(([segment, Page]) => (
          <Route
            key={segment}
            path={`member/${segment}`}
            element={<Page />}
          />
        ))}
      </Route>

      {/* Coach flow */}
      <Route path="/coach/dashboard" element={<CoachDashboard />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

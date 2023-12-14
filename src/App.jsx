import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import Sidebar from './components/SideBar/SideBarMenu'
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home'
import Setting from './pages/settings/Setting'
import Schedule from './pages/schedule/Schedule'
import Activity from './pages/activity/Activity'

function App() {
  return (
    <Router>
      <main id='mainContainer'>
        <Sidebar />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/activities" element={<Activity />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
      </main>
    </Router>
  )
}

export default App

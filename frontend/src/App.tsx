import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Researches from './pages/Researches'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import Devlog from './pages/Devlog'
import Login from './pages/Login'
import MainHeader from './components/MainHeader'

function App() {
  return (
    <BrowserRouter>
      <MainHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/researches" element={<Researches />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/devlog" element={<Devlog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
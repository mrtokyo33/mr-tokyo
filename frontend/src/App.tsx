import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Researches from './pages/Researches'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import Devlog from './pages/Devlog'
import Login from './pages/Login'
import Japanese from './pages/Japanese'
import Kana from './pages/japanese/Kana'
import Kanji from './pages/japanese/Kanji'
import Log from './pages/japanese/Log'
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
        <Route path="/japanese" element={<Japanese />} />
        <Route path="/japanese/kana" element={<Kana />} />
        <Route path="/japanese/kanji" element={<Kanji />} />
        <Route path="/japanese/log" element={<Log />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
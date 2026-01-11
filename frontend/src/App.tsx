import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppHeader } from "@/components/AppHeader"
import { Home } from "@/pages/Home"
import { Articles } from "@/pages/Articles"
import { Projects } from "@/pages/Projects"
import { About } from "@/pages/About"
import { Japanese } from "./pages/Japanese"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-background text-foreground">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/japanese" element={<Japanese />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Module
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
// ==>
function App() {

  return (
    <div className="app bg-[#F5F5F5] relative h-full font-primary pt-[6em]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

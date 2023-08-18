// Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Module
import Navbar from "./components/Navbar"
// ==>
function App() {

  return (
    <div className="app bg-[#F5F5F5] relative h-screen font-primary">
      <Router>
        <Navbar />
        <Routes>
        </Routes>
      </Router>
    </div>
  )
}

export default App

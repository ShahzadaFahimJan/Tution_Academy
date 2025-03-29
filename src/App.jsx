import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import aboutus from './pages/aboutus'
import programs from './pages/programs'
import apply from './pages/apply'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Home />
      <Routes>
        <Route path="/aboutus" element={<aboutUs />} />
        <Route path="/programs" element={<programs />} />
        <Route path="/apply" element={<apply />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

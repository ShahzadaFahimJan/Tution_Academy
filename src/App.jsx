import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Aboutus from './pages/aboutus'
import Programs from './pages/programs'
import Apply from './pages/apply'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Home />
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

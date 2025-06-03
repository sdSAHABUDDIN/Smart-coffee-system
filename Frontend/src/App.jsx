import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Prepare from './Pages/Prepare'
import Menu from './Pages/Menu'
import Location from './Pages/Location'
import Machine from './Pages/Machine'
import AboutUs from './Pages/AboutUs'

import WhatsNew from './Pages/WhatsNew'
import Login from './Pages/Login'
import Thumbnails from './Components/Thumbnails'

const App = () => {
  return (
    <Router>
      <div className="bg-[#D69456] min-h-screen p-4">
        <Navbar />
        <div className="bg-[#FFCA99] rounded-xl shadow-md overflow-hidden mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prepare" element={<Prepare />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="Location" element={<Location />}/>
            <Route path="Machine" element={<Machine />}/>
            <Route path="AboutUs" element={<AboutUs />}/>
            
            <Route path="/WhatsNew" element={<WhatsNew />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Thumbnails" element={<Thumbnails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'


const App = () => {
  return (
     <div className="bg-[#D69456] min-h-screen p-4">
      <div className="bg-[#FFCA99] rounded-xl shadow-md overflow-hidden">
        <Home />
      </div>
    </div>
  )
}

export default App
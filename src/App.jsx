import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import PlayerCount from './components/PlayerCount.jsx'
import Play from './player_screens/Play.jsx'
import NavBar from './components/NavBar'
import Homepage from './Homepage.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='PlayerCount' element={<PlayerCount />} />
          <Route path='Play/:playerCount' element={<Play />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

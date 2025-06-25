import './App.css'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CheckAuth from './components/CheckAuth'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        path='/' 
        element={<Home />}>
      </Route>

      <Route path='/about' element={<About />}>
      </Route>
      <Route path='/contact' element={<Contact />}>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

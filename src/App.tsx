import './App.css'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CheckAuth from './components/CheckAuth'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import CarDetails from './components/CarDetails.tsx'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className='min-h-[81vh]'>
      <Routes>
        <Route
          path='/' 
          element={<Home />}>
        </Route>
        <Route path='/owner/:id'
          element={<CarDetails />}
        >

        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter,Routes,Route } from 'react-router-dom'


import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Tawk from './Shared/Tawk'
import ReduxP from './Components/ReduxP'




function App() {
 return (
    <>
        <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<ReduxP />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/*' element={<h1>Page Not Found</h1>} />
        </Routes>
        {/* <Tawk/> */}
        </BrowserRouter>
    </>
  )
}

export default App

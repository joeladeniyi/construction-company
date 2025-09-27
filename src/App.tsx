
import About from './About'
 import Contact from './Contact'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './Projects'
import HomePage from './HomePage'
import Services from './Services'



function App() {
  
  
  return (
    <>
       
         
      
    <Router>
      
      <Routes>
          <Route path='/' element={<HomePage/>} />
    
      
          <Route path='/contact' element={<Contact/>} />
      
           
          <Route path='/about' element={<About/>} />
      
      
          <Route path='/project' element={<Projects/>} />
      
          <Route path='/services' element={<Services/>}/>
      
      
      </Routes>
  </Router> 
  </>
  )
}

export default App

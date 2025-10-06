import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsList } from "react-icons/bs";

function Navbar () {
  const[navopen, setNavopen] = useState<boolean>(false)
  const handlenav = () => {
    setNavopen(!navopen)
  }
  const navigate = useNavigate()
 
  return (
    <nav className='flex justify-between flex-row top-0 w-full bg-slate-900'>
      <div className='hidden md:flex md:justify-between md:w-full '>

      
      <button onClick={(()=> navigate('/'))} className='justify-start text-white ml-5'>Home</button>
      <div className='flex flex-row justify-between '>
        
        <button onClick={(()=> navigate('/about'))} className='mx-3  text-white'>About</button>
      <button onClick={(()=> navigate('/project'))}  className='mx-3  text-white'>Project</button>
      <button onClick={(()=> navigate('/services'))} className='mx-3  text-white'>Services</button>
      
      </div>
      <div className='flex flex-row justify-end align-middle'>
        <button onClick={(()=> navigate('/contact'))} className=' text-white'>Contact Us</button>
        
      </div>
     </div>
     {!navopen &&<button className='md:hidden flex w-full text-white h-8 ml-2 mt-2' onClick={handlenav}><BsList/></button>}
     {navopen && <div className='md:hidden flex flex-col w-full items-center bg-slate-900'>
             <button className='flex w-full ml-2 mt-2  text-white' onClick={handlenav}><BsList/></button>
           <h3 onClick={(()=> navigate('/'))} className='border-b-2 border-white text-white text-center w-full hover:text-lg hover:text-orange-500 hover:border-orange-500'> Home</h3>
           <h3 onClick={(()=> navigate('/about'))} className='border-b-2 border-white text-white text-center w-full hover:text-lg hover:text-orange-500 hover:border-orange-500'> About</h3>
           <h3 onClick={(()=> navigate('/project'))} className='border-b-2 border-white text-white text-center w-full hover:text-lg hover:text-orange-500 hover:border-orange-500'> Project</h3>
           <h3 onClick={(()=> navigate('/services'))} className='border-b-2 border-white text-white text-center w-full hover:text-lg hover:text-orange-500 hover:border-orange-500'> Services</h3>
           <h3 onClick={(()=> navigate('/contact'))} className='border-b-2 border-white text-white text-center w-full hover:text-lg hover:text-orange-500 hover:border-orange-500'> Contact Us</h3>
     </div>}
     
    </nav>
  )
}

export default Navbar

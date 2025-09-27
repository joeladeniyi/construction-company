import { useNavigate } from 'react-router-dom'
function Navbar () {
  const navigate = useNavigate()
 
  return (
    <nav className='flex justify-between gray-800 flex-row top-0 w-full bg-slate-900'>
      <button onClick={(()=> navigate('/'))} className='justify-start text-white ml-5'>Home</button>
      <div className='flex flex-row justify-between '>
        
        <button onClick={(()=> navigate('/about'))} className='mx-3  text-white'>About</button>
      <button onClick={(()=> navigate('/project'))}  className='mx-3  text-white'>Project</button>
      <button onClick={(()=> navigate('/services'))} className='mx-3  text-white'>Services</button>
      
      </div>
      <div className='flex flex-row justify-end align-middle'>
        <button onClick={(()=> navigate('/contact'))} className=' text-white'>Contact Us</button>
        
      </div>
     
    </nav>
  )
}

export default Navbar

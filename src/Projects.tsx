
import Navbar from './Navbar'
import { project } from './utils/Project'

function Projects  () {
  return (
    <main>
      <Navbar />
            <div className="flex flex-col ml-12 ">
              <h1 className="text-gray-500 text-8xl">PROJECT</h1>
              <h1 className="text-slate-900 font-serif font-bold text-5xl mt-4">SOME OF OUR BEST WORKS </h1>
            </div>
            <div className='bg-slate-900 mt-6 w-full'>
              <h2 className='text-white mt-10 ml-12 text-3xl'> PROJECTS</h2>
              <div className='grid grid-cols-3'>
                {project.map((project)=>{
                  return(
                  <div className='flex flex-col' key={project.id}>
                  <img src={project.src} className='m-4' />
                   <p className='text-white ml-40'>{project.place}</p>
                </div>
                  )
                })

                }
                 
              </div>
            </div>
    </main>
  )
}

export default Projects

import { project } from './utils/Project'

function Projects  () {
  return (
    <main>
            <div className="flex flex-col ml-12 md:text-6xl text-4xl items-center text-center md:text-left md:items-start ">
              <h1 className="text-gray-500 md:text-left ">PROJECT</h1>
              <h1 className="text-slate-900 font-serif font-bold  mt-4">SOME OF OUR BEST WORKS </h1>
            </div>
            <div className='bg-slate-900 mt-6 w-full items-end text-center'>
              <h2 className='text-white mt-10  text-3xl'> PROJECTS</h2>
              <div className='grid md:grid-cols-3'>
                {project.map((project)=>{
                  return(
                  <div className='flex flex-col md:m-8' key={project.id}>
                  <img src={project.src} className='' />
                   <p className='text-white '>{project.place}</p>
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

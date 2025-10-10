import image1 from './assets/construction-site.png'
import image2 from './assets/engineer.png'
import image3 from './assets/supervision.png'
import image4 from './assets/brickwall.png'
import image5 from './assets/worker.png'
function Services  () {
  return (
    <main className='h-screen flex flex-col'>
      <div className='flex flex-col md:ml-12 md:text-6xl lg:text-8xl text-4xl items-center text-center md:items-start md:text-left'>
        <h1 className='text-gray-500'>SERVICE</h1>
        <h1 className='text-black font-serif font-extrabold'>WE  FOCUS ON </h1>
        <h1 className='text-red-600 font-serif font-extrabold'>QUALITY</h1>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 m-12 items-center '>
        
        <div className='shadow-2xl rounded-md items-center'> 
          <img src={image1} className='h-10 ml-4 w-12'/>
          <h4 className='font-serif text-3xl ml-4'> General</h4>
          <h4 className='font-serif text-3xl ml-4'>Construction </h4>
          <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nulla voluptatum, accusamus inventore adipisci nisi consectetur sapiente eum, cumque esse corrupti.</p>
        </div>
        <div className='shadow-2xl rounded-md '> 
          <img src={image2} className='h-10 ml-4 w-12'/>
          <h4 className='font-serif text-3xl ml-4'> Construction</h4> 
                <h4 className='font-serif text-3xl ml-4'> Consultant </h4>
                <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nulla voluptatum, accusamus inventore adipisci nisi consectetur sapiente eum, cumque esse corrupti.</p>
                </div>
        <div className='shadow-2xl rounded-md'> 
          <img src={image3} className='h-10 ml-4 w-12'/>
          <h4 className='font-serif text-3xl ml-4'> Planning </h4>
        <h4 className='font-serif text-3xl ml-4'>  and scheduling </h4>
          <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nulla voluptatum, accusamus inventore adipisci nisi consectetur sapiente eum, cumque esse corrupti.</p>
        </div>
        <div className='shadow-2xl rounded-md mt-4  '>
          <img src={image4} className='h-10 ml-4 w-12'/>
          <h4 className='font-serif text-3xl ml-4'>Construction </h4>
        <h4 className='font-serif text-3xl ml-4'> management</h4>  
          <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nulla voluptatum, accusamus inventore adipisci nisi consectetur sapiente eum, cumque esse corrupti.</p>
        </div>
        <div className='shadow-2xl rounded-md mt-4'> 
          <img src={image1} className='h-10 ml-4 w-12'/>
          <h4 className='font-serif text-3xl ml-4'>architecture </h4>
            <h4 className='font-serif text-3xl ml-4'> and building </h4>  
          <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nulla voluptatum, accusamus inventore adipisci nisi consectetur sapiente eum, cumque esse corrupti.</p>
        </div>
  <div className='shadow-2xl rounded-md mt-4 '> 
     <img src={image5} className='h-10 ml-4 w-12'/>
    <h4 className='font-serif text-3xl ml-4'> Tiling</h4> 
      <h4 className='font-serif text-3xl ml-4'>and painting</h4>
         
    <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius nulla voluptatum, accusamus inventore adipisci nisi consectetur sapiente eum, cumque esse corrupti.</p>
</div>
      </div>
    </main>
  )
}

export default Services

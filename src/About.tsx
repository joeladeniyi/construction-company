import Navbar from "./Navbar";
import { Teams } from "./utils/About";
import image1 from "./assets/istockphoto-1163919741-612x612.jpg";
import image2 from "./assets/istockphoto-1158121014-612x612.jpg";
import img2 from './assets/home (1).png'
import img1 from './assets/multiple-users-silhouette.png'
import img3 from './assets/home (2).png'
import img4 from './assets/worker.png'

function About() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col ml-12 text-8xl">
        <h1 className="text-gray-500">ABOUT</h1>
        <h1 className="text-black font-serif font-extrabold">OUR COMPANY </h1>
      </div>
      <div className="grid grid-cols-4 m-12">
        <div className="flex flex-col ">
          <h1 className="flex flex-row text-2xl items-center">
            {" "}
            <img src={img1} className="h-5 m-2"/> 200+
          </h1>
          <p className="text-xl text-gray-700"> People work in our company</p>
        </div>
        <div className="flex flex-col">
          <h1 className="flex flex-row text-2xl items-center">
            {" "}
            <img src={img2} className="h-5 m-2" /> 5000+
          </h1>
          <p className="text-xl text-gray-700"> Project we've built</p>
        </div>
        <div className="flex flex-col">
          <h1 className="flex flex-row text-2xl items-center">
            {" "}
            <img src={img3} className="h-5 m-2" /> 20+
          </h1>
          <p className="text-xl text-gray-700"> Cities around the world</p>
        </div>
        <div className="flex flex-col">
          <h1 className="flex flex-row text-2xl items-center">
            {" "}
            <img src={img4} className="h-5 m-2"/> 500+
          </h1>
          <p className="text-xl text-gray-700"> People work in our company</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img src={image1} className="ml-4 mt-6 "  />
        <div>
          <h2 className="m-4 text-gray-500 text-4xl"> OUR MISSION</h2>
          <h4 className="m-4 text-black text-2xl">
            OUR GOAL IS TO PROVIDE HIGH QUALITY CONSTRUCTION WORK AND RENOVATION
          </h4>
          <p className="m-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quasi
            placeat dolor culpa perspiciatis? Excepturi odit nam commodi
            laudantium accusamus possimus atque, quam tempora qui omnis dolore
            facere nisi quaerat in, voluptates minus autem sed error labore,
            unde similique architecto.
          </p>
          <br />
          <p className="m-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            et placeat alias sequi quaerat nostrum aliquam quis commodi adipisci
            enim. Velit totam ipsum assumenda illum nulla ex, esse fugit
            voluptatem quis porro. Repellendus dolore quia, tempore harum amet
            odit officiis!
          </p>
          <button className="m-4 bg-slate-900 text-white rounded-sm p-2">Learn More About Us</button>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5">
        <div>
          <h2 className="m-4 text-gray-500 text-4xl"> OUR MISSION</h2>
          <h2 className="m-4 text-black text-2xl "> OUR STORY</h2>
          <h4 className="m-4 text-black text-2xl">THE STORY OF THE FOUNDING OF OUR COMPANY</h4>
          <p className="m-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quasi
            placeat dolor culpa perspiciatis? Excepturi odit nam commodi
            laudantium accusamus possimus atque, quam tempora qui omnis dolore
            facere nisi quaerat in, voluptates minus autem sed error labore,
            unde similique architecto.
          </p>
          <br />
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            aperiam ab mollitia cumque quia eos atque voluptatum cupiditate
            saepe quas? Mollitia amet error accusantium incidunt reprehenderit
            cumque inventore nulla ipsa, iusto vel dolorum impedit, vitae
            voluptates quasi a veniam rem!
          </p>
          <button className="m-4 bg-slate-900 text-white rounded-sm p-2">Learn More About Us</button>
        </div>
        <img src={image2} />
      </div>
      <div className="flex flex-col">
        <div className="m-4">
          <h2 className="m-4 text-gray-500 text-4xl">TEAM</h2>
          <h2 className="m-4 text-black text-2xl">MEET OUR PROFESSIONALS</h2>
          <div className="grid grid-cols-4">
           {Teams.map((person)=>{
              return(
                <div className="flex flex-col " key={person.id}>
              <img src={person.src} className="m-4" />
              <h3 className=" ml-4 font-bold">{person.name}</h3>
              <h4 className=" ml-4 text-gray-600">{person.position}</h4>
            </div>
              )
           })} 
            
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './assets/carousel-slide-1.jpg'
import image2 from './assets/carousel-slide-2.jpg'
import image3 from './assets/carousel-slide-3.jpg'
import image4 from './assets/home-portfolio-stripe-bg.jpg'
import img1 from './assets/istockphoto-940251778-612x612.jpg'
import img2 from  './assets/istockphoto-1212994715-612x612.jpg'
import img3 from  './assets/istockphoto-1323030556-612x612.jpg'
import img4  from './assets/istockphoto-1323737466-612x612.jpg'
import img5  from  './assets/istockphoto-157558590-612x612.jpg'
 import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function HomePage () {
  const settings = {
    dots: true,
    arrows :true,
    speed: 500,
    slidesToShow: 1,
    centermode : true,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true

    // className: "center",
    // centerMode: true,
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 3,
    // speed: 500

    //  className: "",
    // dots: true,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // adaptiveHeight: true
  };
  const navigate = useNavigate()
  return (
    <main className="bg-slate-900 h-screen w-screen">
      
      
      <Navbar/>
       <Slider {...settings} className=" " >
        <div className="h-80 ">
          <img src={image1} alt="first image" className=" h-auto object-cover"/>
        </div>
        <div className="h-80 ">
          <img src={image2} alt="second image" className="  object-cover "/>
        </div>
        <div className="h-80 w-full" >

          <img src={image3} alt="Third image" className=" object-cover" />
        </div>
        <div className="h-80 w-full">
          <img src={image4} alt="Third image" className="  object-cover w-full " />
        </div>
        <div className="h-80">
          <img src={img1} alt="Third image" className="items-center w-full h-auto object-cover  " />
        </div>
        <div className="h-80 w-full">
          <img src={img2} alt="Third image" className=" items-center w-full h-auto object-cover " />
        </div>
        <div className="h-80 w-full">
          <img src={img3} alt="Third image" className="items-center w-full h-auto object-cover " />
        </div>
        <div className="h-80 w-full">
          <img src={img4} alt="Third image" className="h-auto w-full object-cover " />
        </div>
        <div className="h-80 w-full">
          <img src={img5} alt="Third image" className=" h-auto w-full object-cover " />
        </div>
      </Slider> 
      
      <div className=" items-center align-middle mt-8 flex flex-col mx-auto max-w-fit ">
        <h1 className=" text-2xl text-white font-extrabold font-serif text-5xl"> Best Construction and Renovation </h1>
        <h1 className="text-4xl text-white font-extrabold font-serif text-5xl">  Services</h1>
      </div>
      <div className="flex flex-row items-center align-middle mt-8 mb-8  py-2 px-4 mx-auto max-w-fit ">
        <button className=" mr-8 bg-green-800 text-2xl text-white rounded-md p-1 " onClick={(()=> navigate('/contact'))}> Contact us</button>
        <button className="bg-red-700 mr-7 ml-6 text-2xl text-white p-1 rounded-md" style={{color:"red"}}> Get A Quote Now</button>
      </div>
    </main>
    
  );
};

export default HomePage;
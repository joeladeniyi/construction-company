import image1 from '../assets/istockphoto-931243836-612x612.jpg'
import image2 from '../assets/istockphoto-1158121014-612x612.jpg'
import image3 from '../assets/istockphoto-511061090-612x612.jpg'
import image4 from '../assets/istockphoto-1163919741-612x612.jpg'
import image5 from '../assets/istockphoto-1388024309-612x612.jpg'
import image6 from '../assets/istockphoto-585292106-612x612.jpg'

type projecttype = {
    id : number
    place : string,
    src :string
}

export const project : projecttype[] = [{
    id : 1,
    place: "LEKKI",
    src : image1
},
{
    id : 2,
    place: "IKEJA",
    src : image2
},
{
    id : 3,
    place: "ABUJA",
    src : image3 
},
{
    id : 4,
    place: "VICTORIA ISLAND",
    src : image4
},
{
    id : 5,
    place: "ASOKORO",
    src : image5 
},
{
    id : 6,
    place: "LAGOS ISLAND",
    src : image6
},

]

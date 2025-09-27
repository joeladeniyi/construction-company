import person1 from '../assets/portrait-expressive-young-man-wearing-formal-suit (1).jpg'
import person2 from '../assets/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully.jpg'
import person3 from '../assets/portrait-expressive-young-man-wearing-formal-suit.jpg'

type  teamstype ={
    id : number,
    name : string,
    position : string
    src : string
}
export const Teams : teamstype[]=[{
    id : 1,
 name : "RUBEN AMORIM",
 position:"Construction Engineer",
 src : person1
},

{
    id :2,
    name: 'THOMAS PARTEY',
    position : 'Construction Engineer',
    src: person2
},
    {
    id :2,
    name: 'XABI ALONSO',
    position : 'Civil Engineer',
    src :person3
},
{
    id :2,
    name: 'CALUM HUDON',
    position : 'Project Engineer',
    src :  person1
}

]

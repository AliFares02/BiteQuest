import React,{useState} from'react'
import { TiArrowForward } from "react-icons/ti";
/*Used Geeksforgeeks tutorial of how to create a random number in ReactJS
*/

const RandomFoodSelect = () => {
  const foodPlaces=["Food Trucks: Buona Journata","Pizza Hut","Chipotle","AppleBee's","Teriyaki One","Panda Express","Five Guys","Brooklyn's Best Eats",
  "Fisherman Cove","Burger King","Pronto Cafe","Ashoka Grill","Island Burger","Bake & Things" ,"Gong Cha" ,"Jupioca","Ovi's Place","McBeans","CC'S Jamaican Restaurant",
  "Ital Fusion"];

  const foodImages=["https://lh3.googleusercontent.com/p/AF1QipNqwnIROUxUjNPakwx8h4fwdhXLK0BsSYuRsVqR=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipOpn93zxrHq5OKBs-f4ZXlkDa-m-S6SiPe7H9AA=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipOxBbNss6HVKRp1aGewucTwknSDPX3mD2THFDGn=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipNdFc73eFDY900NXpzb1yGy52GSR6K0z4DX1qmB=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipOoZn2GM5A82x7LOah9zvRqYSB3XBwnvtlcs9M9=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipPIYQjejNmXbf7PmryUN_5XaXmmBCJqExug4O7O=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipPxAYhs_iaHHz2lXSv0kPMDtCqUbdtR6me9bg07=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipM-BVN81f1vGMNxFGRnQ6D-Qgx8ZbwIdhzjFjHY=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipOH7-6pMZPSuidGu9bNW1EK134eMZlwGS_HKDef=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipO6ZkmcwwZPXHT9s0gxQ9UHQgwPEihWl_cG0K6p=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipNumvkH23ttemTI_htlo47S2IwsGDUE3XFIpfHy=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipMPSJaERycs1OuExLASrXOtNEnQpGGy9tOHSW3M=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipPURX3XsaA9jWazAkawgnRr8VsCGtyvtDoBQjjV=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipNzF6Q_RYVud6Yao2rTTKztgw5yXyDuJAnALgqi=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipO_4xYBMua9-QmlgPgAmpuPJ9XYQllTIl2zqxlK=s1360-w1360-h1020",
  "https://lh3.googleusercontent.com/p/AF1QipNLCvANBuvESjO6dQFZ-HokFaFgf2iqQxgTcXfL=s1360-w1360-h1020",
  "https://lh3.googleusercontent.com/p/AF1QipMQSjycWe2H5idJ9AiDZ_NkwTYRiGtQM805HAYP=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipM4Yu7-ioO7Uqg9PKiG1bFTtafa6Wowes_NzozG=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipPBVdFS_VzPMVasXZkgqo16wYgDIjSOoUVaf9WG=s680-w680-h510",
  "https://lh3.googleusercontent.com/p/AF1QipPoCdw_FvDPoZKDDAUBJH4EfwNwazrC3zTVGbB0=s680-w680-h510"
];  
  const foodDirections=["https://maps.app.goo.gl/dre6D5G7SEcyUy5d8",
  "https://maps.app.goo.gl/KnTRbTtLpD9Qoejt5",
  "https://maps.app.goo.gl/uNCb1962wEGEPCeNA",
  "https://maps.app.goo.gl/K42LDT6YxcxPWZkNA",
  "https://maps.app.goo.gl/3ypqqxiSGKBaxVkj9",
  "https://maps.app.goo.gl/qRrnLf7YTaoxhogH8",
  "https://maps.app.goo.gl/7kC1Drz6GY3ekkYv9",
  "https://maps.app.goo.gl/d2a9z2FacDnxxr9X9",
  "https://maps.app.goo.gl/xP5Q3rHm7iGNXq1g8",
  "https://maps.app.goo.gl/ZKmU7xoT9n2kSmFr6",
  "https://maps.app.goo.gl/gSoCp373yvstyQCL7",
  "https://maps.app.goo.gl/3LaznCDpdwCoFfkw9",
  "https://maps.app.goo.gl/bNx28udWJKP11kSeA",
  "https://maps.app.goo.gl/AoSSrKhySF8hiDqg8",
  "https://maps.app.goo.gl/3ZUrTX5bshHtmJxBA",
  "https://maps.app.goo.gl/hm1eohdyGxjYVCJAA",
  "https://maps.app.goo.gl/WTbqCvrGqWpPJ3Gs5",
  "https://maps.app.goo.gl/TNw45UdctEmCxKtFA",
  "https://maps.app.goo.gl/jUG9VArxpRx6a3db8",
  "https://maps.app.goo.gl/9h6kwcHKRw3sp8xYA",
];

  const[randomFood,setRandomFood]=useState('');
  const[randomImage,setRandomImage]=useState(null);
  const[randomDirection,setRandomDirection]=useState(null);

  //createRandomFood uses the Math methods to generate a random number that correlates to the array of food and image 
  const createRandomFood = () => {
    const randomNumber = Math.floor(Math.random()*foodPlaces.length);
    const foodSelected = foodPlaces[randomNumber];
    const imageSelected = foodImages[randomNumber];
    const directionSelected = foodDirections[randomNumber];
    setRandomFood(foodSelected);
    setRandomImage(imageSelected);
    setRandomDirection(directionSelected);
      
  } 
  
  
  
  return (
    <div className="randomFoodPage-container">
      
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
      <h3>Let Us Choose For You</h3>
      <h2>Click the button to generate Random Food</h2>

    <div className="randomFood-container">
      <button className="btn" onClick={createRandomFood}>Get Random Food</button>
    </div>
    <p>Random Selected food: {randomFood}</p>
    <img className="randomFood-image" src={randomImage} alt=''/>
    <a href={randomDirection} target="blank" className ="directions">Directions<TiArrowForward></TiArrowForward></a>
    </div>
    
    </div>
    
  )
}


export default RandomFoodSelect;

import React,{useState} from'react'
/*Used Geeksforgeeks tutorial of how to create a random number in ReactJS
*/
const RandomFoodSelect = () => {
  const foodPlaces=["Food Trucks, Jiannetto's Pizza","Pizza Hut","Chipotle","AppleBee's","Teriyaki One","Panda Express","Five Guys","Brooklyn's Best Eat","Fisherman Cove","Burger King","Pronto Cafe","Ashoka Grill","Island Burger","Bake & Things" ,"Gong Cha" ,"Jupioca"];
  const foodImages=["https://4.bp.blogspot.com/-aRwHuMLWwjU/UG8sWFNtclI/AAAAAAAADIc/3A7ZWHwUVag/s1600/Buona+Journata+Brooklyn+College+Food+Truck+1.JPG",
  "https://lh3.googleusercontent.com/p/AF1QipOpn93zxrHq5OKBs-f4ZXlkDa-m-S6SiPe7H9AA=s680-w680-h510",
  "https://www.foodandwine.com/thmb/1SFyk1PbXTkBhNICq80BSwQsl70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chipotle-nyc-lawsuit-FT-BLOG0421-2000-0e002c96177a4206b5bdc3af1a52db69.jpg",
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
  "https://lh3.googleusercontent.com/p/AF1QipNLCvANBuvESjO6dQFZ-HokFaFgf2iqQxgTcXfL=s1360-w1360-h1020"


];  
  const[randomFood,setRandomFood]=useState('');
  const[randomImage,setRandomImage]=useState(null);

  //createRandomFood uses the Math methods to generate a random number that correlates to the array of food and image 
  const createRandomFood = () => {
    const randomNumber = Math.floor(Math.random()*foodPlaces.length);
    const foodSelected = foodPlaces[randomNumber];
    const imageSelected = foodImages[randomNumber];
    setRandomFood(foodSelected);
    setRandomImage(imageSelected);
      
  } 
  
  
  
  return (
    <div className="randomFoodPage-container">
      
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
      <h3>Let Us Choose For You</h3>
      <h2>Click the button to generate random Food</h2>

    <div className="randomFood-container">
      <button onClick={createRandomFood}>Get Random Food</button>
    </div>
    <p>Random Selected food: {randomFood}</p>
    {<img className="randomFood-image" src={randomImage} alt=''/>}</div>
    </div>
  )
}


export default RandomFoodSelect;
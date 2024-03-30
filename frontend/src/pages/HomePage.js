import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const possibleFoodsSearched = [
    {pizza:["Pizza Hut"]},
    {},
    [],

  ]
  ["Food Trucks","Pizza Hut","Chipotle","AppleBee's","Teriyaki One","Panda Express","Five Guys","Brooklyn's Best Eat","Fisherman Cove","Burger King","Pronto Cafe","Ashoka Grill","Island Burger","Bake & Things"]
  const searchForRestaurant = () => {
    console.log(searchTerm); 

  }

  return (
    <div className='homepage-content-container '>
      <h1>Home</h1>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'50%', width:'90%'}}>
        <div>
          <h3>Search by food / category</h3>
        </div>
        <div className='search-container'>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'5px', paddingBottom:'5px', gap:5,borderBottom:'2px solid #882346'}}>
            <input type="text" className='search-bar' onChange={(e) => setSearchTerm(e.target.value)}/>
            <FaMagnifyingGlass style={{cursor:'pointer'}} onClick={searchForRestaurant}/>
          </div>
          searched content
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'50%', width:'90%'}}>
        <div>
          <h3>Select from our comunity recomended option</h3>
        </div>
        <div className='pick-food-container '>
          recomended content goes here
        </div>
      </div>
      
    </div>
    
  )
}

export default HomePage
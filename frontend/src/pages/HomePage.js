import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const HomePage = () => {
  
  const restaurants = [
    { name: "Pizza Hut", keyTerms: ['pizza', 'fast food'] },
    { name: "Teriyaki One", keyTerms: ['asian'] },
    { name: "Panda Express", keyTerms: ['asian'] },
    { name: "Ashoka Grill", keyTerms: ['indian', 'halal'] },
    { name: "Burger King", keyTerms: ['fast food'] },
    { name: "AppleBee's", keyTerms: ['fast food'] },
    { name: "Five Guys", keyTerms: ['fast food'] },
    { name: "Island Burger", keyTerms: ['fast food'] },
    { name: "Bake & Things", keyTerms: ['seafood'] },
    { name: "Fisherman's Cove", keyTerms: ['jamaican'] },
    { name: "Pronto Cafe", keyTerms: ['breakfast', 'dessert'] },
    { name: "Brooklyn's Best Eat", keyTerms: ['sandwiches'] },
    { name: "Chipotle", keyTerms: ['mexican'] }
];
const [filteredData, setFilteredData] = useState(restaurants)
const searchForRestaurant = (e) => {
  const searchQuery = e.target.value.toLowerCase();
  setFilteredData(restaurants.filter((item) => {
      return item.keyTerms.some((keyTerm) => keyTerm.toLowerCase().startsWith(searchQuery));
  }));
};
  return (
    <div className='homepage-content-container '>
      <h1>Home</h1>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', height:'50%', width:'90%'}}>
        <div>
          <h3>Search by food / category</h3>
        </div>
        <div className='search-container'>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'5px', paddingBottom:'5px', gap:5,borderBottom:'2px solid #882346'}}>
            <input type="text" className='search-bar' onChange={searchForRestaurant} placeholder="&#128269; Search..."/>
          </div>
          <div style={{maxHeight:'100%', overflow:'auto'}}>
            <ul>
            {
             filteredData.map((data) => {
              return (
                <li key={data.index}>
                  {data.name}
                  <a target="_blank" href={`https://www.google.com/search?q=${data.name.replace(' ', '+')}+brooklyn+ny+11210`}><FaExternalLinkAlt style={{color:'#882346', marginLeft:'4px'}}/></a>
                </li>
              )
             })
            }
          </ul>
          </div>
          
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
import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const HomePage = () => {
  
  const restaurants = [
    { name: "Pizza Hut", keyTerms: ['pizza', 'fast food'] },
    { name: "Teriyaki One", keyTerms: ['asian'] },
    { name: "Panda Express", keyTerms: ['asian', 'fast food'] },
    { name: "Ashoka Grill", keyTerms: ['indian', 'halal'] },
    { name: "Burger King", keyTerms: ['fast food'] },
    { name: "AppleBee's", keyTerms: ['fast food'] },
<<<<<<< HEAD
    { name: "Five Guys", keyTerms: ['fast food'] },
    { name: "Island Burger", keyTerms: ['fast food'] },
    { name: "Bake and Things", keyTerms: ['seafood'] },
    { name: "Fisherman's Cove", keyTerms: ['jamaican'] },
=======
    { name: "Five Guys", keyTerms: ['fast food', 'burgers'] },
    { name: "Island Burger", keyTerms: ['fast food', 'caribbean'] },
    { name: "Bake and Things", keyTerms: ['trini', 'caribbean' ] },
    { name: "Fisherman's Cove", keyTerms: ['jamaican', 'caribbean'] },
>>>>>>> 767e95d3aab1c1cbbd21c34b342419bf39285752
    { name: "Pronto Cafe", keyTerms: ['breakfast', 'dessert'] },
    { name: "Brooklyn's Best Eat", keyTerms: ['sandwiches'] },
    { name: "Chipotle", keyTerms: ['mexican'] }
  ];
  const firstNames = ["Alex", "Jordan", "Casey", "Drew", "Pat", "Sam", "Taylor", "Jamie", "Morgan", "Chris"];
  const quotes = [
    { text: "The food is so good, I recommend the cheese burger!", category: 'fast food', exclusiveTo: 'Burger King' },
    { text: "Can't get enough of their burgers!", category: 'fast food', exclusiveTo: 'Five Guys' },
    { text: "The best pizza I've ever had!", category: 'pizza' },
    { text: "Incredible service and unforgettable flavors.", category: 'general' },
    { text: "Their seafood menu is a game changer.", category: 'seafood' },
    { text: "The best thing I've ever had!", category: "general" },
    { text: "Brooklyn's Best Eat", category: 'sandwiches' },
    { text: " Best sandwiches Eat", category: 'sandwiches' },
    { text: " Best dessert Ever!", category: 'dessert' },
  ];
  const [randomQuote, setRandomQuote] = useState(null);
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [randomName, setRandomName] = useState(() => firstNames[Math.floor(Math.random() * firstNames.length)]);

  const [filteredData, setFilteredData] = useState(restaurants)
  const searchForRestaurant = (e) => {
  const searchQuery = e.target.value.toLowerCase();
  setFilteredData(restaurants.filter((item) => {
      return item.keyTerms.some((keyTerm) => keyTerm.toLowerCase().startsWith(searchQuery));
  }));
  }
  const getRandomRestaurantAndQuote = () => {
    const randomRestaurantIndex = Math.floor(Math.random() * restaurants.length);
    const selectedRestaurant = restaurants[randomRestaurantIndex];
    setRandomRestaurant(selectedRestaurant);
    const exclusiveQuote = quotes.find(quote => quote.exclusiveTo === selectedRestaurant.name);
    if (exclusiveQuote) {
      setRandomQuote(exclusiveQuote);
      return;
    }
    const matchingQuotes = quotes.filter(quote =>
      selectedRestaurant.keyTerms.includes(quote.category) || quote.category === 'general'
    );
    const randomQuoteIndex = Math.floor(Math.random() * matchingQuotes.length);
    setRandomQuote(matchingQuotes[randomQuoteIndex]);
  };

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * firstNames.length);
    setRandomName(firstNames[randomIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getRandomRestaurantAndQuote();
    }, 60000);
    getRandomRestaurantAndQuote();
    getRandomName();
    return () => clearInterval(intervalId);
  }, []);
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
          <h3>Community recommendations</h3>
        </div>
        <div className='pick-food-container '>
          {randomRestaurant && (
          <h3 style={{ margin: '10px 0', color: "#882346" }}>
            Featured Spot: {randomRestaurant.name}
          </h3>
          )}
          {randomQuote && (
            <div style={{ color: "#555", }}> 
              <p style={{fontStyle: 'italic' }}>{`"${randomQuote.text}"`}</p>
              <p style={{ marginTop: '4px' }}>
                {}
                <strong> - {randomName}</strong>  Food Category: {randomRestaurant.keyTerms.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
      
    </div>
    
  )
}

export default HomePage;
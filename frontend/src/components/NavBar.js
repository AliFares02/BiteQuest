import React from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
       <div className="company-name" >
        <GiKnifeFork className='main-logo' onClick={() => navigate('/')}/>
        <h2 onClick={() => navigate('/')}>BiteQuest</h2>
       </div>
       <div style={{display:'flex', alignItems:'center', gap:'5px', marginRight:'6px'}}>
        <Link style={{color:'white'}} to='/'>Home</Link>
        <p>|</p>
        <Link style={{color:'white'}} to='/random'>Let Us Choose for You</Link>
        <p>|</p>
        <Link style={{color:'white'}} to='/roulette'>Roulette</Link>
        <p>|</p>
        <Link style={{color:'white'}} to='/about'>About</Link>
       </div>
    </nav>
  )
}

export default NavBar
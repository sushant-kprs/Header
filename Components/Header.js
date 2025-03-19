import React from 'react';
import './Header.css';

const Header = () => {


  return (
    <header>
       <img src="/kprs-logo.png" alt="Logo" className='logo'/>
      <h1 className='h' style={{marginTop:"60px"  }}>Welcome to the KPRS IT Services</h1>
      <div className='navigation'>
      <nav>Home</nav>
      <nav>About Us</nav>
      
      <nav>Our Services</nav>
      <nav>Our Goal</nav>
      <nav>  CIN (Corporate Identification Number) U62013DL2024PTC437934. </nav>
      <nav>Sign Up/Login</nav>
      </div>
      
    </header>
  );
};

export default Header;

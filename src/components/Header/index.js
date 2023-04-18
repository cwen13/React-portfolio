import React from 'react';
//import "./../styles/Header.css"
import Navigation from "./../Navigation";

// Need to have About Me, Portfolio, Contact, and Resume
const Header = (props) => {
  return (
    <div className="bg-dark">
      <h1 className="text-center text-light"> Cody  Wenrich </h1>
      <Navigation handleTabSelection={props.handleTabSelection}/> 
    </div>
  );
};

export default Header;


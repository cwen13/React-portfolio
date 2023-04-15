import React from 'react';
//import "./../styles/Header.css"
import Navigation from "./../Navigation";

// Need to have About Me, Portfolio, Contact, and Resume
const Header = (props) => {
  return (
    <div>
      <Navigation handleTabSelection={props.handleTabSelection} />
    </div>
  );
};

export default Header;


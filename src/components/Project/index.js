import React from 'react';
import Portfolio from "./../Portfolio";
//use following for switch statement
/*(() => {
 * switch(page) {
 * case 1:
 * break;
 * case 2:
 * break;
 * .
 * .
 * .
 * default:
 * return null
 */

// need to swtifh between about me, portfolio, contact, and Resume

export Projects = (props) => {

  const AboutMe =() => {
    return (
      
    );
  }
  
  const Contact = () => {
    return (
      
    );
  }
  
  const Resume =() => {
    return (
      
    );
  }

  
  return (
    <body>
      {(() => {
	switch(props.tab) {
	case ("Portfolio"):
	  return <Portfolio />;
	  break;
	case ("Contact"):
	  return <Contact />;
	  break;
	case("Resume"):
	  return <Resume />;
	  break;
	case ("AboutMe"):
	default:
	  return <AboutMe />;
	  break;
	}
      })()}

    </body>
    
  );
}

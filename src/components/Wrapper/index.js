import React, {userState, useEffect} from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";

export Wrapper = () => {
  const [tab, setTab] = useState("AboutMe");

  const handleTab = (e) => {
    // get button switched to
    // update tab
    const [name, value] = e.target;

    switch (value) {
    case "Portfolio":
      return tab = "Portfolio";
    case "Contact":
      return tab = "Contact";
    case "Resume":
      return tab = "Resume";
    case "About Me":
    default:
      return tab = "About Me";
    };
    
    return 0;
  };
  
  return (
    <div>
      <Header />
      <Navigation  />
      <Project tab={handleTab} />
      <Footer />
    </div>
  ); 
}

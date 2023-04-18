import React, {useState, useEffect} from 'react';
import Header from "./../Header";
import Project from "./../Project";
import Footer from "./../Footer";
import Portfolio from "./../Portfolio";

const Wrapper = () => {
  
  const [tab, setTab] = useState("");
  
  const handleTabSelection = (e) => {
    // get button switched to
    // update tab
    const {name, value} = e.target;
    switch (name) {
    case "Portfolio":
      return setTab("Portfolio");
    case "Contact":
      return setTab("Contact");
    case "Resume":
      return setTab("Resume");
    case "About Me":
    default:
      return setTab("About Me");
    }
  };


  
  return (
    <>
      <Header handleTabSelection={handleTabSelection}/> 
      <Project tab={tab} />
      <Footer />
    </>
  ); 
}; 

export default Wrapper;


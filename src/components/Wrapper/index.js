import React, {useState, useEffect} from 'react';
import Header from "./../Header";
import Portfolio from "./../Portfolio";
import Contact from "./../Contact";
import Resume from "./../Resume";
import AboutMe from "./../AboutMe";
import Footer from "./../Footer";

import "./style.css";

const Wrapper = () => {
  
  const [tab, setTab] = useState("");

  useEffect(() => {
    document.title = "Cody Wenrich-Clegg Portfolio";
  },[]);
  
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

  const renderSection = (renderTab) => {
    
    switch(renderTab) {
    case "Portfolio":
      //setTab("Portfolio");
      return (<div className="main"><Portfolio /></div>);
    case "Contact":
      //setTab("Contact");
      return (<div className="main"><Contact /></div>);
    case "Resume":
      //setTab("Resume");
      return (<div className="main"><Resume /></div>);
    case "About Me":
    default:
      //setTab("About Me");
      return (<div className="main"><AboutMe /></div>);
    }
  };  
  
  
  
  return (
    <>
      <Header handleTabSelection={handleTabSelection}/> 
      {renderSection(tab)}
      <Footer />
    </>
  ); 
}; 

export default Wrapper;


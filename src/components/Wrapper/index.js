import React, {useState, useEffect} from 'react';
import Header from "./../Header";
import Project from "./../Project";
import Footer from "./../Footer";

const Wrapper = () => {

  console.log("WRAPPER CONSOLE.LOG");
  
  const [tab, setTab] = useState("");
  
  const handleTabSelection = (e) => {
    // get button switched to
    // update tab
    console.log("WRAPPER SWITCH TAB");
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
      <Project tab={tab} setTab={setTab} />
      <Footer />
    </>
  ); 
}; 

export default Wrapper;


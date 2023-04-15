import React, {useState, useEffect} from 'react';
import Header from "./../Header";
import Project from "./../Project";
import Footer from "./../Footer";

const Wrapper = () => {
  const [tab, setTab] = useState("About Me");

  const handleTabSelection = (e) => {
    // get button switched to
    // update tab
    const {name, value} = e.target;

    switch (value) {
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
      <Header handleTabSelection={handleTabSelection} />
      <Project renderTab={tab} />
      <Footer />
    </>
  ); 
};

export default Wrapper;

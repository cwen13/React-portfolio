import React from 'react';
import ReactDOM from "react-dom";
import portrait from "./assets/images/portrait.jpg";
import "./assets/Raise.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5, faCss3Alt, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";


const AboutMe =() => {
  return (
    <div className="d-flex flex-column align-items-center container-sm">
      <img
	src={portrait}
	alt="portait image of Cody Wenrich"
	height="300"
	style={{borderRadius: "50%",
		margin: "2rem"}}
      />
      <h2>About Me</h2>
      <h3> Skills</h3>
	  
	<div className="fs-3 text-center d-flex flex-row w-50 justify-content-evenly m-3">
	  <div className="d-flex flex-column Raise container-fluid rounded-end rounded-start-pill ">
	    <FontAwesomeIcon icon={faHtml5} className="fs-1"/>
	    <p className="fs-6">HTML5</p>
	  </div>
	  <div className="d-flex flex-column Raise container-fluid  rounded-2">
	    <FontAwesomeIcon icon={faCss3Alt} className="fs-1"/>
	    <p className="fs-6">CSS3</p>
	  </div>
	  <div className="d-flex flex-column Raise container-fluid  rounded-2">
	    <FontAwesomeIcon icon={faNodeJs} className="fs-1"/>
	    <p className="fs-6">JS</p>
	  </div>
	  <div className="d-flex flex-column Raise container-fluid  rounded-2">
	    <FontAwesomeIcon icon={faReact} className="fs-1"/>
	    <p className="fs-6">React</p>
	  </div>
	  <div className="d-flex flex-column Raise container-fluid  rounded-2">
	    <FontAwesomeIcon icon={faDatabase} className="fs-1"/>
	    <p className="fs-6">SQL</p>
	  </div>
	  <div className="d-flex flex-column Raise container-fluid  rounded-end-circle">
	    <FontAwesomeIcon icon={faDatabase} className="fs-1"/>
	    <p className="fs-6">MongoDB</p>
	  </div>
	</div>
	
	<div className="continer w-50"> 
	  <p>
	    After obtaining a BS in Mechanical Engineering computers and software continued to interest me. I wanted to know how they worked and how I could instruct them to do tasks. My first jump into learning to code was in a programming class my freshman year. But by the end of schooling, I was teaching myself python and how to run a Linux machine. My desire to code would get me a few web scraping gigs utilizing both Selenium and Beautiful Soup. I then found myself working in the manufacturing industry at Multilink.
	</p>
	  <p>
	    Starting as an inventory lead, I was quickly promoted and later asked to extend the ERP system with VBScript. That was where I had my first piece of code in a live production system. Doing this on another occasion I followed it up with putting together two python programs that were placed on all employee accessible computer stations. Then finally I scrapped the company's website to help get a feel for what exactly was displaying on it for review.
	</p>
	  <p>
	    I stepped away while receiving my Engineering Intern Certificate and before I started working at Bendix. While at Bendix I was working with excel workbooks with code in them. This drove me to dive back into coding. I researched a few code camps and decided on Case Western Reserve University's program in partnership with 2U/edX.
	</p>
	  <p>
	    Completing CWRU's code camp was the culmination of many years' desires to be able to really learn coding and make a career out of it. I completed the camp in May 2023 and was hired the 2U as a TA for the same course right afterwards. I have begun working with a class and am enjoying my time helping them learn the material. As well as taking time to relearn some of the finer details of the web development course.
	  </p>
	  <p>
	    I did take some time away from code for a little this year as a few things in my life were in transition and resettling down. Now that things are settled, I am working to expand my skills and build projects so I can show my skill set and continuing improvement of abilities. 
	    </p>
      </div>
    </div>
  );
};

export default AboutMe;

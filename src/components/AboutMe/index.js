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
	  I am seeking a position as a web developer for a great company that will foster my developement as a developer.
	</p>
	<p>
	  Having gone to school for mechanical engineering I was always interested in programming. I would think of ways to solve class problems with a program. So in the short time we used matlab I was excited and loved it. But I was too deep in my studies and I thought about changing my major but just finished my degree.
	</p>
	<p>
	  This drive to develop code compelled me to learn how to scrape websites with python and even got a couple of gigs doing it even. In addition, being able to contribute code to the work place helped keep the fire alive in me.
	</p>
	<p>
	  So then while not feeling I was in the right place for me I sought out coding to make the career change. Having done the code camp through CWRU I am nothing but thrilled to see out a job I will not only be capable of doing but will enjoy for a very long time.
	</p>
      </div>
    </div>
  );
};

export default AboutMe;

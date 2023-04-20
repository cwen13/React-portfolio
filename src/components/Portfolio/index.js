import React from 'react';
//import repoInfo from "./../utils/repoInfo";
import programs from "./assets/projectData.json";

import glob_blog from "./assets/images/glob-blog.png";
import pettit from "./assets/images/pettit.png";
import notetaker from "./assets/images/notetaker.png";
import daily_appointments from "./assets/images/daily_appointments.png";
import quizer from "./assets/images/quizer.png";
import explore_cast from "./assets/images/explore-cast.png";
import first_portfolio from "./assets/images/first_portfolio.png";




const Portfolio = () => {

  let images = {
    glob_blog: glob_blog,
    pettit: pettit,
    notetaker: notetaker,
    daily_appointments: daily_appointments,
    quizer: quizer,
    explore_cast: explore_cast,
    first_portfolio: first_portfolio
  };
		
  
  return (
    <>
      <h2 className="text-center">Portfolio</h2>
      <ul className="d-flex flex-column align-items-center">
	{programs.map((program) => (
	  <li>
	    <div className="card d-flex flex-column align-items-center"
		 style={{width: "60rem"}}
	    >	
	      <img className="card-img-top"
		   src={images[program.image]}
		   style={{width: "50rem"}}
	      />
	      <div className="card-body">
		<div className="card-header"> {program.title} </div>
		<ul className="card-body">
		  <li className="list-group-item" ><a href={program.deployed}>Deployed page</a></li>
		  <li className="list-group-item" ><a href={program.repo}>Repo</a></li>
		</ul>
	      </div>
	    </div>
	  </li>
	))}
      </ul>
    </>
  );
};

export default Portfolio;


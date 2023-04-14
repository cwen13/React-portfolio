import React from 'react';

import repoInfo from "./../utils/repoInfo";

// JSX for the repos
export Portfolio = () => {


  const RepoCard = (repo) => 

    return (
      <div className="card" >	
	<img className="card-img-top" src={repo.image} />
	<div className="card-body">
	  <div className="card-header" > repo.title </div>
	  <ul className="card-body">
	    <li className="list-group-item" ><a href={repo.deploy}>Deployed page</a></li>
	    <li className="list-group-item" ><a href={repo.repo}>Repo</a></li>
	  </ul>
	</div>
      </div>
    ); 
  }
  

  return (
    {
      
    	
	
};

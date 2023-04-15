import React from 'react';
//import repoInfo from "./../utils/repoInfo";

const Portfolio = (props) => {

  // JSX for the repos
  const RepoCard = (repo) => {

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
  };
  

  return (
      <div>
	<p> Here is a bunch of filler text</p>
      </div>
  );
};

export default Portfolio;


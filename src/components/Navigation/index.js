import React from 'react';


const Navigation = (props) => {
  return (
      <nav className="d-flex flex-coulumns aling-items-center">
	<h1> Cody  Wenrich </h1>
	<ol className="nav justify-content-center">
	  <li className="nav-item" ><button type="button"
					    name="About Me"
					    className="btn btn-priimary"
					    onClick={props.handleTabSelection}
				    >About Me </button></li>
	  <li className="nav-item" ><button type="button"
					    name="Portfolio"
					    className="btn btn-priimary"
					    onClick={props.handleTabSelection}
				    >Portfolio </button></li>
	  <li className="nav-item" ><button type="button"
					    name="Contact"
					    className="btn btn-priimary"
					    onClick={props.handleTabSelection}
				    >Contact </button></li>
	  <li className="nav-item" ><button type="button"
					    name="Resume"
					    className="btn btn-priimary"
					    onClick={props.handleTabSelection}
				    >Resume </button></li>
	</ol>
      </nav>
  );
};

export default Navigation;


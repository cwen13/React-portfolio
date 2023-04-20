import React from 'react';


const Navigation = (props) => {
  return (
      <nav>
	<ol className="d-flex flex-row nav justify-content-evenly">
	  <li className="nav-item" ><button type="button"
					    name="About Me"
					    className="btn btn-priimary text-light"
					    onClick={props.handleTabSelection}
				    >About Me </button></li>
	  <li className="nav-item" ><button type="button"
					    name="Portfolio"
					    className="btn btn-priimary text-light"
					    onClick={props.handleTabSelection}
				    >Portfolio </button></li>
	  <li className="nav-item" ><button type="button"
					    name="Contact"
					    className="btn btn-priimary text-light"
					    onClick={props.handleTabSelection}
				    >Contact </button></li>
	  <li className="nav-item" ><button type="button"
					    name="Resume"
					    className="btn btn-priimary text-light"
					    onClick={props.handleTabSelection}
				    >Resume </button></li>
	</ol>
      </nav>
  );
};

export default Navigation;


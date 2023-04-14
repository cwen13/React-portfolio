import React from 'react';
import Portfolio from "./../Portfolio";

//use following for switch statement
/*(() => {
 * switch(page) {
 * case 1:
 * break;
 * case 2:
 * break;
 * ...
 * default:
 * return null
 */
// need to switch between about me, portfolio, contact, and Resume

export Projects = (props) => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [comment,setComment] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    setName("");
    setEail("");
    setComment("");
    return 0;
  };

  
  const AboutMe =() => {
    return (
      <div>
	<h2 className=""> </h2>
	<p>
	  I am mechnical Engineer by degree but was pulled to pogramming early on.
	</p>
	<p>
	  After earning my Engineering Intern Certificate I found a job in the purchsing department of a brake  manufactuer. This gave me tremendious amounts of learning how to work with teams all over the world and from the various disciplines. 
	</p>
      </div>
    );
  };
  
  const Contact = () => {
    return (
      <div>
	<form className="form">
	  <label>Name</label>
	  <input
	    value={}
	    name="name"
	    onChange={}
	    type="text"
	    placeholder="Name"
	  />
	  <label>Email</label>
	  <input
	    value={}
	    name="email"
	    onChange={}
	    type="text"
	    placeholder="Email"
	  />
	  <label>Comment</label>
	  <input
	    value={}
	    name="email"
	    onChange={}
	    type="text"
	    placeholder="Comment"
	  />
	</form>
      </div>
    );
  };
  
  const Resume = () => {
    return (
      <div>
	<a href=""><i class="bi bi-file-earmark-person-fill"></i></a>
      </div>
    );
  };

  const renderSection = (tab) => {
	switch(tab) {
	case "Portfolio":
	  return <Portfolio />;
	case "Contact":
	  return <Contact />;
	case "Resume":
	  return <Resume />;
	case "About Me":
	default:
 	  return <AboutMe />;
	}
  };
  
  return (
    <body>
      {this.renderSection(props.handleTab)}
    </body>  
  );
};

import React, {useState} from 'react';
import Portfolio from "./../Portfolio";
import Header from "./../Header";
import Footer from "./../Footer";
import portrait from "./assets/images/portrait.jpg";

// for pdf viewer
import FileViewer from "react-file-viewer";
import resume from "./assets/documents/Resume.pdf";


const Projects = (props) => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [comment,setComment] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // need this to open an email browser
    setName("");
    setEail("");
    setComment("");
    return 0;
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

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
	<p>
	  I am mechnical Engineer by degree but always had a fasication with programming. In my studies I would use MatLab and it gave me such a sense of acomplishment of completeing a challenge. This drive to program led me to self stufy of Python that resulted in a few web scrapping jobs and an oppotunity to write a document search tool for a previous employer.
	</p>
	<p>
	  After earning my Engineering Intern Certificate I found a job in the purchsing department of a brake  manufactuer. This gave me tremendious amounts of learning how to work with teams all over the world and from the various disciplines.
	</p>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div className="container-sm ">
	<h2 className="text-center">Contact</h2>
	<form className="form">
	  <div className="mb-3">
	    <label className="form-label">Name</label>
	    <input
	      className="form-control"
	      value={name}
	      name="name"
	      onChange={handleNameChange}
	      type="text"
	      placeholder="Name"
	    />
	  </div>
	  <div className="mb-3">
	    <label className="form-label">Email</label>
	    <input
	      className="form-control"
	      value={email}
	      name="email"
	      onChange={handleEmailChange}
	      type="text"
	      placeholder="Email"
	    />
	  </div>
	  <div className="mb-3">
	    <label className="form-label">Comment</label>
	    <input
	      className="form-control"
	      value={comment}
	      name="email"
	      onChange={handleCommentChange}
	      type="text"
	      placeholder="Comment"
	    />
	  </div>
	  <button
	    onClick={handleFormSubmit}
	    className="position-relative bottom-0 start-50 translate-middle-x"
	  >Send it!</button>
	</form>
      </div>
    );
  };
  
  const Resume = () => {
    return (
//      <>
//	<h2 className="text-center">Resume</h2>
//	<a href=""><i className="bi bi-file-earmark-person-fill">RESUME</i></a>
//      </>
    //    );
      <div className="text-center">
	<h2 className="">Resume</h2>
	<a href={resume}><h3>Download</h3></a>
	<FileViewer
	  fileType={"pdf"}
	  filePath={resume}	
	/>
      </div>
    );
  };


  const renderSection = (renderTab) => {
    
    switch(renderTab) {
    case "Portfolio":
      //setTab("Portfolio");
      return <Portfolio />;
    case "Contact":
      //setTab("Contact");
      return <Contact />;
    case "Resume":
      //setTab("Resume");
      return <Resume />;
    case "About Me":
    default:
      //setTab("About Me");
      return <AboutMe />;
    }
  };

  
  
  return (
    <>
      {renderSection(props.tab)};
    </>
  );
};

export default Projects;


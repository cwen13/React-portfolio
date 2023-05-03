import React from 'react';
import "./style.css";

const styles = {
  github: {
    fontSize: "2rem"
  },

  linkedIn: {
    fontSize: "2rem"
  },

  stackoverflow: {
    fontSize: "2rem"
  }
};


const Footer = () => {
  return (
      <footer className="continer-fluid bg-danger fixed-bottom p-2">
	<ul className="d-flex flex-row justify-content-evenly">
	  <li>
	    <a href="https://github.com/cwen13">
	      <i className="bi bi-github text-warning"
	      style={styles.github}></i></a>
	  </li>
	  <li>
	    <a href="https://www.linkedin.com/in/cody-wenrich-864733254/">
	      <i className="bi bi-linkedin text-warning"
	      style={styles.linkedIn}></i></a>
	  </li>
	  <li>
	    <a href="https://stackoverflow.com/users/20827307/cwen13">
	      <i className="bi bi-stack-overflow text-warning"
		 style={styles.stackoverflow}></i></a>
	  </li>
	</ul>
      </footer>
  );
};

export default Footer;


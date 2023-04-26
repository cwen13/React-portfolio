import React from 'react';
import portrait from "./assets/images/portrait.jpg";

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
	I am seeking a position as a web developer for a great company taht will foster my developement as a developer.
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
  );
};

export default AboutMe;

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
	I am seeking a position as a web developer for a great company
      </p>
      <p>
	I am mechnical Engineer by degree but always had a fasication with programming. In my studies I would use MatLab and it gave me such a sense of acomplishment of completeing a challenge. This drive to program led me to self stufy of Python that resulted in a few web scrapping jobs and an oppotunity to write a document search tool for a previous employer.
      </p>
      <p>
	since then I received my Engineering Intern certifate and completed a edX code camp thorught Case WEstern Reserve University. This camp was thrilling and truely feels like I am in the right field of engineering.
      </p>
    </div>
  );
};

export default AboutMe;

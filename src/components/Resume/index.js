import React from 'react';

// for pdf viewer
import FileViewer from "react-file-viewer";
import resume from "./assets/documents/Resume.pdf";


const Resume = () => {
  return (
    <div className="text-center">
      <h2>Resume</h2>
      <a href={resume}><h3>Download</h3></a>
      <FileViewer
	fileType={"pdf"}
	filePath={resume}	
      />
    </div>
  );
};

export default Resume;

import React, {useState}from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

import "./assets/style/style.css";

//import dotenv from "dotenv"
//dotenv.config({path:"./../../../.env"});

//const SERVICE_ID=process.env.SERVICE_ID;
//const TEMPLATE_ID=pocess.env.TEMPLATE_ID;
//const USER_ID=process.env.USER_ID
const USER_ID="0ISkd6Qz7gw5hlngp";
const TEMPLATE_ID="template_l96j6eu";
const SERVICE_ID="service_o3mj95k";

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [comment,setComment] = useState("");
  
//  const handleFormSubmit = (e) => {
//    e.preventDefault();
//    // need this to open an email browser
//    setName("");
//    setEmail("");
//    setComment("");
//    return 0;
//  };
//  
  const handleTextChange = (e) => {
    let {target} = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setComment(inputValue);
    } 
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      });
    e.target.reset();
  };
  
  return (
    <div className="container-sm ">
      <h2 className="text-center">Contact</h2>
      <Form onSubmit={handleOnSubmit}>
	<Form.Field
	  id="form-input-control-email"
          control={Input}
          label="Email"
          name="email"
          placeholder="Email..."
          required
          icon="mail"
          iconPosition="left"
	/>
	<Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="name"
          placeholder="Name..."
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Comment"
          name="comment"
          placeholder="Comment..."
          required
        />
        <Button type="submit" color="green">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;



//      <form
//	className="form"
//	method="POST"
//	action={{loadEvents}}
//	>
//	<div className="mb-3">
//	  <label className="form-label">Name</label>
//	  <input
//	    id="name"
//	    className="form-control"
//	    value={name}
//	    name="name"
//	    onChange={handleTextChange}
//	    type="text"
//	    placeholder="Name"
//	  />
//	</div>
//	<div className="mb-3">
//	  <label className="form-label">Email</label>
//	  <input
//	    id="email"
//	    className="form-control"
//	    value={email}
//	    name="email"
//	    onChange={handleTextChange}
//	    type="text"
//	    placeholder="Email"
//	    required
//	  />
//	</div>
//	<div className="mb-3">
//	  <label className="form-label">Comment</label>
//	  <input
//	    id="comment"
//	    className="form-control"
//	    value={comment}
//	    name="comment"
//	    onChange={handleTextChange}
//	    type="text"
//	    placeholder="Comment"
//	  />
//	</div>
//
//	<a
//	  id="submit-comment"
//	  className="btn btn-primary position-relative bottom-0 start-50 translate-middle-x"
//	  href=""
//	>
//	  Send it
//	  </a>
//

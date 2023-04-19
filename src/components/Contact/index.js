import React, {useState} from 'react';


const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [comment,setComment] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // need this to open an email browser
    setName("");
    setEmail("");
    setComment("");
    return 0;
  };
  
  const handleTextChange = (e) => {
    let {target} = e;
    console.log(target);
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
	    onChange={handleTextChange}
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
	    onChange={handleTextChange}
	    type="text"
	    placeholder="Email"
	    required
	  />
	</div>
	<div className="mb-3">
	  <label className="form-label">Comment</label>
	  <input
	    className="form-control"
	    value={comment}
	    name="comment"
	    onChange={handleTextChange}
	    type="text"
	    placeholder="Comment"
	  />
	</div>

	<a
	  id="submit"
	  className="btn btn-primary position-relative bottom-0 start-50 translate-middle-x"
	>
	  Send it
	  </a>

      </form>
    </div>
  );
};

export default Contact;

//	<button
//	  onClick={handleFormSubmit}
//	  className="position-relative bottom-0 start-50 translate-middle-x"
//	>Send it!</button>

import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log(formData);
    
    formData.append("access_key", "2ad69cb2-ae98-41b7-86f5-66c154ad5004");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    const [value, setvalue] = useState("")

    function handlechange(e){
        let text = e.target.value
        if(/^\d*$/.test(text)){
            setvalue(text)
        }
    }

  return (
    <div className="contact" id="contact">
      <div className="col-contact">
        <h3>Ahmed Ashraf</h3>
        <p>
            feel free to contact me but :
         <span style={{color:"red"}}> you should be carful because anything you write in the input and send 
         i will know as I link my email to this form Therefore, caution must be made</span>
        </p>
        <ul>
          <li>
            <i className="fa-brands fa-facebook"></i>
            <a target="_blank" href="https://www.facebook.com/amhed.ashraf.5">facebook</a>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            <a target="_blank" href="https://www.linkedin.com/in/ahmed-ashraf-2a0146320/">
              linked in
            </a>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>aaboshady59@gmail.com
          </li>
        </ul>
      </div>
      <div className="col-contact">
        <form onSubmit={onSubmit}>
            <label htmlFor="name">
                Enter your name
            </label>
            <input type="text" name="name" id="name" placeholder="Enter your name" required />
            <label htmlFor="phone">Enter your phone</label>
            <input type="text" value={value} onChange={handlechange} name="phone" id="phone" placeholder="Enter your phone" required/>
            <label htmlFor="message">Enter your message</label>
            <textarea name="message" id="message" placeholder="Enter your message" rows={6}></textarea>
            <button className="btn">{result !== ""?result:"send"}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

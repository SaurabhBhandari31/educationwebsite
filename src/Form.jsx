import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [fullName, setFullName] = useState({
    username: "",
    password: "",
    email: "",
    phone: ""
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // const value=event.target.value;
    // const name=event.target.name;
    const { name, value } = event.target;
    setFullName({...fullName, [name] : value})
  }
  const onSumits = (event) =>{
    event.preventDefault();
    alert(`form submited...  username is ${fullName.username} email is ${fullName.email} phone number is ${fullName.phone} `);
    setFullName({
    username: "",
    password: "",
    email: "",
    phone: "" 
  });     
  }
  return (
    <>
     
      <div className="main_div">
        <form onSubmit={onSumits}>
          <div>
          <h1 className="text-center font-weight-bold">Feel Free to Ask Anything</h1>
            <div className="inputsection">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter username"
              name="username"
              onChange={inputEvent}
              value={fullName.username}
            />
            <br/>
            <br/>
            <input
              type="password"
              autoComplete="off"
              placeholder="Enter your password"
              name="password"
              onChange={inputEvent}
              value={fullName.password}
            />
            <br/>
            <br/>
            <input
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <br/>
            <br/>
            <input
              type="number"
              autoComplete="off"
              placeholder="Enter your phone number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br/>
            <br/>
            <button type="submit">Click here</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );

}

export default Form;

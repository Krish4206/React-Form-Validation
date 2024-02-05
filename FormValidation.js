import { useState } from "react";
function FormValidation() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameErrorr, setNameError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const regExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameHandler = (e) => {
    const name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(name);
  };
  const emailHandler = (e) => {
    const email = e.target.value;
    if (!email.match(regExpression)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    setEmail(email);
  };
  const formHandler = (e) => {
    e.preventDefault();
    //alert(e.target[0].value + " " + e.target[1].value);
    const name = e.target[0].value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    const email = e.target[1].value;
    if (!email.match(regExpression)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    if (!name.length < 3 && email.match(regExpression)) {
      alert("Form has been Submitted..");
      alert("name= " + name + "email= " + email);
    }
  };
  return (
    <>
      <div>
        <h1>Form Validation In React </h1>
        <form onSubmit={formHandler}>
          <label> Enter Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={nameHandler}
          />
          <br />
          {nameErrorr ? (
            <span style={{ color: "red" }}>
              Name Error Must Be Greater than 2 character
            </span>
          ) : (
            ""
          )}
          <br />
          <label> Enter Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={emailHandler}
          />
          <br />
          {errorEmail ? (
            <span style={{ color: "red" }}>Invalid Email</span>
          ) : (
            " "
          )}
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    </>
  );
}
export default FormValidation;

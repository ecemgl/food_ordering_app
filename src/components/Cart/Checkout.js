import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
import React from "react";

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    email: true,
  });

  const emailInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    const enteredEmailIsValid = enteredEmail.match(validRegex);

    setFormInputValidity({
      email: enteredEmailIsValid,
    });

    const formIsValid = enteredEmailIsValid 

    if (!formIsValid) {
      return;
    }
    //submit the cart data
    props.onSubmit({
      email: enteredEmail,
    });
  };

  //css classes
  const emailControlClasses = `${classes.control} ${
    formInputValidity.email ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={emailControlClasses}>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" ref={emailInputRef} />
        {!formInputValidity.email && <p>Lütfen geçerli bir mail adresi girin!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Kapat
        </button>
        <button className={classes.submit}>Onayla</button>
      </div>
    </form>
  );
};

export default Checkout;

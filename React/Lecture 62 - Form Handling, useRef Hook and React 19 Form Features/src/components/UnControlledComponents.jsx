import React, { useState } from "react";

function UnControlledComponents() {
  function signUp(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  }

  return (
    <div>
      <h2>Form in React</h2>

      <form action="" onSubmit={signUp}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="pass">Password : </label>
        <input type="text" name="pass" id="pass" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControlledComponents;

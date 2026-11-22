import React, { useState } from "react";

function ControlledComponents() {
  const [form, setForm] = useState({
    name: "farhan",
    email: "farhan@gmail.com",
    pass: "",
  });

  function signUp(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleInput(e) {
    const { value, name } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>Form in React</h2>

      <form action="" onSubmit={signUp}>
        <label htmlFor="name">Name : </label>
        <input value={form.name} type="text" name="name" id="name" onChange={handleInput}/>
        <br />
        <label htmlFor="email">Email : </label>
        <input value={form.email} type="text" name="email" id="email" onChange={handleInput}/>
        <br />
        <label htmlFor="pass">Password : </label>
        <input type="text" name="pass" id="pass" onChange={handleInput} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ControlledComponents;

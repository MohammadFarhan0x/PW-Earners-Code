import React from "react";
import {useNavigate} from "react-router"

function Login() {
    
   const navigate = useNavigate()

  function signUp(e) {
    e.preventDefault();
      console.log("logged In....");
      navigate("/dashboard")
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={signUp}>
        <input type="text" name="username" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;

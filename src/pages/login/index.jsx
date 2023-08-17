import React from "react";
import Header from "../../components/Header/header";

function Login() {
  return (
    <>
      <Header />
      <div className="login-form">
        <h3>Log in to your eBook account</h3>
        <form action="" method="post">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" className="input1" required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" className="input1" required />
          <br />
         <a href="/view"><button className="btn">log in</button></a>
        </form>
        <hr style={{ width: "250px" }} />
        <span>
          Don't have an account? <a href="/signup">Sign up</a>
        </span>
      </div>
    </>
  );
}

export default Login;

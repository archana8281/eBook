import React from "react";
import Header from "../../components/Header/header";

function Signup() {
  return (
    <div>
      <Header />
      {/* <video autoplay muted loop id="myVideo">
  <source src="/images/vidback.mp4" type="video/mp4"/>
</video> */}
      <div className="login-form">
        <h3>Sign up and start learning</h3>
        <form action="" method="post">
          <label htmlFor="fname">Full name</label>
          <br />
          <input type="text" name="fname" className="input1" required />
          <br />
          <label htmlFor="subject">Subject</label>
          <br />
          <input type="text" name="subject" className="input1" required />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" className="input1" required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" className="input1" required />
          <br />
          <button className="btn">Sign up</button>
        </form>
        <hr style={{width: '250px'}} />
      <span>Already have an account? <a href='/login'>log in</a></span>
      </div>
    </div>
  );
}

export default Signup;

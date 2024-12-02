import React, { useState } from "react";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggle = () => {
    setIsRegistering((prevState) => !prevState);
  };

  return (
    <div className="login_page_wrapper">
      <div className={`container p-0 ${isRegistering ? "active" : ""}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form action="#">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p>or login with social platforms</p>
            {/* <div className="social-icons">
              <a href="#">
              <i class="fab fa-google"></i>
              </a>
              <a href="#">
              <i class="fab fa-facebook-f"></i>
              </a>
             
            </div> */}
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box register">
          <form action="#">
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <p>or register with social platforms</p>
            {/* <div className="social-icons">
              <a href="#">
              <i class="fab fa-google"></i>
              </a>
              <a href="#">
              <i class="fab fa-facebook-f"></i>
              </a>
             
            </div> */}
          </form>
        </div>

        {/* Toggle Box */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={handleToggle}>
              Register
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={handleToggle}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

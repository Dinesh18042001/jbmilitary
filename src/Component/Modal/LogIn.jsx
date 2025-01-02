import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery-validation";
import { Link } from "react-router-dom";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setIsRegistering((prevState) => !prevState);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle your registration logic here (form validation, API call, etc.)
    console.log("Registering:", email, password);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Submit the login form manually
    if ($("#loginForm").valid()) {
      console.log("Login Success:", email, password);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Submit the registration form manually
    if ($("#registerForm").valid()) {
      console.log("Registration Success:", email, password);
    }
  };

  useEffect(() => {
    // Validate Login Form
    $("#loginForm").validate({
      rules: {
        loginUsername: {
          required: true,
          minlength: 3,
        },
        loginPassword: {
          required: true,
          minlength: 6,
        },
      },
      messages: {
        loginUsername: {
          required: "Please enter your username",
          minlength: "Username must be at least 3 characters",
        },
        loginPassword: {
          required: "Please enter your password",
          minlength: "Password must be at least 6 characters",
        },
      },
    });

    // Validate Registration Form
    $("#registerForm").validate({
      rules: {
        registerUsername: {
          required: true,
          minlength: 3,
        },
        registerEmail: {
          required: true,
          email: true,
        },
        registerPassword: {
          required: true,
          minlength: 6,
        },
      },
      messages: {
        registerUsername: {
          required: "Please enter your username",
          minlength: "Username must be at least 3 characters",
        },
        registerEmail: {
          required: "Please enter your email",
          email: "Please enter a valid email address",
        },
        registerPassword: {
          required: "Please enter your password",
          minlength: "Password must be at least 6 characters",
        },
      },
    });
  }, []);

  return (
    <div className="login_page_wrapper">
      <div className={`container p-0 ${isRegistering ? "active" : ""}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form id="loginForm" action="#">
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                name="loginUsername"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="loginPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <Link to="#">Forgot Password?</Link>
            </div>
            {/* Using Link to submit the form */}
            <Link
              to="#"
              className="btn"
              onClick={handleLoginSubmit}
            >
              Login
            </Link>
            <p>
              Don't have an account?{" "}
              <Link to="#" onClick={handleToggle}>
                Register
              </Link>
            </p>
          </form>
        </div>

        {/* Registration Form */}
        <div className="form-box register">
          <form id="registerForm" onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                name="registerUsername"
                placeholder="Username"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="registerEmail"
                placeholder="Email"
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="registerPassword"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            {/* Using Link to submit the form */}
            <Link
              to="#"
              className="btn"
              onClick={handleRegisterSubmit}
            >
              Register
            </Link>
            <p>
              You have already an account?{" "}
              <Link to="#" onClick={handleToggle}>
                Login
              </Link>
            </p>
          </form>
        </div>

        {/* Toggle Box */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <Link to="#" className="btn register-btn" onClick={handleToggle}>
              Register
            </Link>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <Link to="#" className="btn login-btn" onClick={handleToggle}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

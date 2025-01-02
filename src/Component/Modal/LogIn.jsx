// import React, { useState, useEffect } from "react";
// import $ from "jquery";
// import "jquery-validation";
// import { Link } from "react-router-dom";

// const App = () => {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleToggle = () => {
//     setIsRegistering((prevState) => !prevState);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     // Handle your registration logic here (form validation, API call, etc.)
//     console.log("Registering:", email, password);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     // Submit the login form manually
//     if ($("#loginForm").valid()) {
//       console.log("Login Success:", email, password);
//     }
//   };

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     // Submit the registration form manually
//     if ($("#registerForm").valid()) {
//       console.log("Registration Success:", email, password);
//     }
//   };

//   useEffect(() => {
//     // Validate Login Form
//     $("#loginForm").validate({
//       rules: {
//         loginUsername: {
//           required: true,
//           minlength: 3,
//         },
//         loginPassword: {
//           required: true,
//           minlength: 6,
//         },
//       },
//       messages: {
//         loginUsername: {
//           required: "Please enter your username",
//           minlength: "Username must be at least 3 characters",
//         },
//         loginPassword: {
//           required: "Please enter your password",
//           minlength: "Password must be at least 6 characters",
//         },
//       },
//     });

//     // Validate Registration Form
//     $("#registerForm").validate({
//       rules: {
//         registerUsername: {
//           required: true,
//           minlength: 3,
//         },
//         registerEmail: {
//           required: true,
//           email: true,
//         },
//         registerPassword: {
//           required: true,
//           minlength: 6,
//         },
//       },
//       messages: {
//         registerUsername: {
//           required: "Please enter your username",
//           minlength: "Username must be at least 3 characters",
//         },
//         registerEmail: {
//           required: "Please enter your email",
//           email: "Please enter a valid email address",
//         },
//         registerPassword: {
//           required: "Please enter your password",
//           minlength: "Password must be at least 6 characters",
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className="login_page_wrapper">
//       <div className={`container p-0 ${isRegistering ? "active" : ""}`}>
//         {/* Login Form */}
//         <div className="form-box login">
//           <form id="loginForm" action="#">
//             <h1>Login</h1>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="loginUsername"
//                 placeholder="Username"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <i className="bx bxs-user"></i>
//             </div>
//             <div className="input-box">
//               <input
//                 type="password"
//                 name="loginPassword"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <i className="bx bxs-lock-alt"></i>
//             </div>
//             <div className="forgot-link">
//               <Link to="#">Forgot Password?</Link>
//             </div>
//             {/* Using Link to submit the form */}
//             <Link
//               to="#"
//               className="btn"
//               onClick={handleLoginSubmit}
//             >
//               Login
//             </Link>
//             <p>
//               Don't have an account?{" "}
//               <Link to="#" onClick={handleToggle}>
//                 Register
//               </Link>
//             </p>
//           </form>
//         </div>

//         {/* Registration Form */}
//         <div className="form-box register">
//           <form id="registerForm" onSubmit={handleRegisterSubmit}>
//             <h1>Registration</h1>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="registerUsername"
//                 placeholder="Username"
//                 required
//               />
//               <i className="bx bxs-user"></i>
//             </div>
//             <div className="input-box">
//               <input
//                 type="email"
//                 name="registerEmail"
//                 placeholder="Email"
//                 required
//               />
//               <i className="bx bxs-envelope"></i>
//             </div>
//             <div className="input-box">
//               <input
//                 type="password"
//                 name="registerPassword"
//                 placeholder="Password"
//                 required
//               />
//               <i className="bx bxs-lock-alt"></i>
//             </div>
//             {/* Using Link to submit the form */}
//             <Link
//               to="#"
//               className="btn"
//               onClick={handleRegisterSubmit}
//             >
//               Register
//             </Link>
//             <p>
//               You have already an account?{" "}
//               <Link to="#" onClick={handleToggle}>
//                 Login
//               </Link>
//             </p>
//           </form>
//         </div>

//         {/* Toggle Box */}
//         <div className="toggle-box">
//           <div className="toggle-panel toggle-left">
//             <h1>Hello, Welcome!</h1>
//             <p>Don't have an account?</p>
//             <Link to="#" className="btn register-btn" onClick={handleToggle}>
//               Register
//             </Link>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Welcome Back!</h1>
//             <p>Already have an account?</p>
//             <Link to="#" className="btn login-btn" onClick={handleToggle}>
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from "react";
// import $ from "jquery";
// import "jquery-validation";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiEye, FiEyeOff } from "react-icons/fi";  // Import eye icons
// import { ForgotPassword } from "./ForgotPassword";

// const App = () => {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullname] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);  // State to toggle password visibility

//   // Toggle between Login and Register forms
//   const handleToggle = () => {
//     setIsRegistering((prevState) => !prevState);
//   };

//   // Toggle Password Visibility
//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };


  
//   // Handle User Registration
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const userData = {
//       fullName,
//       email,
//       password,
//     };

//     try {
//       const response = await fetch("https://jb-node.onrender.com/api/v1/user/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Registration successful! 🎉");
//         console.log("Registration Success:", data);
//       } else {
//         toast.error(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       toast.error("Something went wrong. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle User Login
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const loginData = {
//       email,
//       password,
//     };

//     try {
//       const response = await fetch("https://jb-node.onrender.com/api/v1/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Login successful! 🚀");
//         console.log("Login Success:", data);
//         // Store token in localStorage or sessionStorage if provided
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//       } else {
//         toast.error(data.message || "Login failed!");
//       }
//     } catch (error) {
//       toast.error("Something went wrong. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Initialize Form Validation on Component Mount
//   useEffect(() => {
//     // Validate Login Form
//     $("#loginForm").validate({
//       rules: {
//         loginUsername: {
//           required: true,
//           minlength: 3,
//         },
//         loginPassword: {
//           required: true,
//           minlength: 6,
//         },
//       },
//       messages: {
//         loginUsername: {
//           required: "Please enter your username",
//           minlength: "Username must be at least 3 characters",
//         },
//         loginPassword: {
//           required: "Please enter your password",
//           minlength: "Password must be at least 6 characters",
//         },
//       },
//     });

//     // Validate Registration Form
//     $("#registerForm").validate({
//       rules: {
//         registerUsername: {
//           required: true,
//           minlength: 3,
//         },
//         registerEmail: {
//           required: true,
//           email: true,
//         },
//         registerPassword: {
//           required: true,
//           minlength: 6,
//         },
//       },
//       messages: {
//         registerUsername: {
//           required: "Please enter your username",
//           minlength: "Username must be at least 3 characters",
//         },
//         registerEmail: {
//           required: "Please enter your email",
//           email: "Please enter a valid email address",
//         },
//         registerPassword: {
//           required: "Please enter your password",
//           minlength: "Password must be at least 6 characters",
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className="login_page_wrapper">
//       <ToastContainer />
//       <div className={`container p-0 ${isRegistering ? "active" : ""}`}>
//         {/* Login Form */}
//         <div className="form-box login">
//           <form id="loginForm" onSubmit={handleLoginSubmit}>
//             <h1>Login</h1>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="loginUsername"
//                 placeholder="Username"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <i className="bx bxs-user"></i>
//             </div>
//             <div className="input-box password-field">
//               <input
//                 type={passwordVisible ? "text" : "password"}  // Toggle password type
//                 name="loginPassword"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <i className="bx bxs-lock-alt"></i>
//               <span
//                 className="eye-icon"
//                 onClick={togglePasswordVisibility}  // Toggle the password visibility
//               >
//                 {passwordVisible ? <FiEyeOff /> : <FiEye />}
//               </span>
//             </div>
//             <div className="forgot-link">
//               <Link to="#" onClick={handleShow}>Forgot Password?</Link>
//             </div>
//             <button
//               type="submit"
//               className="btn"
//               disabled={isLoading}
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>
//             <p>
//               Don't have an account?{" "}
//               <Link to="#" onClick={handleToggle}>
//                 Register
//               </Link>
//             </p>
//           </form>
//         </div>

//         {/* Registration Form */}
//         <div className="form-box register">
//           <form id="registerForm" onSubmit={handleRegister}>
//             <h1>Registration</h1>
//             <div className="input-box">
//               <input
//                 type="text"
//                 name="registerUsername"
//                 placeholder="Fullname"
//                 value={fullName}
//                 onChange={(e) => setFullname(e.target.value)}
//                 required
//               />
//               <i className="bx bxs-user"></i>
//             </div>
//             <div className="input-box">
//               <input
//                 type="email"
//                 name="registerEmail"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <i className="bx bxs-envelope"></i>
//             </div>
//             <div className="input-box password-field">
//               <input
//                 type={passwordVisible ? "text" : "password"}  // Toggle password type for registration
//                 name="registerPassword"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <i className="bx bxs-lock-alt"></i>
//               <span
//                 className="eye-icon"
//                 onClick={togglePasswordVisibility}  // Toggle the password visibility
//               >
//                 {passwordVisible ? <FiEyeOff /> : <FiEye />}
//               </span>
//             </div>
//             <button
//               type="submit"
//               className="btn"
//               disabled={isLoading}
//             >
//               {isLoading ? "Registering..." : "Register"}
//             </button>
//             <p>
//               Already have an account?{" "}
//               <Link to="#" onClick={handleToggle}>
//                 Login
//               </Link>
//             </p>
//           </form>
//         </div>

//         {/* Toggle Box */}
//         <div className="toggle-box">
//           <div className="toggle-panel toggle-left">
//             <h1>Hello, Welcome!</h1>
//             <p>Don't have an account?</p>
//             <Link to="#" className="btn register-btn" onClick={handleToggle}>
//               Register
//             </Link>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Welcome Back!</h1>
//             <p>Already have an account?</p>
//             <Link to="#" className="btn login-btn" onClick={handleToggle}>
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//       <ForgotPassword/>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import $ from "jquery";
import "jquery-validation";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";  // Import eye icons
import { ForgotPassword } from "./ForgotPassword";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);  // State to toggle password visibility
  const [showModal, setShowModal] = useState(false);  // State to manage modal visibility

  // Toggle between Login and Register forms
  const handleToggle = () => {
    setIsRegistering((prevState) => !prevState);
  };

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle User Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      fullName,
      email,
      password,
    };

    try {
      const response = await fetch("https://jb-node.onrender.com/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful! 🎉");
        console.log("Registration Success:", data);
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle User Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("https://jb-node.onrender.com/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful! 🚀");
        console.log("Login Success:", data);
        // Store token in localStorage or sessionStorage if provided
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize Form Validation on Component Mount
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

  // Show the ForgotPassword modal
  const handleShow = () => setShowModal(true);

  // Hide the ForgotPassword modal
  const handleClose = () => setShowModal(false);

  return (
    <div className="login_page_wrapper">
      <ToastContainer />
      <div className={`container p-0 ${isRegistering ? "active" : ""}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form id="loginForm" onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                name="loginUsername"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box password-field">
              <input
                type={passwordVisible ? "text" : "password"}  // Toggle password type
                name="loginPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bxs-lock-alt"></i>
              <span
                className="eye-icon"
                onClick={togglePasswordVisibility}  // Toggle the password visibility
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="forgot-link">
              <Link to="#" onClick={handleShow}>Forgot Password?</Link>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
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
          <form id="registerForm" onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                name="registerUsername"
                placeholder="Fullname"
                value={fullName}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="registerEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box password-field">
              <input
                type={passwordVisible ? "text" : "password"}  // Toggle password type for registration
                name="registerPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="bx bxs-lock-alt"></i>
              <span
                className="eye-icon"
                onClick={togglePasswordVisibility}  // Toggle the password visibility
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <button
              type="submit"
              className="btn"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            <p>
              Already have an account?{" "}
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
      <ForgotPassword show={showModal} onClose={handleClose} />
    </div>
  );
};

export default App;


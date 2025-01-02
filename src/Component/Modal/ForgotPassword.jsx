import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import "jquery-validation";

export const ForgotPassword = ({ show, onClose }) => {
  const navigate = useNavigate(); 

  // Initialize jQuery validation when component mounts
  useEffect(() => {
    $("#forgotPasswordForm").validate({
      rules: {
        email: {
          required: true,
          email: true, 
        },
      },
      messages: {
        email: {
          required: "Please enter your email address",
          email: "Please enter a valid email address",
        },
      }
    });
  }, []);

  // Function to handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    if ($("#forgotPasswordForm").valid()) {
      // Proceed with desired action after validation passes, for example:
      // Close the modal
      onClose();

      // Optionally, navigate to another page after password reset (e.g., login page)
      // navigate("/login");  // Uncomment this line if you want to navigate

      // Or simply perform another action if needed (e.g., reset the form)
    }
  };

  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="forgotPasswordForm" className="forgot-password-section">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Enter registered email.
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="forget-pass-btn">
              {/* Use Link with an onClick handler */}
              <Link to="#" className="btn w-100" onClick={handleSubmit}>
                Reset Password
              </Link>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

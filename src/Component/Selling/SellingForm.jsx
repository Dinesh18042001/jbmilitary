import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function SellingForm() {
  return (
    <>
      <div className="selling_form">
        <div className="container">
          <div className="row">
            <h4 className="text-center">Your Details What are you Selling?</h4>
          </div>
          <div className="form_bx">
            <div className="row justify-content-center">
              <Form className="row justify-content-center">
                <div className="col-lg-6 col-xl-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                </div>
                <div className="col-lg-6 col-xl-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Control type="number" placeholder=" Your Number" />
                  </Form.Group>
                </div>

                <div className="col-lg-6 col-xl-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </div>

                <div className="col-lg-6 col-xl-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Control type="name" placeholder="Type product name" />
                  </Form.Group>
                </div>

                <div className="col-lg-6 col-xl-6">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Control type="name" placeholder="Type Price" />
                  </Form.Group>
                </div>

                <div className="col-lg-6 col-xl-6">
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </div>

                <div className="col-lg-12 col-xl-12">
                <Button type="submit" className="w-100">Send Message</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react';

// export default function AddressModal() {
//   return (
//     <>
//       {/* Modal */}
//       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Enter Address</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               {/* Modal content */}
//               <form>
//                 <div className="row">
//                   {/* Country */}
//                   <div className="col-lg-6 mb-3">
//                     <div className="custom-input-container">
//                       <input type="text" id="countryInput" className="custom-input" />
//                       <label htmlFor="countryInput" className="custom-label">Country</label>
//                     </div>
//                   </div>

//                   {/* Street Address */}
//                   <div className="col-lg-6 mb-3">
//                     <div className="custom-input-container">
//                       <input type="text" id="addressInput" className="custom-input" />
//                       <label htmlFor="addressInput" className="custom-label">Street Address</label>
//                     </div>
//                   </div>

//                   {/* Suburb */}
//                   <div className="col-lg-6 mb-3">
//                     <div className="custom-input-container">
//                       <input type="text" id="suburbInput" className="custom-input" />
//                       <label htmlFor="suburbInput" className="custom-label">Suburb</label>
//                     </div>
//                   </div>

//                   {/* State */}
//                   <div className="col-lg-6 mb-3">
//                     <div className="custom-input-container">
//                       <input type="text" id="stateInput" className="custom-input" />
//                       <label htmlFor="stateInput" className="custom-label">State</label>
//                     </div>
//                   </div>

//                   {/* Pincode */}
//                   <div className="col-lg-6 mb-3">
//                     <div className="custom-input-container">
//                       <input type="text" id="pincodeInput" className="custom-input" />
//                       <label htmlFor="pincodeInput" className="custom-label">Pincode</label>
//                     </div>
//                   </div>

//                   {/* Phone Number */}
//                   <div className="col-lg-6 mb-3">
//                     <div className="custom-input-container">
//                       <input type="text" id="phoneInput" className="custom-input" />
//                       <label htmlFor="phoneInput" className="custom-label">Phone Number</label>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary save-address-btn">Save Address</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React, { useEffect } from 'react';
import $ from 'jquery'; // Importing jQuery
import 'jquery-validation'; // Importing jQuery Validation Plugin

export default function AddressModal() {
  useEffect(() => {
    // Initialize jQuery validation when the component mounts
    $('#addressForm').validate({
      rules: {
        country: {
          required: true,
        },
        address: {
          required: true,
        },
        suburb: {
          required: true,
        },
        state: {
          required: true,
        },
        pincode: {
          required: true,
          digits: true,
          minlength: 6,
          maxlength: 6,
        },
        phone: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 15,
        },
      },
      messages: {
        country: {
          required: "Please enter your country",
        },
        address: {
          required: "Please enter your street address",
        },
        suburb: {
          required: "Please enter your suburb",
        },
        state: {
          required: "Please enter your state",
        },
        pincode: {
          required: "Please enter your pincode",
          digits: "Pincode must be numeric",
          minlength: "Pincode must be 6 digits",
          maxlength: "Pincode must be 6 digits",
        },
        phone: {
          required: "Please enter your phone number",
          digits: "Phone number must be numeric",
          minlength: "Phone number must be at least 10 digits",
          maxlength: "Phone number cannot be more than 15 digits",
        },
      },
      errorClass: 'is-invalid',
      validClass: 'is-valid',
      submitHandler: function (form) {
        // You can handle the form submission here, e.g., save the address
        alert("Address saved!");
        form.reset();
      },
    });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Address</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Modal content */}
              <form id="addressForm">
                <div className="row">
                  {/* Country */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" name="country" className="custom-input" />
                      <label htmlFor="country" className="custom-label">Country</label>
                    </div>
                  </div>

                  {/* Street Address */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" name="address" className="custom-input" />
                      <label htmlFor="address" className="custom-label">Street Address</label>
                    </div>
                  </div>

                  {/* Suburb */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" name="suburb" className="custom-input" />
                      <label htmlFor="suburb" className="custom-label">Suburb</label>
                    </div>
                  </div>

                  {/* State */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" name="state" className="custom-input" />
                      <label htmlFor="state" className="custom-label">State</label>
                    </div>
                  </div>

                  {/* Pincode */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" name="pincode" className="custom-input" />
                      <label htmlFor="pincode" className="custom-label">Pincode</label>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" name="phone" className="custom-input" />
                      <label htmlFor="phone" className="custom-label">Phone Number</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary save-address-btn" form="addressForm">Save Address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

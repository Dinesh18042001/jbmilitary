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
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label htmlFor="countryInput" className="form-label">Country</label>
//                       <input type="text" className="form-control" id="countryInput" />
//                     </div>
//                   </div>

//                   {/* Street Address */}
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label htmlFor="addressInput" className="form-label">Street Address</label>
//                       <input type="text" className="form-control" id="addressInput" />
//                     </div>
//                   </div>

//                   {/* Suburb */}
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label htmlFor="suburbInput" className="form-label">Suburb</label>
//                       <input type="text" className="form-control" id="suburbInput" />
//                     </div>
//                   </div>

//                   {/* State */}
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label htmlFor="stateInput" className="form-label">State</label>
//                       <input type="text" className="form-control" id="stateInput" />
//                     </div>
//                   </div>

//                   {/* Pincode */}
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label htmlFor="pincodeInput" className="form-label">Pincode</label>
//                       <input type="text" className="form-control" id="pincodeInput" />
//                     </div>
//                   </div>

//                   {/* Phone Number */}
//                   <div className="col-lg-6">
//                     <div className="mb-3">
//                       <label htmlFor="phoneInput" className="form-label">Phone Number</label>
//                       <input type="text" className="form-control" id="phoneInput" />
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


import React from 'react';

export default function AddressModal() {
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
              <form>
                <div className="row">
                  {/* Country */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" id="countryInput" className="custom-input" />
                      <label htmlFor="countryInput" className="custom-label">Country</label>
                    </div>
                  </div>

                  {/* Street Address */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" id="addressInput" className="custom-input" />
                      <label htmlFor="addressInput" className="custom-label">Street Address</label>
                    </div>
                  </div>

                  {/* Suburb */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" id="suburbInput" className="custom-input" />
                      <label htmlFor="suburbInput" className="custom-label">Suburb</label>
                    </div>
                  </div>

                  {/* State */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" id="stateInput" className="custom-input" />
                      <label htmlFor="stateInput" className="custom-label">State</label>
                    </div>
                  </div>

                  {/* Pincode */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" id="pincodeInput" className="custom-input" />
                      <label htmlFor="pincodeInput" className="custom-label">Pincode</label>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="col-lg-6 mb-3">
                    <div className="custom-input-container">
                      <input type="text" id="phoneInput" className="custom-input" />
                      <label htmlFor="phoneInput" className="custom-label">Phone Number</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary save-address-btn">Save Address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

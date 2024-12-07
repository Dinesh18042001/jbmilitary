// import React from "react";
// import AddressModal from "../PopupModal/AddressModel";
// import { useSelector } from "react-redux";

// export default function AddToCart() {

//   const cartitems = useSelector((state) => state.cart.cart);
//   console.log("Cart Items:", cartitems);

//   // Sample product data
//   const products = [
//     {
//       id: 1,
//       image: "assets/CategoriesSlider/img2.webp",
//       name: "8th & 60th Battalion WW1 Australian medal 4750 Leo Charles",
//       amount: "$350",
//     },
//     {
//       id: 2,
//       image: "assets/CategoriesSlider/img2.webp",
//       name: "8th & 60th Battalion WW1 Australian medal 4750 Leo Charles",
//       amount: "$350",
//     },
//     {
//       id: 3,
//       image: "assets/CategoriesSlider/img2.webp",
//       name: "8th & 60th Battalion WW1 Australian medal 4750 Leo Charles",
//       amount: "$350",
//     },
//   ];

//   return (
//     <>
//       <div className="addtocart-section mt-5 mb-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-7">
//               <div className="card-product-list-box">
//                 <div className="card-product-list-box-little d-flex justify-content-between">
//                   <h5 className="m-0">Order list</h5>
//                   <div className="address-btn">
//                     <a
//                       href="#"
//                       data-bs-toggle="modal"
//                       data-bs-target="#exampleModal"
//                     >
//                       <i className="fa-solid fa-location-crosshairs"></i>{" "}
//                       Address
//                     </a>
//                   </div>
//                 </div>

//                 {/* Product List */}
//                 <div className="card-product-list-scroll-box">
//                   {products.map((product) => (
//                     <div
//                       className="card-product-main d-flex align-items-center"
//                       key={product.id}
//                     >
//                       <div className="product-img">
//                         <img src={product.image} alt="Product" />
//                       </div>
//                       <div className="name-info">
//                         <a href="#">{product.name}</a>
//                         <div className="name-info-amount mt-2">
//                           <p className="m-0">Amount : {product.amount}</p>
//                         </div>
//                         <div className="name-info-btn mb-3 mt-2 d-flex gap-5">
//                           <div className="remove-btn">
//                             <a href="#">Save for later</a>
//                           </div>
//                           <div className="remove-btn">
//                             <a href="#">Remove</a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="order-btn text-end mt-4 mb-3 me-4">
//                   <a href="#">Place Order</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-5 mt-sm-4 mt-md-4 mt-lg-0">
//               <div className="addtocart-section-payment-box">
//                 <div className="addtocart-payment-box">
//                   <h4>Price details</h4>
//                 </div>

//                 <div className="main-payment-box">
//                   <div className="addtocart-payment-price mt-3 d-flex justify-content-between">
//                     <h6>Price (2 items)</h6>
//                     <p> $350</p>
//                   </div>

//                   <div className="addtocart-payment-price mt-1 d-flex justify-content-between">
//                     <h6>Discount</h6>
//                     <p>− $5</p>
//                   </div>

//                   <div className="addtocart-payment-price mt-1 d-flex justify-content-between">
//                     <h6>Delivery Charges</h6>
//                     <p>
//                       <del>$20</del> Free
//                     </p>
//                   </div>

//                   <div className="total-payment d-flex justify-content-between">
//                     <h5>Total Amount</h5>
//                     <h5>$345</h5>
//                   </div>

//                   <div className="discount-save mt-3 mb-2">
//                     <p>You will save $5 on this order</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="safe-payment-alert d-flex align-items-center">
//                 <span className="me-3">
//                   <i className="fa-solid fa-shield-heart"></i>
//                 </span>
//                 <h5>
//                   Safe and Secure Payments.Easy returns.100% Authentic products.
//                 </h5>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AddressModal />
//     </>
//   );
// }




import React from "react";
import AddressModal from "../PopupModal/AddressModel";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

export default function AddToCart() {
  const dispatch = useDispatch()
  // Retrieve cart items from the Redux store
  const cartitems = useSelector((state) => state.cart.cart);

  const handleremove =(id)=>{
    dispatch(removeFromCart(id))
  }
  console.log("Cart Items from Redux store: ", cartitems);

  return (
    <>
      <div className="addtocart-section mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-product-list-box">
                <div className="card-product-list-box-little d-flex justify-content-between">
                  <h5 className="m-0">Order list</h5>
                  <div className="address-btn">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-location-crosshairs"></i> Address
                    </a>
                  </div>
                </div>

                {/* Product List */}
                <div className="card-product-list-scroll-box">
                  {cartitems.length > 0 ? (
                    cartitems.map((product) => (
                      <div
                        className="card-product-main d-flex align-items-center"
                        key={product.id}
                      >
                        <div className="product-img">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="name-info">
                          <a href="#">{product.name}</a>
                          <div className="name-info-amount mt-2">
                            <p className="m-0">Amount: {product.price}</p>
                          </div>
                          <div className="name-info-btn mb-3 mt-2 d-flex gap-5">
                            <div className="remove-btn">
                              <a href="#">Save for later</a>
                            </div>
                            <div className="remove-btn">
                              <a onClick={()=>handleremove(product.id)}>Remove</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No items in the cart.</p>
                  )}
                </div>

                <div className="order-btn text-end mt-4 mb-3 me-4">
                  <a href="#">Place Order</a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mt-sm-4 mt-md-4 mt-lg-0">
              <div className="addtocart-section-payment-box">
                <div className="addtocart-payment-box">
                  <h4>Price details</h4>
                </div>

                <div className="main-payment-box">
                  <div className="addtocart-payment-price mt-3 d-flex justify-content-between">
                    <h6>Price ({cartitems.length} items)</h6>
                    <p>
                      ${cartitems.reduce((total, item) => {
                        const amountValue = item.amount
                          ? parseFloat(item.amount.slice(1)) || 0
                          : 0;
                        return total + amountValue;
                      }, 0)}
                    </p>
                  </div>

                  <div className="addtocart-payment-price mt-1 d-flex justify-content-between">
                    <h6>Discount</h6>
                    <p>− $5</p>
                  </div>

                  <div className="addtocart-payment-price mt-1 d-flex justify-content-between">
                    <h6>Delivery Charges</h6>
                    <p>
                      <del>$20</del> Free
                    </p>
                  </div>

                  <div className="total-payment d-flex justify-content-between">
                    <h5>Total Amount</h5>
                    <h5>
                      ${cartitems.reduce((total, item) => {
                        const amountValue = item.amount
                          ? parseFloat(item.amount.slice(1)) || 0
                          : 0;
                        return total + amountValue;
                      }, 0) - 5}
                    </h5>
                  </div>

                  <div className="discount-save mt-3 mb-2">
                    <p>You will save $5 on this order</p>
                  </div>
                </div>
              </div>
              <div className="safe-payment-alert d-flex align-items-center">
                <span className="me-3">
                  <i className="fa-solid fa-shield-heart"></i>
                </span>
                <h5>
                  Safe and Secure Payments. Easy returns. 100% Authentic products.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddressModal />
    </>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlistSlice";

export default function WishlistPage() {
  const dispatch = useDispatch();

  // Retrieve wishlist items from the Redux store
  const cartitems = useSelector((state) => state.wishlist.wishlist);

  const handleremove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  console.log("Cart Items from Redux store: ", cartitems);

  return (
    <>
      <div className="wishlist-section mt-4 mb-5">
        <div className="container">
          {/* Title Section */}
          <div className="wishlist-page-title text-center">
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
            <h2 className="mt-3">My Wishlist</h2>
          </div>

          {/* Wishlist Table */}
          <div className="wishlist-table mt-5 table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartitems.length > 0 ? (
                  cartitems.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleremove(product.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Your wishlist is empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

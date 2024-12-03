// import React from "react";

// export default function WishlistPage() {
//   const products = [
//     {
//       id: 1,
//       name: "Item Name 1",
//       price: "$100",
//       image: "./assets/product-img/product-card.webp",
//     },
//     {
//       id: 2,
//       name: "Item Name 2",
//       price: "$150",
//       image: "https://via.placeholder.com/50",
//     },
//     // Add more products as needed
//   ];

//   return (
//     <>
//       <div className="wishlist-section mt-4 mb-5">
//         <div className="container">
//           {/* Title Section */}
//           <div className="wishlist-page-title text-center">
//             <span>
//               <i className="fa-solid fa-heart"></i>
//             </span>
//             <h2 className="mt-3">My Wishlist</h2>
//           </div>

//           {/* Wishlist Table */}
//           <div className="wishlist-table mt-5">
//             <table className="table table-bordered text-center">
//               <thead className="table-dark">
//                 <tr>
//                   <th>#</th>
//                   <th>Product</th>
//                   <th>Price</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product, index) => (
//                   <tr key={product.id}>
//                     <td>{index + 1}</td>
//                     <td>
//                       <div className="d-flex align-items-center justify-content-center">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="me-4"
//                           style={{
//                             width: "70px",
//                             height: "70px",
//                             objectFit: "cover",
//                             borderRadius: "8px",
//                           }}
//                         />
//                         {product.name}
//                       </div>
//                     </td>
//                     <td>{product.price}</td>
//                     <td className=" mt-5">
//                       <button className="btn btn-danger btn-sm">Remove</button>

//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React from "react";

export default function WishlistPage() {
  const products = [
    {
      id: 1,
      name: "8th & 60th Battalion WW1 Australian medal 4750 Leo Charles",
      price: "$100",
      image: "./assets/product-img/product-card.webp",
    },
    {
      id: 2,
      name: "Denix M1869 Schofield Single Action Western Replica Revolver Nickel",
      price: "$150",
      image: "/assets/product-img/pr-j-3.webp",
    },
  ];

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
                {products.map((product, index) => (
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
                      <button className="btn btn-danger btn-sm">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}


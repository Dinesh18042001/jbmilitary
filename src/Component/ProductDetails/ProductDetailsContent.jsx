import React, { useState } from "react";

export default function ProductDetailsContent() {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const AllQuantity = (e) => {
    const value = Math.min(parseInt(e.target.value, 10) || 0, 20);
    setTotalQuantity(value);
  };

  const incrementQuan = () => {
    setTotalQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrementQuan = () => {
    setTotalQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <>
      <div className="top_bar">
        <h3>UDR Long service Full Size Medal</h3>
      </div>
      <div className="price">
        <h3>Rs. $6,700.00</h3>
      </div>
      <div className="selecT_bx">
        <div className="row gy-3">
          <div className="col-lg-6 col-xl-6">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                service clasps
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="col-lg-6 col-xl-6">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                Engraving required
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="col-lg-6 col-xl-6">
            <select className="form-select" defaultValue="">
              <option value="" disabled>
                Mounting Options
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
        </div>
      </div>
      <div className="check_option mt-3">
        <h5>Medal Engraving Options</h5>
        <div className="row mt-3">
          <div className="col-lg-6 col-xl-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Engraving Not Required
              </label>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Please Engrave This Medal(+ Rs. 1,400.00)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="checK_bx">
        <h5>Medal Mounting Options</h5>
        <p>Do you need this medal mounted ready to wear?</p>
        <div className="row gy-3">
          <div className="col-lg-6 col-xl-6">
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option1"
              autoComplete="off"
              defaultChecked
            />
            <label className="btn btn-secondary" htmlFor="option1">
              No please supply on a loose ribbon
            </label>
          </div>
          <div className="col-lg-6 col-xl-6">
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option2"
              autoComplete="off"
            />
            <label className="btn btn-secondary" htmlFor="option2">
              Yes please mount this medal
            </label>
          </div>
        </div>
      </div>
      <div className="imgae_check_bx">
        <p>Would you like to add a velvet pouch?</p>
        <span>(click the image to add)</span>
        <div className="img_checked pt-3">
          <input
            type="checkbox"
            className="btn-check"
            id="btn-check-2"
            autoComplete="off"
          />
          <label className="btn btn-primary" htmlFor="btn-check-2">
            <img src="./assets/medal/wallet.webp" alt="" />
          </label>
        </div>
        <p className="pt-3">
          Selections will add <span>Rs. $400.00</span> to the price
        </p>
      </div>
      <div className="row py-4 gy-3 align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="add-to-cart">
            <a href="#">
              <i className="fas fa-cart-plus"></i>Add To Cart
            </a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-12 col-xl-12">
              <div className="quantity_main_bx">
                <span>Quantity :</span>
                <div className="quantity_input">
                  <div className="medal_quantity all_quantity form-control d-flex g-2 align-items-center">
                    <button type="button" onClick={decrementQuan}>
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={totalQuantity}
                      onChange={AllQuantity}
                      min="0"
                      max="20"
                    />
                    <button type="button" onClick={incrementQuan}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

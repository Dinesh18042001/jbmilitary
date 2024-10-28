import React, { useState } from "react";

export default function CustomizePageBanner() {
  const [medalQuantity, setMedalQuantity] = useState(0);
  const [ribbonQuantity, setRibbonQuantity] = useState(0);
  const [totalQuantity, totalAllquantity] = useState(0);
  const [activeOption, setActiveOption] = useState("option1");

  // Function to increment/decrement quantities
  const incrementMedal = () =>
    setMedalQuantity((prev) => (prev < 20 ? prev + 1 : 20));

  const decrementMedal = () =>
    setMedalQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const incrementQuan = () =>
    totalAllquantity((prev) => (prev < 20 ? prev + 1 : 20));

  const decrementQuan = () =>
    totalAllquantity((prev) => (prev > 0 ? prev - 1 : 0));

  const incrementRibbon = () =>
    setRibbonQuantity((prev) => (prev < 20 ? prev + 1 : 20));

  const decrementRibbon = () =>
    setRibbonQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  // Handle input changes
  const handleMedalChange = (e) =>
    setMedalQuantity(Math.min(parseInt(e.target.value, 10) || 0, 20));

  const handleRibbonChange = (e) =>
    setRibbonQuantity(Math.min(parseInt(e.target.value, 10) || 0, 20));

  const AllQuantity = (e) =>
    totalAllquantity(Math.min(parseInt(e.target.value, 10) || 0, 20));

  // Handle radio button change
  const handleOptionChange = (option) => setActiveOption(option);

  return (
    <>
      <div className="inner_banner_sec">
        <div className="container">
          <div className="inner-banner position-relative mt-5">
            <img src="./assets/Banner/medal_11zon.webp" alt="Banner" />
            <div className="inner-content">
              <h3 className="text-center">Customize Your Own Set of Medals</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="form_wrapper_bx py-5">
        <div className="container">
          <div className="row pb-4">
            <div className="main_title text-center">
              <h4>Set of Medals</h4>
            </div>
          </div>
          <div className="row">
            <div className="form_bx">
              <div className="row gy-3">
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <select className="form-select">
                    <option value="" disabled selected>
                      Service Clasp
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>

                {/* Medal Quantity with Tooltip */}
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="medal_quantity form-control d-flex align-items-center">
                    <span>Number of Medals</span>
                    <button type="button" onClick={decrementMedal}>
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={medalQuantity}
                      onChange={handleMedalChange}
                      min="0"
                      max="20"
                    />
                    <button type="button" onClick={incrementMedal}>
                      +
                    </button>
                    <div className="icon position-relative">
                      <span className="tool_tip">
                        <i className="fas fa-info"></i>
                      </span>
                      <div className="hover_text">
                        <p>Minimum 2, maximum 20</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mounting Style */}
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <select className="form-select">
                    <option value="" disabled selected>
                      Mounting style
                    </option>
                    <option value="1">Swing</option>
                    <option value="2">Court Mounting</option>
                  </select>
                </div>

                {/* Ribbon Bars with Tooltip */}
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="medal_quantity ribbon_bars form-control d-flex align-items-center">
                    <span>Ribbon bars</span>
                    <button type="button" onClick={decrementRibbon}>
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={ribbonQuantity}
                      onChange={handleRibbonChange}
                      min="0"
                      max="20"
                    />
                    <button type="button" onClick={incrementRibbon}>
                      +
                    </button>
                    <div className="icon position-relative">
                      <span className="tool_tip">
                        <i className="fas fa-info"></i>
                      </span>
                      <div className="hover_text">
                        <p>$10 per ribbon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Medal Select with Image */}

                <div className="col-lg-4 col-xl-4 col-md-6">
                  <select className="form-select">
                    <option value="" selected>
                      Select Medal
                    </option>
                    <option value="1">Medal 1</option>
                  </select>
                </div>

                <div className="col-lg-4 col-xl-4 col-md-6">
                  <select className="form-select">
                    <option value="" selected>
                      Select Medal
                    </option>
                    <option value="1">Medal 2</option>
                  </select>
                </div>

                {/* Radio Buttons Toggle */}
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="togle_btn">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option1"
                      autoComplete="off"
                      checked={activeOption === "option1"}
                      onChange={() => handleOptionChange("option1")}
                    />
                    <label
                      className={`btn btn-secondary ${
                        activeOption === "option1" ? "active" : ""
                      }`}
                      htmlFor="option1"
                    >
                      Miniature
                    </label>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="togle_btn">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option2"
                      autoComplete="off"
                      checked={activeOption === "option2"}
                      onChange={() => handleOptionChange("option2")}
                    />
                    <label
                      className={`btn btn-secondary ${
                        activeOption === "option2" ? "active" : ""
                      }`}
                      htmlFor="option2"
                    >
                      Original Medal
                    </label>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 col-md-6">
                  <div className="togle_btn">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id="option3"
                      autoComplete="off"
                      checked={activeOption === "option3"}
                      onChange={() => handleOptionChange("option3")}
                    />
                    <label
                      className={`btn btn-secondary ${
                        activeOption === "option3" ? "active" : ""
                      }`}
                      htmlFor="option3"
                    >
                      Both
                    </label>
                  </div>
                </div>
              </div>
              <div className="row py-4 align-items-center">
                <div className="col-xl-4 col-lg-4">
                  <div className="add-to-cart">
                    <a href="#">
                      <i class="fas fa-cart-plus"></i>Add To Cart
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="row gy-4 align-items-center">
                    <div className="col-lg-7 col-xl-7">
                      <div className="quantity_main_bx">
                        <span>Quantity :</span>
                        <div className="quantity_input">
                          <div className="medal_quantity all_quantity form-control d-flex align-items-center">
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
                    <div className="col-lg-5 col-xl-5">
                      <div className="total_amount">
                        <span>Total :</span>
                        <h4>$40</h4>
                      </div>
                    </div>
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

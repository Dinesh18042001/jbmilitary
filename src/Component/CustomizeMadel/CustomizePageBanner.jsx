import React, { useState, useEffect } from "react";
import Select from "react-select";
import { components } from "react-select"; 


export default function CustomizePageBanner() {
  const [medalQuantity, setMedalQuantity] = useState(0);
  const [ribbonQuantity, setRibbonQuantity] = useState(0);
  const [barQuantity, setBarQuantity] = useState(0);
  const [totalQuantity, totalAllquantity] = useState(0);
  const [totalMedal, totalMedalquantity] = useState(0);
  const [activeOption, setActiveOption] = useState("option1");
  const [includeRibbon, setIncludeRibbon] = useState(false);
  const [selectedMedals, setSelectedMedals] = useState([]);
  const [quantityLabel, setQuantityLabel] = useState("Quantity of Miniature");
  const [selectedRibbons, setSelectedRibbons] = useState([]);

  // Automatically update ribbonQuantity to match medalQuantity if Include Ribbon is Yes
  useEffect(() => {
    if (includeRibbon) {
      setRibbonQuantity(medalQuantity);
    }
  }, [medalQuantity, includeRibbon]);

  // Functions for incrementing/decrementing quantities
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

  const incrementBar = () =>
    setBarQuantity((prev) => (prev < 20 ? prev + 1 : 20));
  const decrementBar = () =>
    setBarQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  
  const incrementMedals = () =>
    totalMedalquantity((prev) => (prev < 20 ? prev + 1 : 20));
  const decrementMedals = () =>
    totalMedalquantity((prev) => (prev > 0 ? prev - 1 : 0));
  // Handle input changes
  const handleMedalChange = (e) =>
    setMedalQuantity(Math.min(parseInt(e.target.value, 10) || 0, 20));
  const handleRibbonChange = (e) =>
    setRibbonQuantity(Math.min(parseInt(e.target.value, 10) || 0, 20));
  const AllQuantity = (e) =>
    totalAllquantity(Math.min(parseInt(e.target.value, 10) || 0, 20));

  const AllBarQuantity = (e) =>
    setBarQuantity(Math.min(parseInt(e.target.value, 10) || 0, 20));

  const AllMedalQuantity = (e) =>
    totalMedalquantity(Math.min(parseInt(e.target.value, 10) || 0, 20));

  // Handle radio button change and update quantity label
  const handleOptionChange = (option) => {
    setActiveOption(option);
    switch (option) {
      case "option1":
        setQuantityLabel("Quantity of Miniature");
        break;
      case "option2":
        setQuantityLabel("Quantity of Original");
        break;
      case "option3":
        setQuantityLabel("Quantity of Both");
        break;
      default:
        setQuantityLabel("Quantity");
    }
  };

  // Track Include Ribbon radio selection
  const handleIncludeRibbonChange = (value) => {
    setIncludeRibbon(value === "option1");
    if (value === "option2") {
      setRibbonQuantity(0); // Reset ribbon quantity to 0 when "No" is selected
    }
  };

  // Update selected ribbons
  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedRibbons(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  // Options for MultiSelect
  // const ribbonOptions = [
  //   { value: "ASM 75+", label: "ASM 75+" },
  //   {
  //     value: "Aus Active Service Medal 75+",
  //     label: "Aus Active Service Medal 75+",
  //   },
  // ];



  const ribbonOptions = [
    {
      value: "ASM 75+",
      label: "ASM 75+",
      image: "./assets/medal/medal1.webp", // ASM 75+ image URL
    },
    {
      value: "Aus Active Service Medal 75+",
      label: "Aus Active Service Medal 75+",
      image: "./assets/medal/medal3.webp", // Aus Active Service Medal 75+ image URL
    },
  ];

  

// Custom Option component jo image aur label ko render karega
const CustomOption = (props) => (
  <components.Option {...props}>
    <img
      src={props.data.image}
      alt={props.data.label}
      style={{
        width: 90,
        height: 90,
        marginRight: 10,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius:"8px", // Shadow add kiya gaya
      }}
    />
    {props.data.label}
  </components.Option>
);




  const RibbonSelect = () => {
    const options = [
      { value: "Balkans", label: "Balkans" },
      { value: "Bougainville", label: "Bougainville" },
      { value: "Cambodia", label: "Cambodia" },
      { value: "CT/SR", label: "CT/SR" },
    ];

    return (
      <Select
        isMulti
        options={options}
        placeholder="Select clasp for ASM 75+"
        closeMenuOnSelect={false}
        className="ribbon-select"
      />
    );
  };

  const Aus = () => {
    const options = [
      { value: "Balkans", label: "Balkans" },
      { value: "Iraq", label: "Iraq" },
      { value: "East Timor", label: "East Timor" },
      { value: "ICAT", label: "ICAT" },
    ];

    return (
      <Select
        isMulti
        options={options}
        placeholder="Select clasp for Aus Active Service Medal"
        closeMenuOnSelect={false}
        className="ribbon-select"
      />
    );
  };
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
                <div className="col-lg-6 col-xl-6 col-md-6">
                  <select className="form-select">
                    <option value="" disabled selected>
                      Mounting style
                    </option>
                    <option value="1">Swing</option>
                    <option value="2">Court Mounting</option>
                  </select>
                </div>

                <div className="col-lg-6 col-xl-6 col-md-6">
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

                <div className="col-lg-6 col-xl-6 ">
                  <div className="row">
                    <div className="col-lg-8 col-xl-8">
                      <div className="togle_wrapper">
                        <div className="tool_text">
                          <span>Include Ribbon bar</span>
                        </div>
                        <div className="toggle_bx">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                              onChange={() =>
                                handleIncludeRibbonChange("option1")
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                              onChange={() =>
                                handleIncludeRibbonChange("option2")
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-4">
                      <div
                        className="medal_quantity ribbon_bars form-control d-flex align-items-center"
                        id="quantity_fetch"
                        style={{ opacity: ribbonQuantity === 0 ? 0.4 : 1 }}
                      >
                        <input
                          type="number"
                          className="form-control text-center"
                          readOnly
                          value={ribbonQuantity}
                          onChange={handleRibbonChange}
                          min="0"
                          max="20"
                        />
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
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6">
                  <Select
                    isMulti
                    options={ribbonOptions}
                    value={ribbonOptions.filter((option) =>
                      selectedRibbons.includes(option.value)
                    )}
                    onChange={handleMultiSelectChange}
                    placeholder="Select Medal"
                    closeMenuOnSelect={false}
                    className="ribbon-select"
                    components={{ Option: CustomOption }} // Custom option add kiya
                  />
                </div>

                {selectedRibbons.includes("ASM 75+") && (
                  <div className="col-lg-6 col-xl-6 col-md-6">
                    <RibbonSelect />
                  </div>
                )}

                {selectedRibbons.includes("Aus Active Service Medal 75+") && (
                  <div className="col-lg-6 col-xl-6 col-md-6">
                    <Aus />
                  </div>
                )}
              </div>
              <div className="row pt-4 gy-3">
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
                <div className="col-xl-12 col-lg-12">
                  <div className="row gy-4 align-items-center">
                    <div className="col-lg-4 col-xl-4">
                      <div className="quantity_main_bx">
                        {/* {/ <span>{quantityLabel} :</span> /} */}
                        <span>Set of Miniature</span>
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
                    <div className="col-lg-4 col-xl-4">
                      <div
                        className="quantity_main_bx"
                        
                      >
                        <span>Set of Medal:</span>
                        <div className="quantity_input">
                          <div className="medal_quantity all_quantity form-control d-flex align-items-center">
                            <button type="button" onClick={decrementMedals}>
                              -
                            </button>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={totalMedal}
                              onChange={AllMedalQuantity}
                              min="0"
                              max="20"
                            />
                            <button type="button" onClick={incrementMedals}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-xl-4">
                      <div
                        className="quantity_main_bx"
                        style={{
                          opacity: ribbonQuantity === 0 ? 0.4 : 1,
                          pointerEvents: ribbonQuantity === 0 ? "none" : "auto",
                        }}
                      >
                        <span>Set of Ribbon bar:</span>
                        <div className="quantity_input">
                          <div className="medal_quantity all_quantity form-control d-flex align-items-center">
                            <button
                              type="button"
                              onClick={decrementBar}
                              disabled={ribbonQuantity === 0}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={barQuantity}
                              onChange={setBarQuantity}
                              min="0"
                              max="20"
                            />
                            <button
                              type="button"
                              onClick={incrementBar}
                              disabled={ribbonQuantity === 0}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 pt-4">
                  <div className="add-to-cart">
                    <a href="#">
                      <i class="fas fa-cart-plus"></i>Add To Cart
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 pt-4">
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
    </>
  );
}

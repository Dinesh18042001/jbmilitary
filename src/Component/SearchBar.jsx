import React, { useState } from "react";

export default function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <>
      {/* Search Icon */}
      <a
        className="nav-link active"
        aria-current="page"
        href="#search"
        onClick={handleSearchClick}
      >
      </a>

      {/* Full-Width Search Bar */}
      {showSearchBar && (
        <div className="full-width-search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Type to search..."
          />
          <button
            className="btn btn-danger close-search"
            onClick={handleSearchClick}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

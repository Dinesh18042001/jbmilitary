import React from "react";

export default function Breadcumb() {
  return (
    <>
      <section className="breadcumb_wrapper py-3">
        <div className="container">
          <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Medals</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Afghanistan & Iraq
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

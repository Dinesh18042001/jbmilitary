import React from "react";

export default function UserProfile() {
  return (
    <>
      <div className="userprofile-section mt-5 mb-4">
        <div className="container">
          <div className="profile-box">
            <div className="profile-icon text-center">
              <img src="./assets/icon/profile.png" alt="" />
            </div>
            <hr />

            <div className="user-info">
              <div className="user-info-tittle">
                <h6 className="mb-4">
                  <i class="fa-solid fa-user me-2"></i>
                  <strong>User Name</strong> : Dinesh Kumar
                </h6>
                
                <h6 className="mb-4">
                <i class="fa-solid fa-envelope me-2"></i>
                  <strong>Email</strong> : Hello@gamil.com
                </h6>

                <h6 className="mb-4">
                <i class="fa-solid fa-location-dot me-2"></i>
                  <strong>Address</strong> : Noida sec-62
                </h6>
              </div>
            </div>

            <div className="profile-btn gap-3 d-flex justify-content-between">
                <div className="change-pass text-center">
                    <a href="#">Change Password</a>
                </div>

                <div className="change-pass text-center">
                    <a href="#">Update Profile</a>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

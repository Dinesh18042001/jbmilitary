import React from "react";

const teamData = [
  {
    id: 1,
    name: "Jamey Blewitt",
    position: "CEO",
    imgSrc: "./assets/our-team/jb-profile.jpg",
    profileImgSrc: "./assets/our-team/jb-profile.jpg",
    description:
      "Jamey is the owner and auctioneer of JB Military Antiques. His areas of expertise are in a variety of areas including WW2 & WW1 German militaria.",
    socialLinks:[
        { iconClass: "fa-brands fa-instagram", link: "#" },
        { iconClass: "fab fa-linkedin-in", link: "#" },
        { iconClass: "fab fa-youtube", link: "#" },
        { iconClass: "fa-brands fa-facebook-f", link: "#" },
      ],
  },
  {
    id: 2,
    name: "Ed Robinson ",
    position: "CEO",
    imgSrc: "./assets/our-team/jb-profile.jpg",
    profileImgSrc: "./assets/our-team/jb-profile.jpg",
    description:
      "Ed also specializes in researching medal groups and family military history for the auctions and our website.",
    socialLinks:[
        { iconClass: "fa-brands fa-instagram", link: "#" },
        { iconClass: "fab fa-linkedin-in", link: "#" },
        { iconClass: "fab fa-youtube", link: "#" },
        { iconClass: "fa-brands fa-facebook-f", link: "#" },
      ],
  },
  {
    id: 3,
    name: "Nathan Williams",
    position: "Medal Mounter ",
    imgSrc: "./assets/our-team/jb-profile.jpg",
    profileImgSrc: "./assets/our-team/jb-profile.jpg",
    description:
      " Nathan is the sole full-time medal mounter for JB Military Antiques who works efficiently and with precision.",
    socialLinks: [
      { iconClass: "fa-brands fa-instagram", link: "#" },
      { iconClass: "fab fa-linkedin-in", link: "#" },
      { iconClass: "fab fa-youtube", link: "#" },
      { iconClass: "fa-brands fa-facebook-f", link: "#" },
    ],
  },
];

export default function OurTeam() {
  return (
    <div className="ourteam_wrap">
      <div className="container">
        <div className="row">
            <div className="title">
                <h3 className="text-center">Our Team</h3>
            </div>
        </div>
        <div className="row pt-4">
          {teamData.map((member) => (
            <div key={member.id} className="col-xxl-3 col-xl-4 col-md-6 mb-3">
              <div className="teamcard">
                <div className="team-img position-relative">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="position-relative"
                  />
                  <div className="team__text">
                    <div className="team_profileimg">
                      <img src={member.profileImgSrc} alt={member.name} />
                    </div>
                    <div className="team__title">
                      <h4>{member.name}</h4>
                      {/* <span>{member.position}</span> */}
                      <div className="starts-team d-flex gap-3 align-items-center d-none">
                        {Array(5)
                          .fill()
                          .map((_, index) => (
                            <i key={index} className="fa-solid fa-star"></i>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="backhoverbox">
                  <div className="hovercontent">
                    <p>{member.description}</p>
                    <div className="sociel-mediaicons d-flex justify-content-between px-4">
                      {member.socialLinks.map((link, index) => (
                        <div key={index} className="icons-links">
                          <a href={link.link}>
                            <i className={link.iconClass}></i>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

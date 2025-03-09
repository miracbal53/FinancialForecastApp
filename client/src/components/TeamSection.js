import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sami Yetişken",
      position: "Director",
      image: "images/team-3.jpg",
    },
    {
      name: "Miraç Bal",
      position: "Marketing Head",
      image: "images/mirac.jpeg",
    },
    {
      name: "Ali Arslan",
      position: "Tech Leader",
      image: "images/bio.jpeg",
    },
  ];

  return (
    <section id="team" className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2>
            Our <span> Team</span>
          </h2>
        </div>

        <div className="team_container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img
                      src={member.image}
                      className="img1"
                      alt={member.name}
                    />
                  </div>
                  <div className="detail-box">
                    <h5>{member.name}</h5>
                    <p>{member.position}</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

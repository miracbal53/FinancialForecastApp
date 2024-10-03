import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Joseph Brown",
      position: "Marketing Head",
      image: "images/team-1.jpg",
    },
    {
      name: "Nancy White",
      position: "Marketing Head",
      image: "images/team-2.jpg",
    },
    {
      name: "Earl Martinez",
      position: "Marketing Head",
      image: "images/team-3.jpg",
    },
    {
      name: "Josephine Allard",
      position: "Marketing Head",
      image: "images/team-4.jpg",
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
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img src={member.image} className="img1" alt={member.name} />
                  </div>
                  <div className="detail-box">
                    <h5>{member.name}</h5>
                    <p>{member.position}</p>
                  </div>
                  <div className="social_box">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
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

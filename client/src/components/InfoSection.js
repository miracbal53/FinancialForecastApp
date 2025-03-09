import React from "react";

const InfoSection = () => {
  return (
    <section id="info" className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_contact">
              <h4>Address</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Ankara, Turkey</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>finexotrading@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="info_social">
              <a href="">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 info_col">
            <div className="info_detail">
              <h4>Info</h4>
              <p>
                necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a
                handful
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 info_col">
            <h4>Subscribe</h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

import React from 'react';

const Footer = () => {
  return (
    <section id="footer" className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear">{new Date().getFullYear()}</span> All Rights Reserved By
          <a href="https://html.design/"> Free Html Templates</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;

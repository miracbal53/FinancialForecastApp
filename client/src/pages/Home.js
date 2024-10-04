import React from 'react';
import Header from '../components/Header'; 
import Slider from '../components/Slider'; 
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import WhySection from '../components/WhySection';
import TeamSection from '../components/TeamSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="hero_area" id="home">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="Hero Background" />
          </div>
        </div>
        
        <Header />
        
        <Slider />
      </div>

      <ServiceSection id="service"/>
      <AboutSection id="about"/>
      <WhySection id="why"/>
      <TeamSection id="team" />
      <InfoSection id="info" />
      <Footer />
    </>
  );
};

export default Home;

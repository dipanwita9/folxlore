import React from 'react';
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
      <div className="home-text-section">
          <h1 className="primary-heading">
            folx
          </h1>
          <p className="primary-text">
          used especially to explicitly signal the inclusion of groups commonly marginalized.
          </p>
          <h1 className="primary-heading">
            lore
          </h1>
          <p className="primary-text">
          comes from the Old English word lar, which means "to learn".
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
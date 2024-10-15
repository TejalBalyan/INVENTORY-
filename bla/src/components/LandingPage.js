import React from 'react';
import './LandingPage.css'; // Assuming your CSS is saved here

const LandingPage = ({ onStart }) => { // Accept onStart prop
  return (
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>

      {/* Start Landing Page */}
      <div className="landing-page">
        <header>
          <div className="container">
            <a href="#" className="logo">Your <b>Website</b></a>
            <ul className="links">
              <li>Home</li>
              <li>About Us</li>
              <li>Work</li>
              <li>Info</li>
              <li onClick={onStart}>Get Started</li> {/* Call onStart on click */}
            </ul>
          </div>
        </header>

        <div className="content">
          <div className="container">
            <div className="info">
              <h1>Looking For Inspiration</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
              <button onClick={onStart}>Start</button> {/* Call onStart on click */}
            </div>

            <div className="image">
              <img className="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" alt="Main visual" />
            </div>
          </div>
        </div>
      </div>
      {/* End Landing Page */}
    </div>
  );
};

export default LandingPage;

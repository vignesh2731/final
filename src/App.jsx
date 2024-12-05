import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLatestDesignsClick = () => {
    navigate('/dashboard'); // Navigate to App4
  };

  return (
    <div className="app">
      <header className="header">
        <img src="logo.jpg" alt="Flyshion Logo" className="logo" />
        <button className="login-btn" onClick={handleLoginClick}>Shop Now</button>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Find Your Own Fashion!</h1>
            <p>Explore our curated collection of stylish clothing tailored to your unique taste.</p>
            <button className="shop-now-btn" onClick={handleLatestDesignsClick}>Check latest designs</button>
          </div>
          <div className="hero-image">
            <img src="i1.avif" alt="Featured" className="featured-img" />
          </div>
        </section>

        <section className="signature-section">
          <h2>Elevate Your Wardrobe with Flyshion’s Signature</h2>
          <div className="signature-content">
            <div className="intro-section">
              <h3>Introducing Flyshion</h3>
              <p>At Flyshion, we believe fashion is more than just a trend – it's a reflection of your unique self-expression.</p>
            </div>
            <div className="why-choose-section">
              <h3>Why Choose Flyshion?</h3>
              <p>Flyshion offers you the unique opportunity to directly interact with our designers.</p>
            </div>
          </div>
        </section>

        <section className="most-popular-section">
          <h2>Most Popular</h2>
          <div className="popular-items">
            <div className="item">
              <img src="popular1.avif" alt="Popular Item 1" />
            </div>
            <div className="item">
              <img src="popular2.avif" alt="Popular Item 2" />
            </div>
            <div className="item">
              <img src="popular3.avif" alt="Popular Item 3" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

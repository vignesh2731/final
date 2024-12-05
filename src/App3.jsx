import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App3.css';

const App3 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/app4'); // Route to App4 when form is submitted
  };

  return (
    <div className="form-container">
      <div className="back-link">← Create a new Account</div>
      <h2 className="form-title">CUSTOMER</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your name</label>
          <input type="text" id="name" className="form-input" placeholder="NAME" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-input" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="password-wrapper">
            <input type="password" id="password" className="form-input" placeholder="Password" />
            <span className="password-toggle">👁️</span>
          </div>
        </div>

        <button type="submit" className="submit-button">CREATE</button>

        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">Or</span>
          <span className="divider-line"></span>
        </div>

        <div className="google-signup">
          <p className="google-text">GET STARTED</p>
          <button className="google-button">
            <span className="google-icon">G</span>
            Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default App3;

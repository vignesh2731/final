import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App6.css';

const App6 = () => {
  const navigate = useNavigate();

  return (
    <div className="app6-container">
      <div className="content-box">
        <div className="profile">
          <div className="profile-circle">
            <div className="profile-initial">Y</div>
          </div>
          <p className="profile-text">You</p>
        </div>

        <div className="options-container">
          <div className="option" onClick={() => navigate('/orders')}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3496/3496155.png"
              alt="Orders"
              className="icon"
            />
            <span>Orders</span>
          </div>

          <div className="option" onClick={() => navigate('/manageaccount')}>
            <img
              src="https://thumbs.dreamstime.com/b/account-icon-collection-design-concept-simple-element-vector-illustration-white-background-130331760.jpg"
              alt="Manage Account"
              className="icon"
            />
            <span>Manage Account</span>
          </div>

          <div className="account-options">
            <div className="option">
              <img
                src="https://www.shutterstock.com/image-vector/id-card-vector-icon-identification-600nw-1722213970.jpg"
                alt="Account Details"
                className="icon"
              />
              <span>Account Details</span>
            </div>

            <div className="option" onClick={() => navigate('/address')}>
              <img
                src="https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-gps-icon-png-image_1781435.jpg"
                alt="Addresses"
                className="icon"
              />
              <span>Addresses</span>
            </div>
          </div>
        </div>

        <button className="logout-button">LOG OUT</button>
      </div>
    </div>
  );
};

export default App6;
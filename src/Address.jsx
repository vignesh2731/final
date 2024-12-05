import React from 'react';
import './Address.css';

function Address() {
  return (
    <>
      <div className="header-text">
        <img src="src/assets/back.png" alt="Back" />
        ADDRESS
      </div>
      <div style={{ backgroundColor: 'rgb(254,246,218)', marginBottom: '15px', padding: '15px' }}>
        + ADD NEW ADDRESS
      </div>
      <div className="login-box">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Mobile" required />
          <input type="text" placeholder="Pincode" required />
          <input type="text" placeholder="State" required />
          <textarea placeholder="Address(House No, Building, Street, Area)" required />
          <textarea placeholder="Locality/town" required />
          <input type="text" placeholder="City/District" required />
          <button type="submit"><b>SAVE</b></button>
        </form>
      </div>
    </>
  );
}

export default Address;

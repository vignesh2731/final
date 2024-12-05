import React from 'react';
import './Manageaccount.css';

function Manageaccount(){
    return(
        <>
      <div className="container123">
         <div className="header-text">
      <img src='/back.png'/>
      Manage Your Account
    </div>
      <div className="login-box">
        <form>
          <input type="text" placeholder='Mobile' required />
          <input type="text" placeholder='Full Name' required />
          <input type='email' placeholder='Email' required />
          <button type="submit"><b>SAVE DETAILS</b></button>

        </form>
      </div></div>
      <hr></hr>
      <button>DELETE ACCOUNT</button>
        </>
    );
}

export default Manageaccount;
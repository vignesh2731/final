import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="header-text">Add your profile</div>
      <div className="login-box">
        <form>
          <input type="text" placeholder='Name' required />
          <input type="text" placeholder='Availabity' required />
          <input type="text" placeholder='Phone number' required />
          <textarea type="text" placeholder='Skills and techniques' required />
          <textarea type="text" placeholder='Experience and Achievements' required />
          <textarea type="text" placeholder='Design specialities' required />
          <textarea type="text" placeholder='Education and Training' required />
          <textarea type="text" placeholder='Social Media Links(optional)' />
          <button type="submit">SIGNUP</button>
        </form>
      </div>
    </>
  );
}

export default App;
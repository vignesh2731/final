import React from 'react';
import { Link } from 'react-router-dom';
import './Loginpage.css';

function Loginpage() {
    return (
        <>
            <div className="header-text"> LOGIN HERE...</div>
            <div className="login-container">
                <div className="login-box">
                    <h2>CUSTOMER</h2>
                    <form>
                        <label htmlFor="email1">Email:</label>
                        <input type="email" required />
                        <label htmlFor="password1">Password:</label>
                        <input type="password" required />
                        <Link to="/dashboard">
                            <button type="button">Login</button>
                        </Link>
                    </form>
                </div>

                <div className="login-box">
                    <h2>DESIGNER</h2>
                    <form>
                        <label htmlFor="email2">Email:</label>
                        <input type="email" required />
                        <label htmlFor="password2">Password:</label>
                        <input type="password" required />
                        <Link to="/dashboard">
                            <button type="button">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Loginpage;

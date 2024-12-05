import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App4.css";

const App4 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <nav className="top-nav">
        <button className="menu-icon" onClick={toggleSidebar}>
          <span>☰</span>
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button><i className="fas fa-microphone"></i></button>
        </div>
        <div className="icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </nav>

      <div 
        className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`} 
        onMouseLeave={closeSidebar} 
      >
        <h2>FLYSHION</h2>
        <div className="sidebar-links">
          <h4>Shop womens wear</h4>
          <ul>
            <li>Indian & Fusion wear</li>
            <li>Western Wear</li>
            <li>Sleepwear</li>
            <li>Winter Wear</li>
          </ul>
          <h4>Shop Menswear</h4>
          <ul>
            <li>Suits and Blazers</li>
            <li>Top Wear</li>
            <li>Bottom Wear</li>
            <li>Indian Wear</li>
            <li>Sports Wear</li>
          </ul>
          <h4>Accessories</h4>
          <ul>
            <li>Scarves</li>
            <li>Bags</li>
            <li>Eyewear</li>
            <li>Wallets</li>
            <li>Hats</li>
            <li>Jewellery</li>
          </ul>
          <Link to="/categories">
            <button className="categories-button">Categories</button>
          </Link>
          <button className="logout">Logout</button>
        </div>
      </div>

      <main className="main-content">
        <div className="categories">
          <Link to="/categories">
            <div className="category-item">
              <img src="https://cdn-icons-png.freepik.com/512/189/189578.png" alt="Women" />
              <p>Women</p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="category-item">
              <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-sport-clothes-icon-circle-png-image_5277159.jpg" alt="Men" />
              <p>Men</p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="category-item">
              <img src="data:image/png;base64,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" alt="Footwear" />
              <p>Footwear</p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="category-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4bHLHLa7a42u051nnCv808lshkZnztgDQQ&s" alt="Accessories" />
              <p>Accessories</p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="category-item">
              <img src="https://cdn-icons-png.freepik.com/256/10114/10114959.png?semt=ais_hybrid" alt="Sports Wear" />
              <p>Sports Wear</p>
            </div>
          </Link>
          <Link to="/categories">
            <div className="category-item">
              <img src="https://www.svgrepo.com/show/442466/category.svg" alt="Categories" />
              <p>Categories</p>
            </div>
          </Link>
        </div>

        <h1>Top-Rated Designers</h1>
        <div className="designers">
          <div className="designer-card">
            <img src="https://img.freepik.com/free-vector/profile-picture-design_742173-13765.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid" alt="Suhani Shah" />
            <p>Suhani Shah</p>
            <p>Experience: 4.5 years</p>
          </div>
          <div className="designer-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8V9BMB5i02DLGQ0CewOPlhOeL-_68xcTDg&s" alt="Sneha Madhavaram" />
            <p>Sneha Madhavaram</p>
            <p>Experience: 3.5 years</p>
          </div>
          <div className="designer-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMVCbHWBi3pjwbfmtpQ9VfRS9_sLtWPpZQQ&s" alt="Abhishek Sharma" />
            <p>Abhishek Sharma</p>
            <p>Experience: 3 years</p>
          </div>
          <div className="designer-card">
            <img src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/02/Neeraj-Kaushal-150x150.jpg" alt="Gaurav Gupta" />
            <p>Gaurav Gupta</p>
            <p>Experience: 5 years</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App4;

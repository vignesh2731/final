import React from "react";
import "./demo.css";

const products = [
  {
    id: 1,
    name: "Summer Dress",
    price: "$49.99",
    description: "Light and breezy summer dress, perfect for warm days.",
    image: "https://via.placeholder.com/200x300?text=Summer+Dress",
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: "$99.99",
    description: "Stylish leather jacket for a bold look.",
    image: "https://via.placeholder.com/200x300?text=Leather+Jacket",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: "$39.99",
    description: "Classic denim jeans with a modern fit.",
    image: "https://via.placeholder.com/200x300?text=Denim+Jeans",
  },
  {
    id: 4,
    name: "Sneakers",
    price: "$59.99",
    description: "Comfortable and trendy sneakers for daily wear.",
    image: "https://via.placeholder.com/200x300?text=Sneakers",
  },
  {
    id: 5,
    name: "Formal Shirt",
    price: "$29.99",
    description: "Elegant formal shirt for office wear.",
    image: "https://via.placeholder.com/200x300?text=Formal+Shirt",
  },
  {
    id: 6,
    name: "Evening Gown",
    price: "$119.99",
    description: "Stunning evening gown for special occasions.",
    image: "https://via.placeholder.com/200x300?text=Evening+Gown",
  },
  {
    id: 7,
    name: "Casual T-Shirt",
    price: "$19.99",
    description: "Soft and comfy casual t-shirt.",
    image: "https://via.placeholder.com/200x300?text=Casual+T-Shirt",
  },
  {
    id: 8,
    name: "Sports Shoes",
    price: "$69.99",
    description: "Durable sports shoes for an active lifestyle.",
    image: "https://via.placeholder.com/200x300?text=Sports+Shoes",
  },
  {
    id: 9,
    name: "Woolen Sweater",
    price: "$39.99",
    description: "Warm woolen sweater for cold weather.",
    image: "https://via.placeholder.com/200x300?text=Woolen+Sweater",
  },
  {
    id: 10,
    name: "Sun Hat",
    price: "$14.99",
    description: "Stylish sun hat to protect you from the sun.",
    image: "https://via.placeholder.com/200x300?text=Sun+Hat",
  },
];

const Demo = () => {
  return (
    <div className="product-showcase">
      <h1 className="page-title">Fashion E-Commerce</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;

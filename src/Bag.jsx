import React from 'react';
import './Bag.css';

function Bag() {
    return (
        <>
            <div className="bag">
                <div className="header">
                    {/* Use public folder or import images directly */}
                    <img src='/back.png' width={10} height={10} alt="Back" />
                </div>
                <div className="bagproduct">
                    <img src='/dress.png' alt="Product" />
                    <div className="product-details">
                        <p>Designed By<br /><b>Laura Ashley</b></p>
                        <p className="product-description">
                            Blue Printed Gotta Patti Pure Cotton Empire A-Line Kurta with Trouser
                        </p>
                        <div className="size-qty">
                            <div>Size <b>S</b></div>
                            <div>Qty <b>1</b></div>
                        </div>
                        <p className="price"><b>Rs. 1619</b></p>
                    </div>
                </div>
                <div className="order-details">
                    <p><b>Order Details</b></p>
                    <div className="order-item">
                        <span>Bag Total</span>
                        <span className="price">Rs. 1619</span>
                    </div>
                    <div className="order-item">
                        <span>Delivery Fee</span>
                        <span className="price">Rs. 0</span>
                    </div>
                    <div className="amount-payable">
                        <span><b>Amount Payable</b></span>
                        <span className="price"><b>Rs. 1619</b></span>
                    </div>
                </div>
                <div className="payment">
                    <span><b>Rs. 1619</b></span>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </>
    );
}

export default Bag;  // Ensure the component is exported as default

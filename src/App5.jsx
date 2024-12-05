import React, { useState } from 'react';

const App5= () => {
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff4e5' }}>
      <h3 style={{ textAlign: 'left', fontSize: '18px', marginBottom: '10px' }}>Bag(1 product)</h3>

      <div style={{ display: 'flex', border: '1px solid #f2f2f2', borderRadius: '5px', padding: '15px', backgroundColor: '#ffffe0' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtUdvORfoIZ1BXMUqVPjXAypQMen4Luzgnw&s"
          alt="Product"
          style={{ borderRadius: '5px', marginRight: '15px', width: '100px', height: '100px' }}
        />

        <div style={{ flex: '1' }}>
          <p style={{ fontWeight: 'bold', margin: 0 }}>Designed By</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>Laura Ashley</p>
          <p style={{ fontSize: '14px', marginBottom: '10px' }}>
            Blue Printed Gotta Patti Pure Cotton Empire A-Line Kurta with Trousers
          </p>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="size" style={{ marginRight: '10px' }}>Size</label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              style={{ padding: '5px', marginRight: '15px' }}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>

            <label htmlFor="quantity" style={{ marginRight: '10px' }}>Qty</label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{ padding: '5px' }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Rs. 1619</p>
        </div>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff9e5', padding: '15px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <p>Bag Total</p>
          <p>Rs. 1619</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <p>Delivery Fee</p>
          <p>Rs. 0</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <p>Amount Payable</p>
          <p>Rs. 1619</p>
        </div>
      </div>

      <button
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '10px',
          backgroundColor: '#f7c346',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        PROCEED TO PAYMENT
      </button>
    </div>
  );
};

export default App5;

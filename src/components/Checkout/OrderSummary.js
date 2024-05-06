// OrderSummary.js
import React from 'react';

const OrderSummary = ({ orderDetails }) => {
  // Assuming you have some logic to extract order summary details from orderDetails

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {/* Render order summary details here */}
      {/* Example: */}
      <p>Shipping Address: {orderDetails.address}</p>
      <p>Payment Method: {orderDetails.payment}</p>
    </div>
  );
};

export default OrderSummary;

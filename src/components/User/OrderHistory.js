import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {/* Display order details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;

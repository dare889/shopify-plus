// Checkout.js
import React from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import OrderSummary from './OrderSummary';

const Checkout = () => {
  // Assuming you have some state to manage the order details
  const [orderDetails, setOrderDetails] = React.useState({
    address: {},
    payment: {}
  });

  // Handler to update the address details
  const handleAddressUpdate = (address) => {
    setOrderDetails({ ...orderDetails, address });
  };

  // Handler to update the payment details
  const handlePaymentUpdate = (payment) => {
    setOrderDetails({ ...orderDetails, payment });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-steps">
        {/* Render AddressForm component */}
        <AddressForm onUpdate={handleAddressUpdate} />
        {/* Render PaymentForm component */}
        <PaymentForm onUpdate={handlePaymentUpdate} />
        {/* Render OrderSummary component */}
        <OrderSummary orderDetails={orderDetails} />
      </div>
    </div>
  );
};

export default Checkout;

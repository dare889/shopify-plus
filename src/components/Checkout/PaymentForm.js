// PaymentForm.js
import React from 'react';

const PaymentForm = ({ onUpdate }) => {
  const [payment, setPayment] = React.useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  return (
    <form className="payment-form">
      {/* Payment form fields */}
      <input type="text" name="cardNumber" value={payment.cardNumber || ''} onChange={handleChange} placeholder="Card Number" />
      {/* Add more payment fields as needed */}

      {/* Update parent state with payment details */}
      <button type="button" onClick={() => onUpdate(payment)}>Save Payment</button>
    </form>
  );
};

export default PaymentForm;

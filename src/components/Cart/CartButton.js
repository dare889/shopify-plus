import React from 'react';

const CartButton = () => {
    const handleCheckout = () => {
        // Assuming 'items' is an array of objects representing the items in the cart
        const cartItems = items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }));
      
        // Example fetch request to a backend API for processing the checkout
        fetch('https://example.com/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Assuming you have some form of authentication or authorization token
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify({ items: cartItems })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error processing checkout');
          }
          // Handle successful checkout response (e.g., redirect to order confirmation page)
          return response.json();
        })
        .then(data => {
          console.log('Checkout successful:', data);
          // Optionally, perform any additional actions after successful checkout
        })
        .catch(error => {
          console.error('Checkout error:', error);
          // Handle error (e.g., display error message to user)
        });
      };
      

  return (
    <div className="cart-button">
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartButton;

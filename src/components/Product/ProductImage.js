import React from 'react';

const ProductImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Product" className="product-image" />;
};

export default ProductImage;

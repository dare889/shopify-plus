import React from 'react';
import ProductImage from './ProductImage';
import ProductRating from './ProductRating'; // If available

const Product = ({ product }) => {
  return (
    <div className="product">
      <ProductImage imageUrl={product.imageUrl} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {product.rating && <ProductRating rating={product.rating} />}
    </div>
  );
};

export default Product;

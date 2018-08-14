import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => (
  <div className="card col-4">
    <img className="card-img-top" src={product.image} alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <Link to={`/products/${product.id}`} className="btn btn-primary">View Product</Link>
    </div>
  </div>
);

export default Product;
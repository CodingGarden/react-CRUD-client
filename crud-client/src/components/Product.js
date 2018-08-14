import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, cols, showStock, showEdit }) => (
  <div className={`card ${cols}`}>
    <img className="card-img-top" src={product.image} alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">${product.price}</p>
      { 
        showStock ?
        <p className="card-text">{product.quantity} in stock</p> :
        ''
      }
      {
        showEdit ?
        <Link to={`/products/${product.id}/edit`} className="btn btn-danger">Edit Product</Link> :
        <Link to={`/products/${product.id}`} className="btn btn-primary">View Product</Link>
      }
    </div>
  </div>
);

export default Product;
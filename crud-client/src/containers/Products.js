import React, { Component } from 'react';
import Product from '../components/Product';
import { getAllProducts } from '../API';

class Products extends Component {
  state = {
    isLoading: true,
    products: []
  };

  componentDidMount() {
    getAllProducts()
      .then(products => {
        setTimeout(() => {
          this.setState({
            products,
            isLoading: false
          });
        }, 1000);
      });
  }

  render() {
    return (
      <div>
        <h1>Products Page</h1>
        { this.state.isLoading ?
          <h2>Loading products...</h2> :
          <div className="row">
            {
              this.state.products.map(product => (
                <Product key={product.id} product={product} cols="col-4" />
              ))
            }
          </div> 
        }
      </div>
    );
  }
}

export default Products;

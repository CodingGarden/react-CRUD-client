import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getProduct, updateProduct } from '../API';
import ProductForm from './ProductForm';

class EditProduct extends Component {
  state = {
    isLoading: true,
    product: {},
    isEditing: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getProduct(id)
      .then(product => {
        setTimeout(() => {
          this.setState({
            product,
            isLoading: false
          });
        }, 1000);
      });
  }

  updateProduct = (product) => {
    this.setState({
      isEditing: true
    });
    updateProduct(product.id, product)
      .then(() => {
        setTimeout(() => {
          this.props.history.push(`/products/${product.id}`);
        }, 1000);
      });
  };

  render() {
    return this.state.isLoading ? 
      <h2>Loading...</h2> :
      this.state.isEditing ?
      <h2>Editing...</h2> :
      <ProductForm onFormSubmitted={this.updateProduct} product={this.state.product} />
  }
}

export default withRouter(EditProduct);

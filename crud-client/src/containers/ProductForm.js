import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    product: {}
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Enter a title" required/>
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea className="form-control" id="description" placeholder="Enter a Description" rows="3" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" className="form-control" id="price" placeholder="Enter a price" required/>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" step="1" min="0" className="form-control" id="quantity" placeholder="Enter a quantity" required/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="url" className="form-control" id="image" placeholder="http://example.com/image.jpg" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default ProductForm;

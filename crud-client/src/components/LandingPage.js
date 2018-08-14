import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="jumbotron">
    <h1 className="display-3">CJ's Store</h1>
    <p className="lead">Welcome to CJ's Store!</p>
    <hr className="my-4" />
    <p>You can Create, Read, Update and Delete Products!</p>
    <p className="lead">
      <Link to="/products" className="btn btn-primary btn-lg" href="#" role="button">View Products</Link>
    </p>
  </div>
);

export default LandingPage;

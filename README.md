# Create a CRUD Client React.js v16

Build a CRUD client with React.js 16, react-router v4 and Bootstrap 4.

### Pre-requisites

* Setup API server: https://github.com/w3cj/product-CRUD-server
* yarn installed globally
  * npm install -g yarn
* create-react-app installed globally
  * npm install -g create-react-app

### TODO

* [x] create-react-app
  * [x] Remove un-needed things
* [x] Add bootstrap/bootswatch
* [x] Create Landing Page/Layout
  * [x] Header Component
  * [x] Landing Page Component
    * [x] Jumbotron
    * [x] View Products Button
* [x] Setup react-router
  * [x] yarn add react-router-dom
  * [x] Update index.js render to include Router
  * [x] Add a <Switch></Switch> to App.js 
  * [x] Add <Route></Route> to switch at / path (exact) with the LandingPage component
* [ ] List all Products
  * [x] Add <Link> in Landing Page to Products
  * [x] Create Products component
  * [x] Add <Route></Route> to switch at /products path
  * [x] Set initial state
    * isLoading, products
  * [x] In componentDidMount
    * [x] GET /api/v1/products
    * [x] setState
  * [x] Show products in render
    * [x] map over products in state
    * [x] return an element for each product
      * [x] View button to go to ViewProduct page
* [x] Refactor product element to a Product component
* [x] Refactor GET /api/v1/products to an API file
* [x] List a single Product
  * [x] Create ViewProduct component
  * [x] Add <Route></Route> to switch at /products/:id path
  * [x] Add <Link> in Product component to ViewProduct by ID
  * [x] Set initial state
    * isLoading, product
  * [x] In componentDidMount
    * [x] get id from route params
    * [x] GET /api/v1/product/:id
    * [x] setState
  * [x] Show product in render
    * [x] Show a Product component
      * [x] Instead of a View button show an Edit button (props)
* [x] Create a single Product
  * [x] Create CreateProduct component
  * [x] Add <Route></Route> to switch at /products/create path
  * [x] Add <Link> in NavBar to Create a Product
  * [x] Set initial state
    * product, creating
  * [x] Create Product Form Component
    * [x] props - product, onFormSubmitted
    * [x] change listener for all form inputs
    * [x] submit listener on form
      * [x] validate all required fields before calling onFormSubmitted prop
  * [x] create onFormSubmitted listener
    * [x] POST /api/v1/product
      * [x] setState creating
      * [x] stringify body
      * [x] content-type header
      * [x] After successful creation:
        * [x] Redirect to ViewProduct page of created product
* [ ] Update a single Product
  * [ ] Create Edit Product component
  * [ ] Add <Route></Route> to switch at /products/:id/edit path
  * [ ] Add <Link> in Product component to Edit Product by ID
  * [ ] Set initial state
    * isLoading, product, isEditing
  * [ ] In componentDidMount
    * [ ] get id from route params
    * [ ] GET /api/v1/product/:id
    * [ ] setState
  * [ ] Show Product Form component in render
    * [ ] pass props
  * [ ] create onFormSubmitted listener
    * [ ] PUT /api/v1/products/:id
      * [ ] setState isEditing
      * [ ] stringify body
      * [ ] content-type header
      * [ ] After successful update:
        * [ ] Redirect to ViewProduct page of updated product
* [ ] Delete a Product
  * [ ] Add a delete button to the ViewProduct page
    * [ ] When the delete button is clicked
      * [ ] DELETE /products/:id
      * [ ] Successful deletion should redirect to /products
* [ ] Deploy to now
  * [ ] create now.json in public folder
    * [ ] rewrite /products/* to index.html
  * [ ] yarn build
  * [ ] cd into build folder
    * [ ] now

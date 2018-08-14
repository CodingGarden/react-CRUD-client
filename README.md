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
* [ ] Setup react-router
  * [ ] yarn add react-router
  * [ ] Update main.js render to include Router
  * [ ] Add a <Switch></Switch> to App.js 
  * [ ] Add <Route></Route> to switch at / path (exact) with the LandingPage component
* [ ] List all Products
  * [ ] Add <Link> in Landing Page to Products
  * [ ] Create Products component
  * [ ] Add <Route></Route> to switch at /products path
  * [ ] Set initial state
    * isLoading, products
  * [ ] In componentDidMount
    * [ ] GET /api/v1/products
    * [ ] setState
  * [ ] Show products in render
    * [ ] map over products in state
    * [ ] return an element for each product
      * [ ] View button to go to ViewProduct page
* [ ] Refactor product element to a Product component
* [ ] Refactor GET /api/v1/products to an API file
* [ ] List a single Product
  * [ ] Create ViewProduct component
  * [ ] Add <Route></Route> to switch at /products/:id path
  * [ ] Add <Link> in Product component to ViewProduct by ID
  * [ ] Set initial state
    * isLoading, product
  * [ ] In componentDidMount
    * [ ] get id from route params
    * [ ] GET /api/v1/product/:id
    * [ ] setState
  * [ ] Show product in render
    * [ ] Show a Product component
      * [ ] Instead of a View button show an Edit button (props)
* [ ] Create a single Product
  * [ ] Create Product component
  * [ ] Add <Route></Route> to switch at /products/create path
  * [ ] Add <Link> in NavBar to Create a Product
  * [ ] Set initial state
    * product, creating
  * [ ] Create Product Form Component
    * [ ] props - product, onFormSubmitted
    * [ ] change listener for all form inputs
    * [ ] submit listener on form
      * [ ] validate all required fields before calling onFormSubmitted prop
  * [ ] create onFormSubmitted listener
    * [ ] POST /api/v1/product
      * [ ] setState creating
      * [ ] stringify body
      * [ ] content-type header
      * [ ] After successful creation:
        * [ ] Redirect to ViewProduct page of created product
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

const API_URL = 'http://localhost:5000/api/v1/products';

export function getAllProducts() {
  return fetch(API_URL)
      .then(res => res.json());
}

export function getProduct(id) {
  return fetch(`${API_URL}/${id}`)
      .then(res => res.json());
}

export function createProduct(product) {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json());
}

export function updateProduct(id, product) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json());
}

export function deleteProduct(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}

'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/matt';
  const getItems = function () {
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function (name) {
    const newItem = {
      name: name,
    };

    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(newItem),
    }

    return fetch(`${BASE_URL}/items`, options);

  };
  const updateItem = function (id, updateData) {
    const options = {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData),
    };
  
    const deleteItem = function (id, updateData) {
      const options = {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(updateData),
      };

    return fetch(`${BASE_URL}/items/${id}`,options);
  };
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  }

}());


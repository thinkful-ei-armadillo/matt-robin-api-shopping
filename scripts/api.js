'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/matt';
  const getItems = function () {
    return fetch(`${this.BASE_URL}/items`);
  };

  const createItem = function(name){
    const newItem = {
      name: name,
    };

    const options ={
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(newItem),
    }

    return fetch(`${BASE_URL}/items`,options);

  };
  return {
    getItems,createItem
  }
}());
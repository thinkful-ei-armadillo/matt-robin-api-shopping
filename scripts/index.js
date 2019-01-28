'use strict';
/* global shoppingList, store,api,Item,$ */

$(document).ready(function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.updateItem(item.id, { name: 'foobar' });
  })
  .then(() => {
    // we don't care about the response body here so we don't need to run res.json()
     console.log('updated!');
  });

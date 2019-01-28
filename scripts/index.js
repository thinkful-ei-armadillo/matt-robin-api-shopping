/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));
api.getItems()
  .then(res => res.json())
  .then(responseJson => console.log(responseJson));

console.log(api.BASE_URL);
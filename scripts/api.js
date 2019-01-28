const api = (function (){
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mattRobin';
    const getItems = function (){
      return fetch(`${this.BASE_URL}/items`);
    };
    return {
        getItems,
    }
}());
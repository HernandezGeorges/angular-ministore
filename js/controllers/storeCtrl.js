(function() {
  'use strict';

  /**
   * place where we write pieces of our angular application
   * it makes our code more maintanable, more readable and more testable
   * place where we define dependencies for our app
   */
  var app = angular.module('gemStore');

  // attach a controller to the app (register the controller)
  // app.controller('StoreController', function () {
  //   this.products = gems;
  // });

  // rewriting with dependency injection
  //                                  Service name
  //                                    |               Service name as an argument
  //                                    |                  |
  app.controller('StoreController', [ '$http', function ($http) {

    var store = this;

    store.products = [];

    $http.get('/gems/products.json').success(function(data){
      store.products = data;
    });

  }]);

}());

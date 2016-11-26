(function() {
  'use strict';

  var app = angular.module('gemStore');

  app.controller('ReviewController', function ($scope) { // pass scope to allow form reset
    this.review = {};
    this.addReview = function (product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
      $scope.reviewForm.$setPristine(); // reset current form
    };
    this.starCount = function (stars) {
      return (stars || '') + (stars > 1 ? ' stars' : ' star');
    };
  });

}());

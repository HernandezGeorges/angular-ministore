(function() {
  'use strict';

  var app = angular.module('store-directives', []);

  app.directive('productTitle', function () {
    return {
      restrict: 'E',
      templateUrl: '/gems/html/product-title.html'
    };
  });

  // Directive controller
  app.directive('productGallery', function () {
    return {
      restrict: 'E',
      templateUrl: '/gems/html/product-gallery.html',
      controller: function() { // former GalleryController moded here
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

  // moved to 'productPanels' directive controller
  /* app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function (setTab) {
      this.tab = setTab;
    };
    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
  }); */

  // Directive controller
  app.directive('productPanels', function () {
    return {
      restrict: 'E',
      templateUrl: '/gems/html/product-panels.html',
      controller: function () { // former PanelController moved here
        this.tab = 1;
        this.selectTab = function (setTab) {
          this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });

  app.directive('productPanelNav', function () {
    return {
      restrict: 'E',
      templateUrl: '/gems/html/product-panel-nav.html'
    };
  });

  app.directive('productDescription', function () {
    return {
      restrict: 'E',
      templateUrl: '/gems/html/product-description.html'
    };
  });

  app.directive('productSpecs', function () {
    return {
      restrict: 'E',
      templateUrl: '/gems/html/product-specs.html'
    };
  });

  app.directive('productReview', function () {
    return {
      restrict: 'E',
      templateUrl: '/gems/html/product-review.html'
    };
  });

}());

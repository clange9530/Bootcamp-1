angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newlisting;
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      var newListing = {
        code: '',
        name: '',
        address: ''
      };
      newListing.code = $scope.newlisting.code;
      newListing.name = $scope.newlisting.name;
      newListing.address = $scope.newlisting.address;
      $scope.listings.push(newListing);
      $scope.newlisting = {};

    };

    $scope.deleteListing = function(index) {
      var deletedListing = $scope.listings.indexOf(index);
      $scope.listings.splice(deletedListing, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
    };
  }
]);

angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      
      
      deleteListing takes the index of the selected listing and "splices" together the array at 
      the next index, skipping the selected object. 
      
      showDetails simply puts the selected object from the array into a variable that is easier
      and cleaner to access.
     */
    $scope.addListing = function() {

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

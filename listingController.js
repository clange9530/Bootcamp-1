angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newlisting;
    /*
      
      
      deleteListing takes the index of the selected listing and "splices" together the array at 
      the next index, skipping the selected object. 
      
      showDetails simply puts the selected object from the array into a variable that is easier
      and cleaner to access.
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

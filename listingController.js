angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    
    /*
      addListing creates a new object and then populates the fields with the input from the form.
      After that it pushes it onto the existing array in listings.
      
      deleteListing takes the index of the selected listing and "splices" together the array at 
      the next index, skipping the selected object. 
      
      showDetails simply puts the selected object from the array into a variable that is easier
      and cleaner to access.
     */

    $scope.newlisting;


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

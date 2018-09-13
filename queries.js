/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function(){
  Listing.findOne({name: 'Library West'}).then(function(result){
    console.log(result);
  });
};

var removeCable = function() {
  Listing.findOneAndRemove({code: 'CABL'}).then(function(result){
    console.log(result);
  }).then(function(){
    Listing.findOne({code: 'CABL'}).then(function(result){
      console.log(result);
    });
  });
}; 


var updatePhelpsLab = function() {
  Listing.findOneAndUpdate(
    {code: 'PHL'}, 
    {address: '1953 Museum Rd, Gainesville, FL, 32603'}
    ).then(function(){
    Listing.findOne({code: 'PHL'}).then(function(result){
      console.log(result);
    });
  });
};

var retrieveAllListings = function() {
  Listing.find({}).then(function(result){
    console.log(result);
  });
  
  /*
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

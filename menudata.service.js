//The MenuDataService should have 2 methods:

//getAllCategories - this method should return a promise 
//which is a result of using the $http service, using the
//following REST API endpoint: https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)

//getItemsForCategory(categoryShortName) - this method
//should return a promise which is a result of using the
//$http service, using the following REST API endpoint: 
//https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json, 
//where, before the call to the server, your code should
//append whatever categoryShortName value was passed in
//as an argument into the getItemsForCategory method.

(function () {
    
    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        
        var service = this;
        
        service.getAllCategories = function(){
            var response = $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
            });
            return response;
        };

        service.getItemsForCategory = function(categoryShortName){
            var response = $http({
                method: "GET",
                url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json"),
            });
            return response;
        };
    };
    
})();
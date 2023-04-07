(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItemsDir', foundItemsDir);

    function foundItemsDir(){
        
        var ddo = {
            restrict: 'E',
            scope: {
                // foundItems: '<'
            },
            controller: NarrowItDownController,
            controllerAs: 'narctrl',
            bindToController: true,

            templateUrl: 'foundItems.html'
        }

        return ddo;

    }
    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
    
        service.getMatchedMenuItems = function(searchTerm){
            var arrayOfItems = [];
            var foundItems = [];

            return $http({
                    method: "GET",
                    url: ("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
            }
            ).then(function (result) {
                var allItems = result.data;

                for(let i in allItems){ 
                    for(let j in allItems[i]){
                        for(let p in allItems[i][j]){

                            var descriptions = Object.keys(allItems[i][j][p]);
                            descriptions = descriptions.toString();

                            if(descriptions.indexOf('description') != -1){
                                arrayOfItems.push(allItems[i][j][p]);
                            }
                        }
                    } 
                }

                for(let i in arrayOfItems){
                    
                    if(arrayOfItems[i].description.indexOf(searchTerm) != -1){
                        let item = {
                            name: arrayOfItems[i].name,
                            short_name: arrayOfItems[i].short_name,
                            myDescription: arrayOfItems[i].description
                        };
                        foundItems.push(item);
                    }
                }
                //console.log(foundItems);
                return foundItems;
            }
            );
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narctrl = this;
        narctrl.found = [];
        narctrl.found[0] = " ";
        narctrl.getMatched = function(){
            if(narctrl.myInput != undefined){
                narctrl.stuff = MenuSearchService.getMatchedMenuItems(narctrl.myInput);
                narctrl.stuff.then(value => narctrl.found = value);
            }
        };

        narctrl.remove = function(itemIndex){ 
            narctrl.found.splice(itemIndex, 1);
        };

        narctrl.isEmpty = function(){
            if(narctrl.found[0] == " "){
                return true;
            }
            if(narctrl.found.length <= 0){
                return true;
            }else{
                return false;
            }
        }

        narctrl.warningEmpty = function(){
            if(narctrl.found[0] == " "){
                return false;
            }
            if(narctrl.found.length <= 0){
                return true;
            }else{
                return false;
            }
        }
    }


})();
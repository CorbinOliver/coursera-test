(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var tobuyctrl = this;
        tobuyctrl.MyItems = ShoppingListCheckOffService.getToBuyArray();

        tobuyctrl.buy = function(itemIndex){
            ShoppingListCheckOffService.buyService(itemIndex);
        }

        tobuyctrl.isBuyEmpty = function(aList){
            if(aList === undefined || aList == 0){
                return true;
            }else{
                return false;
            }
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtctrl = this;
        boughtctrl.MyItems = ShoppingListCheckOffService.getBoughtArray();

        boughtctrl.isBoughtEmpty = function(aList){
            if(aList === undefined || aList == 0){
                return true;
            }else{
                return false;
            }
        }
    }

    function ShoppingListCheckOffService(){
        var service = this;

        service.makeItem = function(itemName, itemQuantity){
            var NewItem = {
                name: itemName,
                quantity: itemQuantity
              };
            return NewItem;
        }

        var BoughtArray = [];

        var ToBuyArray = [
            service.makeItem("Golden Rings", 5),
            service.makeItem("Calling Birds", 4),
            service.makeItem("French Hens", 3),
            service.makeItem("Turtle Doves", 2),
            service.makeItem("Partridge in a Pear Tree", 1),
        ]

        service.getToBuyArray = function(){
            return ToBuyArray;
        }

        service.getBoughtArray = function(){
            return BoughtArray;
        }

        //Method that pushes item from ToBuy to 
        //Bought when button is pressed
        service.buyService = function(itemIndex){
            BoughtArray.push(ToBuyArray[itemIndex]);
            ToBuyArray.splice(itemIndex, 1);
        }
    }

})();
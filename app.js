(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    $scope.checkfunc = function(){  

        var lunchItemsArray = $scope.list;

        if(lunchItemsArray == null){
            $scope.message = "Please enter data first!";
            return;
        }
        
        lunchItemsArray = $scope.list.split(',');

        if(lunchItemsArray.length <= 3 && lunchItemsArray.length > 0){
            $scope.message = "Enjoy!";
            return;
        }else{
            $scope.message = "Too much!";
            return;
        }
    };
}

})();
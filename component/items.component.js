//Create a component called 'items' that shows all
//of the menu items for a particular category.

//The 'items' component should NOT directly use 
//the MenuDataService to fetch their own data. 
//Instead, the proper data should be simply passed
//into the component. 
//(Hint: use the one-way < binding).

(function () {
    'use strict';

    angular.module('MenuApp')
    .component('item', {
        templateUrl: 'items.template.html',
        bindings: {
            catItems: "<"
        }
    });
    
})();
(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['item'];
    function ItemsController(item){
        var ctrl = this;
        console.log(item.data);
        ctrl.items = item.data.menu_items;
    };
})();

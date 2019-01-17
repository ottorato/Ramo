(function () {
    'use strict';
    var controllerId = 'menu';
    angular.module('app').controller(controllerId, ['commonService', '$interval', '$scope', '$window', '$uibModal',
    	function (commonService, $interval, $scope, $window, $uibModal) {
        var menuCtrl = this;
        console.log("Getting menues");
        menuCtrl.menuItems = getMenus();

        function getMenus() {
            var menus = [
            	{
            		display: "Catálogos",
            		href: "#",
            		children: [
                    	{
                    		display: "Estados",
                    		href: "/paises",
                    		children: []
                    	}, {
                    	  display: "Países",
                    		href: "/paises",
                    		children: []
                    	}
                    ]
            	}
            ];
            return menus;
        }

    }]);
})();

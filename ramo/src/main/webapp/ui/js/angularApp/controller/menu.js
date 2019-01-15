(function () {
    'use strict';
    var controllerId = 'menu';
    angular.module('app').controller(controllerId, ['commonService', '$interval', '$scope', '$window', '$uibModal',
    	function (commonService, $interval, $scope, $window, $uibModal) {
        var menuCtrl = this;
        console.log("Getting menues");
        menuCtrl.getMenus = getMenus();

        function getMenus() {
            var menus = [
            	{
            		display: "Models",
            		href: "/modems",
            		children: [
            		    {
            		      display: "Alta",
                  		href: "/modems",
                  		children: []
            		    }, {
            		      display: "Baja",
                  		href: "/modems",
                  		children: []
            		    }
            		  ]
            	}, {
            	  display: "Países",
            		href: "/modems",
            		children: []
            	}
            ];
            return menus;
        }

    }]);
})();

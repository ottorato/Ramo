(function () {
        'use strict';
        var controllerId = 'dashBoardController';
        angular.module('app').controller(controllerId, ['$scope', '$location',
            '$sce', 'common', 'commonService','$templateCache',
            function ($scope, $location, $sce, common, commonService, $templateCache) {

                var vm = this;
                var getLogFn = common.logger.getLogFn;
                var logSuccess = getLogFn(controllerId, 'success');
                var logError = getLogFn(controllerId, 'error');

                $('a.ng-binding').each(function (index) {
                    $(this).removeClass("menuResaltado");
                    if ($(this).text().indexOf('Dashboard') > -1) {
                        $(this).addClass('menuResaltado');
                    }
                });
                   
            }]);
    })();
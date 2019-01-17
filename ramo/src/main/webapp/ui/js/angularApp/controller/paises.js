(function () {
    'use strict';
    var controllerId = 'modemsController';
    angular.module('app').controller(controllerId, [ '$scope', '$location', '$sce', 'uiGridConfiguration', 'common', 'commonService','$templateCache', 'catalogoService',
    function ($scope, $location, $sce, uiGridConfiguration, common, commonService, $templateCache, catalogoService) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var logSuccess = getLogFn(controllerId, 'success');
        var logError = getLogFn(controllerId, 'error');
        
        vm.windowTitle = "Catálogos";
        vm.DEFAULT_OPTION_SELECT = "Take your pick";
        
        vm.selTab1 = 1;
        vm.selTab2 = 2;
        
        vm.isSet = function (panel, tab) {
            var selected = false;

            if (panel === 'preview' && vm.selTab2 === tab) selected = true;
            if (panel === 'data' && vm.selTab1 === tab) selected = true;

            return selected;
        };
        
        vm.estados = [];
        vm.paises = [];
        
        vm.gridOptions = new uiGridConfiguration();
        vm.gridOptions.enableFiltering = false;
        vm.gridOptions.multiSelect = false;
        vm.gridOptions.paginationPageSizes = [ 25, 50, 75, 100];
        vm.gridOptions.paginationPageSize = 25;
        vm.gridOptions.noUnselect = true;
        vm.gridOptions.enableScrollbars = 2;
        vm.gridOptions.keepLastSelected = false;
        
        vm.gridOptions.onRegisterApi = function (gridApi) {
        	vm.gridApi = gridApi;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                     $scope.selUEN = row.entity;
                     vm.selUEN = row.entity;
            });
        };
        
        var botones = '<div class="text-center">' +
        '<a href="#" title="Editar la Solicitud" ng-show="true" ng-click="grid.appScope.goEdicion(row.entity.cto)"> <i class="fa fa-pencil "></i></a>' +
        '<a href="#" title="Cancelar Solicitud" ng-click="grid.appScope.goCancelar(row.entity.cto)"> <i class="fa fa-close "></i></a>' +
        '</div>';
        
        vm.gridOptions.columnDefs = [
            {
                field: 'pais.id',
                displayName: 'Id País',
                width: '10%'
            }, {
            	field: 'pais.nombre',
                displayName: 'Nombre País',
                width: '30%'
            }, {
            	field: 'id',
                displayName: 'Id Estado',
                width: '10%'
            }, {
            	name: 'nombre',
            	displayName: 'Nombre Estado',
                width: '30%'
            }, {
            	name: 'nombreCorto',
            	displayName: '',
                width: '15%'
            }, {
                name: 'del',
            	displayName: '',
                enableColumnMenu: false,
                enableHiding: false,
                enableFiltering: false,
                width: '5%',
                cellTemplate: botones
            }
        ];
        
        function listaPaises() {
        	catalogoService.listaEstadosPaises().then(function (data) {
        		if (data) {
        			vm.estados = data.objeto.estados;
        			vm.paises = data.objeto.paises;
        			vm.gridOptions.data = vm.estados;
        		}
        	})
        }
        
        listaPaises();
        
        vm.saveEstado = function() {
        	catalogoService.guardarEstado(vm.estado).then(function (data) {
        		if (data) {
        			if (data.valor == 0) {
        				logSuccess(data.mensaje);
        			} else {
        				logError(data.mensaje);
        			}
        		} else {
        			logError("Error no especificado")
        		}
        	})
        }

    }]);
})();
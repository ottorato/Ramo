(function () {
    'use strict';
    var controllerId = 'modemsController';
    angular.module('app').controller(controllerId, [ '$scope', '$location', '$sce', 'uiGridConfiguration', 'common', 'commonService','$templateCache', 'catalogoService',
    function ($scope, $location, $sce, uiGridConfiguration, common, commonService, $templateCache, catalogoService) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var logSuccess = getLogFn(controllerId, 'success');
        var logError = getLogFn(controllerId, 'error');
        
        vm.windowTitle = "CPEs";
        vm.DEFAULT_OPTION_SELECT = "Take your pick";
        
        vm.selTab1 = 1;
        vm.selTab2 = 2;
        
        vm.isSet = function (panel, tab) {
            var selected = false;

            if (panel === 'preview' && vm.selTab2 === tab) selected = true;
            if (panel === 'data' && vm.selTab1 === tab) selected = true;

            return selected;
        };
        
        vm.paises = [
        	{
        		id: 1,
        		nombre: "México"
        	}, {
        		id: 2,
        		nombre: "USA"
        	}
        ];
        
        vm.gridOptions = new uiGridConfiguration();
        vm.gridOptions.enableFiltering = true;
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
        
        vm.gridOptions.columnDefs = [
            {
                field: 'id',
                displayName: 'ID',
                width: '6%'
            }, {
            	field: 'uen.sapId',
                displayName: 'SAP ID',
                width: '10%'
            }, {
            	field: 'uen.nombre',
                displayName: 'Nombre',
                width: '35%'
            }, {
            	name: 'escenario.descripcion',
            	displayName: 'Escenario',
                width: '19%'
            }, {
            	name: 'porcentaje',
            	displayName: '% Recuperación',
                width: '10%'
            }, {
            	name: 'dias',
            	displayName: 'Días Anteriores',
                width: '10%'
            }, {
                name: 'del',
            	displayName: '',
                enableColumnMenu: false,
                enableHiding: false,
                enableFiltering: false,
                width: '10%',
                cellTemplate: '<div class="text-center"></div>'
            }
        ];
        
        function listaPaises() {
        	catalogoService.listaPaises().then(function (data) {
        		if (data) {
        			vm.paises = data.objeto;
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
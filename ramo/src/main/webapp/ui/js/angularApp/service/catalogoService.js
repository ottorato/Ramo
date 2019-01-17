(function () {
    'use strict';

    var serviceId = 'catalogoService';

    angular.module('app').factory(serviceId, ['commonService', 
    	function (commonService) {
    	
	    	var service = {
				listaPaises: listaPaises,
				listaEstadosPaises: listaEstadosPaises,
				guardarEstado: guardarEstado
	    	};
	    	return service;
	    	
	    	function listaPaises() {
	            var res = commonService.ajaxGetRequets('/catalogo/listaPaises');
	            return res;
	        }
	    	
	    	function listaEstadosPaises() {
	            var res = commonService.ajaxGetRequets('/catalogo/listaEstadosPaises');
	            return res;
	        }
	    	
	    	function guardarEstado(estadoDTO) {
	            return commonService.ajaxPostRequets('/catalogo/guardarEstado', estadoDTO);
	        }
    }]);
})();
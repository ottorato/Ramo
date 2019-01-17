(function () {
    var app = angular.module('app', [
        // Angular modules
        'ngAnimate', // animations
        'ngRoute', // routing
        'ngSanitize', // sanitizes html bindings (ex: sidebar.js)
        'ui.bootstrap', //
        'blockUI',
        'ui.grid',
        'ui.grid.grouping', // Agrupa los registros
        'ui.grid.selection', // Activa la seleccion de registros en el grid
        'ui.grid.expandable', // Dependencia para desplegar registros
        'ui.grid.exporter', // Exporta datos a PDF y CSV
        'ui.grid.pagination', // Activa paginacion del grid
        'ui.grid.pinning',
        'ui.grid.edit', //Permite celdas editables
        'ui.grid.resizeColumns',
        'ui.grid.moveColumns',
        'ui.grid.autoResize',
        'ui.mask', //angular-ui-mask
        'bootstrapSubmenu', // Menu Directive
        //'ui.select',
        'common', // common functions, logger, spinner 
        //'DocumentacionProveedorDirective'
        'commonModule'
    ]);

    app.config(appConfig);

    appConfig.$inject = ['$routeProvider', '$locationProvider', 'blockUIConfig', '$provide', '$httpProvider'];

    function appConfig($routeProvider, $locationProvider, blockUIConfig, $provide, $httpProvider) {
    	$provide.decorator('GridOptions', gridOptionsdecorator);
    	
        blockUIConfig.message = 'Loading...';
        var blockTemplate = '<div class="block-ui-overlay"></div>' +
        					'<div class="block-ui-message-container" aria-live="assertive" aria-atomic="true">' +
        						'<div class="block-ui-message" ng-class="$_blockUiMessageClass"><i class="fa fa-spinner fa-spin fa-2x fa-fw" style="vertical-align:middle;" ></i>&nbsp; Loading...</div> ' +
        					'</div>' +
        					'<iframe class="cover" src="about:blank"></iframe>';
    	blockUIConfig.template = blockTemplate;
        blockUIConfig.delay = 10;
        $locationProvider.html5Mode({
        	  enabled: true,
        	  requireBase: true
        });
        
        $routeProvider.when('/', {
            templateUrl: 'view/template/main.html'
        })
        .when('/CP',{
        	 templateUrl: 'view/template/main.html'
        })
        .when('/paises',{
        	 templateUrl: 'view/template/paises.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
    
    gridOptionsdecorator.$inject = ['$delegate', 'i18nService'];

    function gridOptionsdecorator($delegate, i18nService) {
        var gridOptions;
        gridOptions = angular.copy($delegate);
        gridOptions.initialize = function (options) {
            var initOptions;
            initOptions = $delegate.initialize(options);
            return initOptions;
        };
        //es is the language prefix you want
        i18nService.setCurrentLang('es');
        return gridOptions;
    }

    resolver.$inject = ['$route', '$q', 'common', '$location', '$timeout', '$uibModal', '$window', '$rootScope'];

    function resolver($route, $q, common, $location, $timeout, $uibModal, $window, $rootScope) {
    	var controllerId = 'app';
    	var path = $location.path();
    	console.log("Entrando a resolver..." + path);
    	var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var logSuccess = getLogFn(controllerId, 'success');
        var logError = getLogFn(controllerId, 'error');
        var logWarning = getLogFn(controllerId, 'warning');
    	
//        if($route.current.params.id){
//            var deferred = $q.defer();
//            contratoService.getContratoById($route.current.params.id).then(function (data) {
//                // console.log(data);
//                if (!data.idContrato){
//                	logError("Error, " + Constants.Context.Usuario + " no cuentas con el permiso para ejecutar esta acción.");
//                	$timeout(function() {
//                		$location.path('/busqueda');
//                    }, 3000);
//                    deferred.reject("Error Contrato nulo");
//                } else {
//                    contratoService.contrato = data;
//                    deferred.resolve(data);
//                }
//            });
//            return deferred.promise;
//        }
    }
    
    app.run(runApp);

    runApp.$inject = ['$route', '$rootScope', '$location'];

    // Handle routing errors and success events
    function runApp($route, $rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
        	var path = $location.path();
        	console.log("Ruta..." + path);
        });
    }
    
    
})();

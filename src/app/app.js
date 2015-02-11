
angular.module('ars', [
  'ngRoute'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/views/home.html'
    })
    .when('/quemsomos', {
      controller: 'QuemSomosCtrl',
      templateUrl: '/views/quemsomos.html'
    })
    .when('/dpvat', {
      controller: 'DpvatCtrl',
      templateUrl: '/views/dpvat.html'
    })
    .when('/formularios', {
      controller: 'FormulariosCtrl',
      templateUrl: '/views/formularios.html'
    })
    .when('/contato', {
      controller: 'ContatoCtrl',
      templateUrl: '/views/contato.html'
    })
    .when('/404', {
      controller: '404Ctrl',
      templateUrl: '/views/404.html'
    })
    .otherwise({
      redirectTo: '/404'
    });
})
.controller('HomeCtrl', function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
})
.controller('QuemSomosCtrl', function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
})
.controller('DpvatCtrl', function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
})
.controller('FormulariosCtrl', function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
})
.controller('ContatoCtrl', function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
})
.controller('404Ctrl', function($rootScope, $location){
  	'use strict';
   	$rootScope.activetab = $location.path();
});

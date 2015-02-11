
angular.module('ars', [
  'ngRoute'
])
.config(["$routeProvider", function ($routeProvider) {
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
}])
.controller('HomeCtrl', ["$rootScope", "$location", function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
}])
.controller('QuemSomosCtrl', ["$rootScope", "$location", function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
}])
.controller('DpvatCtrl', ["$rootScope", "$location", function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
}])
.controller('FormulariosCtrl', ["$rootScope", "$location", function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
}])
.controller('ContatoCtrl', ["$rootScope", "$location", function($rootScope, $location) {
  	'use strict';
	$rootScope.activetab = $location.path();
}])
.controller('404Ctrl', ["$rootScope", "$location", function($rootScope, $location){
  	'use strict';
   	$rootScope.activetab = $location.path();
}]);

(function(module) {
try {
  module = angular.module('ars');
} catch (e) {
  module = angular.module('ars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/ars/views/404.html',
    '<h1>404 - Pagina não encontrada</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('ars');
} catch (e) {
  module = angular.module('ars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/ars/views/contato.html',
    '<h1>Contato</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('ars');
} catch (e) {
  module = angular.module('ars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/ars/views/dpvat.html',
    '<h1>Sobre o DPVAT</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('ars');
} catch (e) {
  module = angular.module('ars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/ars/views/formularios.html',
    '<h1>Formularios</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('ars');
} catch (e) {
  module = angular.module('ars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/ars/views/home.html',
    '<h1>Home</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('ars');
} catch (e) {
  module = angular.module('ars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/ars/views/quemsomos.html',
    '<h1>Quem Somos</h1>');
}]);
})();

(function(module) {
try {
  module = angular.module('ars');
} catch (e) {
  module = angular.module('ars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/ars/views/partials/nav.html',
    '<nav><ul><li ng-class="{active: activetab == \'/quemsomos\'}"><a href="#/quemsomos">Quem Somos</a></li><li ng-class="{active: activetab == \'/dpvat\'}"><a href="#/dpvat">Sobre o DPVAT</a></li><li ng-class="{active: activetab == \'/formularios\'}"><a href="#/formularios">Formulários</a></li><li ng-class="{active: activetab == \'/contato\'}"><a href="#contato">Contato</a></li></ul></nav>');
}]);
})();

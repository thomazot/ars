
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
    .when('/contact-form', {
        templateUrl: '/views/contact-form.php'
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
.controller('ContatoCtrl', function ($rootScope, $location, $http) {
  	'use strict';
	$rootScope.activetab = $location.path();

    $rootScope.result = 'hidden'
    $rootScope.resultMessage;
    $rootScope.formData = {}; //formData is an object holding the name, email, subject, and message
    $rootScope.submitButtonDisabled = false;
    $rootScope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $rootScope.submit = function(contactform) {
        $rootScope.submitted = true;
        $rootScope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($rootScope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                if (data.success) { //success comes from the return json object
                    $rootScope.submitButtonDisabled = true;
                    $rootScope.resultMessage = data.message;
                    $rootScope.result='bg-success';
                } else {
                    $rootScope.submitButtonDisabled = false;
                    $rootScope.resultMessage = data.message;
                    $rootScope.result='bg-danger';
                }
            });
        } else {
            $rootScope.submitButtonDisabled = false;
            $rootScope.resultMessage = 'Failed Please fill out all the fields.';
            $rootScope.result='bg-danger';
        }
    }
})
.controller('404Ctrl', function($rootScope, $location){
  	'use strict';
   	$rootScope.activetab = $location.path();
});
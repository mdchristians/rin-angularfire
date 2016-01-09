(function() {
	
	'use strict';
	
	angular
		.module('app.components', [])
		.config(config);
	
	/** @ngInject */
    function config($stateProvider) {
        
        $stateProvider

        .state('app.components', {
            url: '/components',
            views: {
                'content@app': {
                    templateUrl: 'app/components/components.html',
                    controller: 'ComponentsController as vm'
                }
            },
            resolve: {
                
                // controller will not be loaded until $requireAuth resolves
                // Auth refers to our $firebaseAuth wrapper in the example above
                'currentAuth': ['Auth', function(Auth) {
        
                    // $requireAuth returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $stateChangeError (see above)
                    return Auth.$requireAuth();
                }]
            }
        });
    }
})();
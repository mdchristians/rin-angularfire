(function() {

    'use strict';

    angular
        .module('app.home', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {

        $stateProvider.state('app.home', {
            url  : '/home',
            views  : {
                'content@app': {
                    templateUrl: 'app/home/home.html',
                    controller : 'HomeController as vm'
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

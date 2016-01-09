(function() {
    
    'use strict';

    angular
        .module('app.core')
        .factory('Auth', AuthService);

    /** @ngInject */
    function AuthService($firebaseAuth, FURL) {
        
        var ref = new Firebase(FURL);
		return $firebaseAuth(ref);
		
    }
})();
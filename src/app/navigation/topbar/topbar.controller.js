(function() {

    'use strict';

    angular
        .module('app.topbar')
        .controller('TopbarController', TopbarController);

    /** @ngInject */
    function TopbarController(User, Auth, $state) {

        var vm = this;
        vm.logout = logout;

        Auth.$onAuth(function(authData) {
      		vm.currentUser = new User(authData.uid);
    	});

        function logout() {
        	Auth.$unauth();
        	$state.go('app.login');
        }
    }

})();

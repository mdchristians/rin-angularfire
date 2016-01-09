(function() {
    
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state, Auth, FURL, toastr) {

        var vm = this;

        vm.login = login;

		vm.user = {
			email: null,
			password: null
		};

		/*
		 * Function to handle logging a user via firebase
		 */
		function login() {
			Auth.$authWithPassword({
				email: vm.user.email,
				password: vm.user.password
			}).then(function(data) {
				$state.go('app.home');
			}).catch(function(error) {
				toastr.error(error);
			});
		}
        
    }

})();
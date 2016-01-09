(function() {
	
	'use strict';

	angular
		.module('app.register')
		.controller('RegisterController', RegisterController);

	function RegisterController($state, Auth, FURL, toastr) {

        var vm = this;
        var ref = new Firebase(FURL);

        vm.register = register;

        vm.user = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			confirmPassword: null
		};

        function register() {
        	var pass = vm.user.password;
			var passCon = vm.user.confirmPassword;

			if(pass !== passCon) {
				toastr.error('Make sure both passwords match each other!');
			}
			else {
				saveNewUser();
			}
        }

        function saveNewUser() {
        	Auth.$createUser({
				email: vm.user.email,
				password: vm.user.password
			})
			.then(function(data) {
				if(data) {
					ref.child('users').child(data.uid).set({
						firstName: vm.user.firstName,
						lastName: vm.user.lastName,
						email: vm.user.email
					});
					login();
				}
			})
			.catch(function(error) {
				toastr.error(error);
			});
        }

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

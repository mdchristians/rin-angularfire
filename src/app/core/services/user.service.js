(function() {
	
	'use strict';

	angular
		.module('app.core')
		.factory('User', UserService);

	/** @ngInject */
	function UserService(Auth, FURL, $firebaseObject) {

		return User;

		function User(uid) {
			var ref = new Firebase(FURL + 'users/');
			var userRef = ref.child(uid);
			return $firebaseObject(userRef);
		}
	}
})();
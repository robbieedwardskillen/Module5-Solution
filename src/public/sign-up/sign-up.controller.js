(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SubmissionService'];
function SignUpController(SubmissionService){
	var $ctrl = this
	$ctrl.firstName = "";
	$ctrl.lastName = "";
	$ctrl.email = "";
	$ctrl.phone = "";
	$ctrl.dish = "";
	$ctrl.submitted = false;
	$ctrl.submit = function(){
		$ctrl.submitted = SubmissionService.submit($ctrl.firstName, $ctrl.lastName, $ctrl.email,
			$ctrl.phone, $ctrl.dish);
	}

}

})();

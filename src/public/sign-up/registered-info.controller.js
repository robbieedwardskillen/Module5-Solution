(function () {
"use strict";

angular.module('public')
.controller('RegisteredInfoController', RegisteredInfoController);

RegisteredInfoController.$inject = ['SubmissionService', 'MenuService', 'ApiPath', 'allMenuItems'];
function RegisteredInfoController(SubmissionService, MenuService, ApiPath, allMenuItems){
	var $ctrl = this
	$ctrl.basePath = ApiPath;
	$ctrl.info = SubmissionService.getInformation();
	$ctrl.valid = false;
	$ctrl.favDish = "";
	for(var i = 0; i < allMenuItems.menu_items.length; i++){
		if (allMenuItems.menu_items[i].short_name == $ctrl.info.dish){
			$ctrl.valid = true;
			$ctrl.favDish = allMenuItems.menu_items[i].name;
		}
	}
}

})();

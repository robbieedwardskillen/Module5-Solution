(function () {
"use strict";

angular.module('public')
.controller('HomeController', HomeController);

HomeController.$inject = ['SubmissionService'];
function HomeController(SubmissionService) {
  var $ctrl = this;
  $ctrl.submitted = SubmissionService.submitted;
}


})();

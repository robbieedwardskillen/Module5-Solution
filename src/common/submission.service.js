(function () {
"use strict";

angular.module('common')
.service('SubmissionService', SubmissionService);


function SubmissionService() {
  var service = this;
  var info = {};
  service.submitted = false;
  service.submit = function(fName, lName, eMail, phoneNum, favDish){
    if (fName && lName && eMail && phoneNum){
      service.submitted = true;
      info.firstName = fName;
      info.lastName = lName;
      info.email = eMail;
      info.phone = phoneNum;
      info.dish = favDish || "no favorite dish given";
      return true;
    }
    else{
      return false;
    }

  }
  service.getInformation = function(){
    return info;
  }

}



})();

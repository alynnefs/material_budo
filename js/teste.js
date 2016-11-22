require("angular");

angular.module("MyApp",[
  require("angular-material"),
  require("angular-aria"),
  require("angular-animate")
]);


//angular.module('MyApp',['ngMaterial'])
angular.module("MyApp").controller('AppCtrl', function($scope,$mdDialog) {
/*  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500
  };
  */

  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Botao clicado!')
        .textContent('Login de mentira')
        .ariaLabel('Alert Dialog Demo')
        .ok('OK')
        .targetEvent(ev)
    );
  };
  
});


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/

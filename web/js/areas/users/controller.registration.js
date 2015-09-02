(function() {

    'use strict';

    angular.module('quom.users')
           .controller('UserRegistrationCtrl', [             
             '$scope', '$element', '$timeout', '$location',
             ctrlFn]);


    function ctrlFn($scope, $element, $timeout, $location) {
        $scope.user = {
            email: '',
            firstName: '',
            lastName: '' 
        };

        $scope.forms = { };        
        $scope.stepIndex = 0;
        
        $scope.nextStep = function() {
            $scope.stepIndex += 1;
        };

        $scope.submit = function() {
            console.log('submit', $scope.user);
        };

        $scope.cancel = function() {
            $scope.user = {};
            $location.path('/login').replace();
            
        };
    }

})();
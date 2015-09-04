(function() {

    'use strict';

    angular.module('quom.users')
           .controller('UserRegistrationCtrl', [             
             '$scope', '$element', '$timeout', '$location', '$http', 'Notification',
             ctrlFn]);

    function ctrlFn($scope, $element, $timeout, $location, $http, Notification) {
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
            $http.post('/registration', $scope.user)
            .success(function() {
                Notification.success('Success');                
                $location.path('/login').replace();
            })
            .error(function() {
                Notification.error('Error');
                $scope.stepIndex = 0;
            });                        
        };


    }

})();
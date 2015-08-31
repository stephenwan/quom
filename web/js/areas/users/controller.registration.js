(function() {

    'use strict';

    angular.module('quom.users')
           .controller('UserRegistrationCtrl', [             
             '$scope', '$element', '$timeout',
             ctrlFn]);


    function ctrlFn($scope, $element, $timeout) {
        $scope.user = {
            email: '',
            firstName: '',
            lastName: '' 
        };

        $scope.forms = { };        

    }

})();
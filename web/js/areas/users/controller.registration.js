(function() {

    'use strict';

    angular.module('quom.users')
           .controller('UserRegistrationCtrl', [             
             '$scope', '$element',
             ctrlFn]);


    function ctrlFn($scope, $element) {
        $scope.user = {
            email: 'example@example.com',
            firstName: '',
            lastName: '' 
        };

    }

})();
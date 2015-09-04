(function() {

    'use strict';

    var quomApp = angular.module('quom', [
      'ngMaterial',
      'ngMessages',
      'ngPassword',
      'ui-notification',
      'quom.users'
    ]);

    quomApp.config([
      '$mdThemingProvider', 'NotificationProvider',
      quomAppConfig
    ]);
        

    function quomAppConfig($mdThemingProvider, NotificationProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();

        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'bottom'
        });

    }
    
})();
(function() {

    'use strict';

    var quomApp = angular.module('quom', [
      'ngMaterial',
      'ngMessages',
      'ngPassword',
      'quom.users'
    ]);

    quomApp.config( function($mdThemingProvider){
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
                          .primaryPalette('yellow')
                          .dark();
    });

    
})();
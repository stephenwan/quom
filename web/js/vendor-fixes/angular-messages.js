(function() {
    'use strict';

    angular.module('ngMessages').config(function($provide) {
        $provide.decorator('ngMessageDirective', function($delegate, $animate) {            
            var directive = $delegate[0];

            directive.compile = fixLinkFn($animate);            
            return $delegate;
        });

        $provide.decorator('ngMessageExpDirective', function($delegate, $animate) {            
            var directive = $delegate[0];
            directive.compile = fixLinkFn($animate);            
            return $delegate;
        });
        
    })
    
    function fixLinkFn($animate) {
        return function () {
            return function(scope, element, attrs, ngMessagesCtrl, $transclude) {
                var commentNode = element[0];

                var records;
                var staticExp = attrs.ngMessage || attrs.when;
                var dynamicExp = attrs.ngMessageExp || attrs.whenExp;
                var assignRecords = function(items) {
                    records = items
                  ? (angular.isArray(items)
                  ? items
                  : items.split(/[\s,]+/))
                  : null;
                    ngMessagesCtrl.reRender();
                };

                if (dynamicExp) {
                    assignRecords(scope.$eval(dynamicExp));
                    scope.$watchCollection(dynamicExp, assignRecords);
                } else {
                    assignRecords(staticExp);
                }

                var currentElement, messageCtrl;
                ngMessagesCtrl.register(commentNode, messageCtrl = {
                    test: function(name) {
                        return contains(records, name);
                    },
                    attach: function() {
                        if (!currentElement) {
                            $transclude(scope, function(elm) {
                                $animate.enter(elm, null, element)
                                currentElement = elm;

                                currentElement.on('$destroy', function() {
                                    // Added the equality check to fix incorrect deregistration from race condition
                                    if (currentElement && currentElement == elm) {
                                        ngMessagesCtrl.deregister(commentNode);
                                        messageCtrl.detach();
                                    }
                                    
                                });
                            });
                        }
                    },
                    detach: function() {
                        if (currentElement) {
                            var elm = currentElement;
                            currentElement = null;
                            $animate.leave(elm);
                        }
                    }
                });
            }
        }

    };
    
    function contains(collection, key) {
        if (collection) {
            return angular.isArray(collection)
          ? collection.indexOf(key) >= 0
          : collection.hasOwnProperty(key);
        } else return null;
    }
    
    
})();
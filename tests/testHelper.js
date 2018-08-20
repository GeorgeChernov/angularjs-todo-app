angular
    .module('testHelper.module', [])
    .factory('testHelper', testHelper);

function testHelper($compile, $rootScope,) {
    function createComponent(componentMarkup, bindings) {

        // prepare scope
        let scope = $rootScope.$new();
        angular.extend(scope, bindings);

        // create element
        let element = angular.element(componentMarkup);
        element = $compile(element)(scope);
        scope.$digest();

        return element;
    }

    return {
        createComponent: createComponent
    };
}
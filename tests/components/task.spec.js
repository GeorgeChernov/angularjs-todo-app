describe('task component', function () {

    beforeEach(module('app'));

    describe('controller', function () {
        var $componentController;

        beforeEach(inject(function (_$componentController_) {
            $componentController = _$componentController_;
        }));

        it('should has name property with value from bindings', function () {
            var bindings = {
                name: "task name"
            };

            var ctrl = $componentController('task', null, bindings);

            expect(ctrl.name).toBe('task name');
        })
    });

    describe('dom', function () {
        let $compile;
        let scope;

        beforeEach(inject(($rootScope, _$compile_) => {
            scope = $rootScope.$new();
            $compile = _$compile_;
        }));

        function createComponent(componentMarkup, componentScope) {
            let element = angular.element(componentMarkup);
            element = $compile(element)(componentScope);
            componentScope.$digest();

            return element;
        }

        it('should display correct name', () => {
            // prepare scope
            scope["name"] = "Test task";

            // create the element
            var element = createComponent(`<task name="{{name}}"></task>`, scope);

            // test
            expect(element.text().trim()).toEqual('Test task');
        });
    });
});

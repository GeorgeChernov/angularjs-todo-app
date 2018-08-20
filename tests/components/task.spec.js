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
        let testHelper;

        beforeEach(module('testHelper.module'));

        beforeEach(inject((_testHelper_) => {
            testHelper = _testHelper_;
        }));

        it('should display correct name', () => {
            var bindings = { name: 'Test task' };
            var element = testHelper.createComponent(`<task name="{{name}}"></task>`, bindings);

            expect(element.text().trim()).toEqual('Test task');
        });
    });
});

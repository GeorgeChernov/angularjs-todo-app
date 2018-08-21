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
        });

        it('should has isDone property with value from bindings', function () {
            var bindings = {
                isDone: true
            };

            var ctrl = $componentController('task', null, bindings);

            expect(ctrl.isDone).toBeTruthy();
        });

        it('should call the `onToggle` binding, when clicking on the task', function () {
            var onToggleSpy = jasmine.createSpy('onToggle');

            var bindings = {
                name: "task name",
                isDone: true,
                onToggle: onToggleSpy
            };

            var ctrl = $componentController('task', null, bindings);

            ctrl.onClick();

            expect(onToggleSpy).toHaveBeenCalledWith({
                $event: {
                    name: "task name"
                }
            });
        });
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

        it('should not be marked as done by default', () => {
            var bindings = {
                name: 'Test task'
            };

            var element = testHelper.createComponent(
                `<task name="{{name}}"></task>`,
                bindings);

            expect(element[0].querySelectorAll('span.task-done').length).toBe(0);
        });

        it('should not be marked as done when isDone = false', () => {
            var bindings = {
                name: 'Test task',
                isDone: false
            };

            var element = testHelper.createComponent(
                `<task name="{{name}}" is-done="isDone"></task>`,
                bindings);

            expect(element[0].querySelectorAll('span.task-done').length).toBe(0);
        });

        it('should be marked as done when isDone = true', () => {
            var bindings = {
                name: 'Test task',
                isDone: true
            };

            var element = testHelper.createComponent(
                `<task name="{{name}}" is-done="isDone"></task>`,
                bindings);

            expect(element[0].querySelectorAll('span.task-done').length).toBe(1);
        });
    });
});

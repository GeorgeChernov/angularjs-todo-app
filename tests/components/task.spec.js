describe('task component', function () {

    var $componentController;

    beforeEach(module('app'));
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

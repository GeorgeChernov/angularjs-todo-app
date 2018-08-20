var taskComponent = {
    bindings: {
        name: "@",
        isDone: "<",
        onUpdate: "&"

    },
    controller: function () {
        this.onIsDoneChanged = function () {
            this.onUpdate({
                $event: {
                    name: this.name,
                    isDone: this.isDone
                }
            });
        }
    },
    template:
    `
        <div class='task'>
            <input type='checkbox' ng-model="$ctrl.isDone" ng-change="$ctrl.onIsDoneChanged()" />
            <span>{{$ctrl.name}}</span>
        </div>
    `
};

angular
    .module('app')
    .component('task', taskComponent);
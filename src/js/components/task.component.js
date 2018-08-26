var taskComponent = {
    bindings: {
        name: "@",
        isDone: "<",
        isPostponed: "<",
        onUpdate: "&"

    },
    controller: function () {
        this.onClick = function () {
            this.onUpdate({
                $event: {
                    name: this.name,
                    isDone: !this.isDone,
                    isPostponed: this.isPostponed
                }
            });
        };
        this.onLater = function () {
            this.onUpdate({
                $event: {
                    name: this.name,
                    isDone: this.isDone,
                    isPostponed: !this.isPostponed
                }
            });
        };
    },
    template:
    `
        <div class='task' ng-click="$ctrl.onClick()">
            <span ng-show="$ctrl.isPostponed">For later: </span>
            <span ng-class="{'task-done': $ctrl.isDone}">{{$ctrl.name}}</span>
            <button ng-click='$ctrl.onLater()'>Later</button>
        </div>
    `
};

angular
    .module('app')
    .component('task', taskComponent);
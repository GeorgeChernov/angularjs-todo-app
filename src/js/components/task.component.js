var taskComponent = {
    bindings: {
        name: "@",
        isDone: "<",
        onToggle: "&"

    },
    controller: function () {
        this.onClick = function(){
            this.onToggle({
                $event: {
                    name: this.name
                }
            });
        };
    },
    template:
    `
        <div class='task' ng-click="$ctrl.onClick()">
            <span ng-class="{'task-done': $ctrl.isDone}">{{$ctrl.name}}</span>
        </div>
    `
};

angular
    .module('app')
    .component('task', taskComponent);
var taskComponent = {
    bindings: {
        name: "@"
    },
    controller: function () { },
    template:
    `
        <div class='task'>
            <span>{{$ctrl.name}}</span>
        </div>
    `
};

angular
    .module('app')
    .component('task', taskComponent);
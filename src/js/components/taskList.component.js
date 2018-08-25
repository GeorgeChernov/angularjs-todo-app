var taskList = {
    bindings: {
        listOfTasks: "<"
    },
    controller: function () { },
    template:
    `
    <task ng-repeat='task in $ctrl.listOfTasks' 
        name="{{task.name}}" 
        is-done="task.isDone" 
        on-toggle="task.onToggle($event)">
    </task>`
}

angular
    .module('app')
    .component('taskList', taskList);
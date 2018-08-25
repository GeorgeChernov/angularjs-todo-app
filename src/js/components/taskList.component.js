var taskList = {
    bindings: {
        listOfTasks: "<"
    },
    controller: function () {

        var list = [];

        this.$onInit = function () {
            list = this.listOfTasks;
            list.forEach(function (task) {
                task.onToggle = onToggleHandler;
            });
        };

        function onToggleHandler($event) {
            var task = findTaskByName($event.name);
            if (task) {
                task.isDone = !task.isDone;
            }
        }

        function findTaskByName(taskName) {
            var resultTask = null;

            list.forEach(function (task) {
                if (task.name === taskName) {
                    resultTask =  task;
                }
            });

            return resultTask;
        }
    },
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
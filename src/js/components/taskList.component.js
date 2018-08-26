var taskList = {
    bindings: {
        listOfTasks: "<",
        onUpdate: "&"
    },
    controller: function () {
        this.$onInit = function () {
            bindOnToggleHandler.call(this);
        };

        this.$onChanges = function(changes){
            if(changes.listOfTasks){
                this.listOfTasks = angular.copy(this.listOfTasks);
                bindOnToggleHandler.call(this);
            }
        };

        function bindOnToggleHandler(){
            var bindedOnToggleHandler = onToggleHandler.bind(this);
            this.listOfTasks.forEach(function (task) {
                task.onToggle = bindedOnToggleHandler;
            });
        }

        function onToggleHandler($event) {
            var task = findTaskByName.call(this, $event.name);
            if (task) {
                task.isDone = !task.isDone;
                this.onUpdate({
                    $event:{
                        listOfTasks: this.listOfTasks
                    }
                });
            }
        }

        function findTaskByName(taskName) {
            var resultTask = null;
            this.listOfTasks.forEach(function (task) {
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
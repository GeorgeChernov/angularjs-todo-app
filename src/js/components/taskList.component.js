var taskList = {
    bindings: {
        listOfTasks: "<",
        onUpdate: "&"
    },
    controller: function () {
        this.$onInit = function () {
            bindOnUpdateHandler.call(this);
        };

        this.$onChanges = function(changes){
            if(changes.listOfTasks){
                this.listOfTasks = angular.copy(this.listOfTasks);
                bindOnUpdateHandler.call(this);
            }
        };

        function bindOnUpdateHandler(){
            var bindedOnUpdateHandler = onUpdateHandler.bind(this);
            this.listOfTasks.forEach(function (task) {
                task.onUpdate = bindedOnUpdateHandler;
            });
        }

        function onUpdateHandler($event) {
            var task = findTaskByName.call(this, $event.name);
            if (task) {       
                task.isDone = $event.isDone;
                task.isPostponed = $event.isPostponed;

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
        is-postponed="task.isPostponed" 
        on-update="task.onUpdate($event)">
    </task>`
}

angular
    .module('app')
    .component('taskList', taskList);
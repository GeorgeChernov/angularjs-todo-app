var addTask = {
    bindings:{
        onAdd: '&'
    },
    controller: function(){
        this.taskName = "";
        this.onClick = function(){
            this.onAdd({
                $event: {
                    taskName: this.taskName
                }
            });
            this.taskName = "";
        }
    },
    template: 
    `
        <div class='task add-task'>
            <input type='text' ng-model='$ctrl.taskName' />
            <button ng-click='$ctrl.onClick()'>Add Task</button>
        </div>
    `
};

angular
    .module('app')
    .component('addTask', addTask);
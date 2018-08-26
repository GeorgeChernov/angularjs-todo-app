var addTask = {
    bindings:{
        onAdd: '&'
    },
    controller: function(){
        this.taskName = "";
        this.onSubmit = function(){
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
            <form name='addTaskForm' ng-submit='$ctrl.onSubmit()'>
                <input name='taskNameField' required='' type='text' ng-model='$ctrl.taskName' />
                <button ng-disabled='addTaskForm.$invalid' type='submit'>Add Task</button>
            </form>
        </div>
    `
};

angular
    .module('app')
    .component('addTask', addTask);
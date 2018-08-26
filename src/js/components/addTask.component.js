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
            <form ng-submit='$ctrl.onSubmit()'>
                <input type='text' ng-model='$ctrl.taskName' />
                <button type='submit'>Add Task</button>
            </form>
        </div>
    `
};

angular
    .module('app')
    .component('addTask', addTask);
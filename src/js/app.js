function ToDoAppController() {
    this.listOfTasks = [
        {
            name: 'To Do Something',
            isDone: true
        },
        {
            name: 'To Do Something Another',
            isDone: false
        }
    ];

    this.onUpdateHandler = function($event){
        console.log(JSON.stringify($event));
    };

    this.onAddNewTask = function($event){
        var newList = angular.copy(this.listOfTasks);
        newList.push({
            name: $event.taskName,
            isDone: false
        });

        this.listOfTasks = newList;
    };
}


angular
    .module('app', [])
    .controller('ToDoAppController', ToDoAppController);
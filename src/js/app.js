function ToDoAppController() {
    this.listOfTasks = [
        {
            name: 'Read the article',
            isDone: true,
            isPostponed: false
        },
        {
            name: 'Check the PR',
            isDone: false,
            isPostponed: true
        }
    ];

    this.onUpdateHandler = function($event){
        console.log(JSON.stringify($event));
    };

    this.onAddNewTask = function($event){
        var newList = angular.copy(this.listOfTasks);
        newList.push({
            name: $event.taskName,
            isDone: false,
            isPostponed: false
        });

        this.listOfTasks = newList;
    };
}


angular
    .module('app', [])
    .controller('ToDoAppController', ToDoAppController);
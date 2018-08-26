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
}


angular
    .module('app', [])
    .controller('ToDoAppController', ToDoAppController);
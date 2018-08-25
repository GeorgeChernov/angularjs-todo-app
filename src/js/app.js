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
    ]
}


angular
    .module('app', [])
    .controller('ToDoAppController', ToDoAppController);
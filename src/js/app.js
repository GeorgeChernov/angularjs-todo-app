function ToDoAppController() {
    this.listOfTasks = [
        {
            name: 'To Do Something',
            isDone: true,
            onToggle: function(){}
        },
        {
            name: 'To Do Something Another',
            isDone: false,
            onToggle: function(){}
        }
    ]
}


angular
    .module('app', [])
    .controller('ToDoAppController', ToDoAppController);
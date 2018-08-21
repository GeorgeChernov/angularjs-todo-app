function ToDoAppController() {
    this.name = "Test";
    this.isDone = false;
    this.onToggle = function($event){
        this.isDone = !this.isDone;
    }
}


angular
    .module('app', [])
    .controller('ToDoAppController', ToDoAppController);
var app = {
    bindings: {},
    controller: function () {
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

        this.onUpdateHandler = function ($event) {
            console.log(JSON.stringify($event));
        };

        this.onAddNewTask = function ($event) {
            var newList = angular.copy(this.listOfTasks);
            newList.push({
                name: $event.taskName,
                isDone: false,
                isPostponed: false
            });

            this.listOfTasks = newList;
        };
    },
    template:
    `
    <div>
        <add-task on-add="$ctrl.onAddNewTask($event)"></add-task>
        <task-list list-of-tasks="$ctrl.listOfTasks" 
                on-update="$ctrl.onUpdateHandler($event)">
        </task-list>
    </div>
    `
};

angular
    .module('app.module', ['ui.router'])
    .component('app', app)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
            url: '/',
            component: 'app'
        });
        $urlRouterProvider.otherwise('/');
    });
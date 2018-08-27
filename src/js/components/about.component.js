var about = {
    bindings: {},
    controller: function () { },
    template: `About: this is an AngularJS app.`
};

angular
    .module('about.module', ['ui.router'])
    .component('about', about)
    .config(function ($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            component: 'about'
        });
    });
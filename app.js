angular
  .module('aloha', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('animals', {
        url: '/animals',
        templateUrl: 'animals/animals.html',
        controller: 'animalsController'
      })
      .state('dreams', {
        url: '/dreams',
        templateUrl: 'dreams/dreams.html',
        controller: 'dreamsController'
      })
      .state('activities', {
        url: '/fun_activities',
        templateUrl: 'fun_activities/fun_activities.html',
        controller: 'activitiesController'
      })

    $urlRouterProvider
      .otherwise('/animals')
  })

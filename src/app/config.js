(function () {
  const angular = require('angular')

  angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', configRoutes])

  function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController as home'
          })
          .state('personalityChart', {
            url: '/personality-chart',
            templateUrl: 'app/personality-chart/personality-chart.html'
          })

          $urlRouterProvider.otherwise('/')
    }
}())

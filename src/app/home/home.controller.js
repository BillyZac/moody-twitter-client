(function(){
  const angular = require('angular')

  angular.module('app')
  .controller('HomeController', HomeController, [])

  function HomeController() {
    console.log('ima controller');
  }
}())

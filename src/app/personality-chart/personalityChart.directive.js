(function () {
  const angular = require('angular')

  angular.module('app')
    .directive('personalityChart', personalityChart)

  function personalityChart() {
      return {
          restrict: 'E',
          replace: true,
          template: '<div class="personalityChart"></div>',
          scope: {
              data: '='
          },
          link: function ($scope, $element, $attr) {
            var h = angular.element($element).parent()[0].clientHeight;
            var w = angular.element($element).parent()[0].clientWidth;

            var chart = chartFunction(h, w);
            chart.draw($scope.data)
          },
          controller: 'HomeController'
      }
  }


  function chartFunction(h, w) {
    return {
      draw: draw
    }

    var height = h
    var width = w

    function draw(data) {
    }
  }
  
})()

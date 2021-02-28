(function (){
    'use strict';
    angular.module('NameCalculator',[])
    .controller('NameCalculatorController',function ($scope) {
        $scope.name ="Key";
        $scope.totalValue =0;

        $scope.displayNumeric = function () {

            $scope.totalValue = computing($scope.name);
        };
        function computing(String) {
            let stringValue=0;
            for (let i=0; i<String.length;i++){
                stringValue += String.charCodeAt(i);
            }
            return stringValue;
        }

    })
})();
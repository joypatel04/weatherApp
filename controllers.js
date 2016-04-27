/**
 * Created by Joy on 4/13/16.
 */


// Angular Controller
weatherApp.controller('cityCtrl',['$scope','cityService','$location' ,function ($scope, cityService, $location) {
    $scope.cityName = cityService.cityName;

    $scope.$watch('cityName', function () {
        cityService.cityName= $scope.cityName;
    });

    $scope.submit = function () {
       $location.path("/forecast")
    };
}]);

weatherApp.controller('forecastCtrl',['$scope','$routeParams' ,'cityService','weatherService' ,function ($scope, $routeParams, cityService, weatherService) {
    $scope.cityName = cityService.cityName;

    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.getWeather($scope.cityName, $scope.days);


    // $scope.productAPI = $resource("https://1009f2d2b6e696cf4f0f6472af5873d9:3ddbc436d7a602d7764b90bb2c475c41@grocery4me.myshopify.com/admin/products.json");
    //
    // $scope.productResult = $scope.productAPI.get();
    //
    // console.log(productResult);

    // console.log($scope.weatherResult);

    $scope.convertToFahrenheit = function (degK) {

        return Math.round((1.8 * (degK - 273)) + 32);

    };

    $scope.convertToDate = function (dt) {

        return new Date(dt * 1000)
    };
}]);

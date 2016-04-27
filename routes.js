/**
 * Created by Joy on 4/13/16.
 */

// Angular Config
weatherApp.config(function ($routeProvider) {
    $routeProvider.
    when('/',{
        templateUrl: "view/city.html",
        controller: "cityCtrl"

    }).
    when('/forecast',{
        templateUrl: "view/forecast.html",
        controller: "forecastCtrl"
    }).
    when('/forecast/:days',{
        templateUrl: "view/forecast.html",
        controller: "forecastCtrl"
    }).
    otherwise ({
        redirectTo: '/'
    })

});
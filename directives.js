/**
 * Created by Joy on 4/13/16.
 */

// Angular Directive

weatherApp.directive('weatherReport',function () {
    return {
        restrict: 'E',
        templateUrl: 'directive/weatherReport.html',
        replace: true,
        scope:{
            weatherDay: "=",
            convertDate: "&",
            convertFahrenheit: "&",
            dateFormat: "@"
        }
    }

});
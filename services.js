/**
 * Created by Joy on 4/13/16.
 */

// Angular Service
weatherApp.service('cityService',[function () {

    this.cityName = "San Francisco, CA"

}]);

weatherApp.service('weatherService',['$resource', function ($resource) {
    this.getWeather = function (cityName,days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=2bbe0cc3325436256a26335306b40457", {
            callback: "JSON_CALLBACK"
        }, {
            get: {method: "JSONP"}
        });

        return weatherAPI.get({q: cityName, cnt: days});
    }
}]);
/**
 * Created by Joy on 4/12/16.
 */

// Angular Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);



// http://api.openweathermap.org/data/2.5/forecast/daily?APPID=2bbe0cc3325436256a26335306b40457

//
// $scope.productAPI = $resource("https://:APIkey"+ ':' + ":Password" + "@grocery4me.myshopify.com/admin/products.json",{
//     callback: "JSON_CALLBACK" }, { get: { method : "JSONP"}}
// );
//
// $scope.productResult = $scope.productAPI.get({APIKEY: "1009f2d2b6e696cf4f0f6472af5873d9" , Password: "3ddbc436d7a602d7764b90bb2c475c41"  });
//
// console.log(productResult);
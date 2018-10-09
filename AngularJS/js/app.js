var app = angular.module("html", ['ngRoute','ngAnimate']);

app.controller("pagina1", function ($scope) {
    $scope.nombre = "David";
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main/main.html",
            controller: "mainController"
        })
        .when("/subirImagenes", {
            templateUrl: "pages/subirImagenes/subirImagenes.html"
        })
        .when("/crearSesion", {
            templateUrl: "pages/crearSesion/crearSesion.html",
            controller: "crearSesionController"
        })
});
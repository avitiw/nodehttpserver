angular.module('msgApp',['services']).
  config(function ($routeProvider) {
      $routeProvider.
        when('/', { controller: DashboardCtrl, templateUrl: 'dboard.html' }).
        otherwise({ redirectTo: '/' });
  });
  
  function DashboardCtrl($scope,Customers,Incidents){
		$scope.Customers = Customers.query();
		$scope.Incidents = Incidents.query();
  }
angular.module('services',['ngResource']).
	factory('Customers',function($resource){
		var Customers = $resource('/Customers?top=10');
		return Customers;
	}).
	factory('Incidents',function($resource){
		var Incidents = $resource('/Incidents?top=10');
		return Incidents;
	});
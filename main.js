
var tttApp = angular.module("tttApp", []);
	
	tttApp.controller('TttController', function($scope){
	$scope.board = [
		{status:"0",pos:0},{status:"0", pos:1},{status:"0",pos:2},
		{status:"0",pos:3},{status:"0", pos:4},{status:"0",pos:5},
		{status:"0",pos:6},{status:"0", pos:7},{status:"0",pos:8},
		
	];
	
	$scope.boxSelect = function(cell) {
		if(cell.status === "0"){alert("space is open")}

	};

});

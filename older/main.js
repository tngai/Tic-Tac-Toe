alert("js is loaded");
var tttApp = angular.module("tttApp", []);
	tttApp.controller('TttController', function($scope){
	$scope.board = [
		{box1Status:"u",pos:0},{box1Status:"b", pos:1},{box1Status:"c",pos:2},
		{box1Status:"u",pos:3},{box1Status:"b", pos:4},{box1Status:"c",pos:5},
		{box1Status:"u",pos:6},{box1Status:"b", pos:7},{box1Status:"c",pos:8},
		
	]
	$scope.mark = [
		x: "url("images/x.png")",
		y: ""
	]
	$scope.boxSelect = function(boxNum) {
		for(i = 1; i <= 9; i++) {
			if( i %2 != 0) {
				mark = true;
				alert(mark)
				return 
				$scope.board[Box1Status[boxNum]] = "x";
				
				alert(mark)
				return 
			}
			
		}

	}

});

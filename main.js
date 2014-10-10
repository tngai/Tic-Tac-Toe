alert("js is loaded");
var tttApp = angular.module("tttApp", []);
	tttApp.controller('TttController', function($scope){
	$scope.board = [
		{Box1Status:"u"},{Box1Status:"b"},{Box1Status:"c"},
		{Box1Status:"d"},{Box1Status:"e"},{Box1Status:"f"},
		{Box1Status:"g"},{Box1Status:"h"},{Box1Status:"i"},
		{Box1Status:"j"},{Box1Status:"k"},{Box1Status:"l"},
	]
	$scope.boxSelect = function(boxNum) {
		for(i = 1; i <= 9; i++) {
			alert(i);
			return;
			if( i %2 != 0) {
				alert(i)
				return 
				$scope.board[Box1Status[boxNum]] = "x";
				mark = "moveX";
				alert(mark)
				return 
			}
			
		}

	}

});

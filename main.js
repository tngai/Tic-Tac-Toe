
var tttApp = angular.module("tttApp", ["firebase"]);
	
	tttApp.controller('TttController', function($scope,$firebase){
	 
	 $scope.remoteGameContainer = 
 	 $firebase(new Firebase("https://tnttt.firebaseIO.com")) ;

	$scope.board = new Object ();
		$scope.board["0"]={status:"0"};
		$scope.board["1"]={status:"0"};
		$scope.board["2"]={status:"0"};
		$scope.board["3"]={status:"0"};
		$scope.board["4"]={status:"0"};
		$scope.board["5"]={status:"0"};
		$scope.board["6"]={status:"0"};
		$scope.board["7"]={status:"0"};
		$scope.board["8"]={status:"0"};
  
  //endStat freezes the game while 
	$scope.endStat= false;
	$scope.moveCounter = 0;
	$scope.endMess= "test";

	

//special sauce here (for firebase compatibility)
	$scope.gameContainer = {
		boardArray: $scope.board,
		turn: $scope.moveCounter,
		endMessage: $scope.endMess,
		endStatus: $scope.endStat

	};

	//angular stuff 
	$scope.remoteGameContainer.$bind($scope, 'gameContainer');

	$scope.$watch('gameContainer', function() {
		console.log('gameContainer changed!') ;
	}) ; 



	//angular functions --------------->
	$scope.gameInit = function() {
		$scope.gameContainer.endStatus= false;
		;
		alert("test"+$scope.gameContainer.endStatus)
		$scope.$apply();
	} 	

		//checkWin function checks for winner after ever turn to end round
	$scope.checkWin = function (cell,turn,endStatus,endMessage) {  
		
		//horizontal check
			for(a= 0; a <= 6; a+=3) {
				if($scope.gameContainer.boardArray[a].status != "0" && $scope.gameContainer.boardArray[a].status == $scope.gameContainer.boardArray[a+1].status && $scope.gameContainer.boardArray[a+1].status == $scope.gameContainer.boardArray[a+2].status) {
					
					$scope.gameContainer.turn++;
					$scope.gameContainer.endStatus= true;
					$scope.gameContainer.endMessage= cell.status +"Wins!!!";
					

				};
			};
		//vertical check 
			for(a= 0; a <= 2; a++) {
				if($scope.gameContainer.boardArray[a].status !="0" && $scope.gameContainer.boardArray[a].status == $scope.gameContainer.boardArray[a+3].status && $scope.gameContainer.boardArray[a+3].status == $scope.gameContainer.boardArray[a+6].status) {
					$scope.gameContainer.winner = cell.status; 
					$scope.gameContainer.turn++;
					$scope.gameContainer.endStatus= true;
					$scope.gameContainer.endMessage= cell.status +"Wins!!!";
				};
			};

		//diagonal forward check 
					if($scope.gameContainer.boardArray[0].status != "0" && $scope.gameContainer.boardArray[0].status== $scope.gameContainer.boardArray[4].status && $scope.gameContainer.boardArray[4].status== $scope.gameContainer.boardArray[8].status) {	
						$scope.gameContainer.winner = cell.status; 
						$scope.gameContainer.turn++;
						$scope.gameContainer.endStatus= true;
						$scope.gameContainer.endMessage= cell.status +"Wins!!!";
					};
		//diagonal back check 
					if($scope.gameContainer.boardArray[2].status !="0" && $scope.gameContainer.boardArray[2].status == $scope.gameContainer.boardArray[4].status && $scope.gameContainer.boardArray[4].status== $scope.gameContainer.boardArray[6].status) {
						$scope.gameContainer.winner = cell.status; 
						$scope.gameContainer.turn++;
						$scope.gameContainer.endStatus= true;
						$scope.gameContainer.endMessage= cell.status +"Wins!!!";
					};			
	};

	//main function that is initiated after every click to mark unmarked cells and check initiate checkWin function 

	$scope.boxSelect = function(cell) {
	 	
	 	if(cell.status == "0"){
	 		if($scope.gameContainer.turn % 2 != 0){
	 		$scope.gameContainer.turn++;
	 		cell.status = "x";
	 		}	
	 		else if($scope.gameContainer.turn % 2 == 0){
	 			cell.status = "o";
	 			$scope.gameContainer.turn++;	
	 		}
	 	}
	 	if($scope.gameContainer.turn == 9) {
	 			$scope.gameContainer.endStatus= true;
				$scope.gameContainer.endMessage= "We have a Tie!!!";
	 	};
	 	$scope.checkWin(cell,$scope.gameContainer.endMessage, $scope.gameContainer.endStatus);
	};
		});





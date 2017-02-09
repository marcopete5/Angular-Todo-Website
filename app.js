var app = angular.module('todoList', []);

app.controller('mainController', ['$scope', '$http', 'httpService', function($scope, $http, httpService){

		// var allTodos = $http.get('http://api.vschool.io/marcus/todo');

		// allTodos.then(function (response) {
		// 	var yourTodos = (response.data);
		// 	$scope.allTodos = yourTodos;
			
		// });

		httpService.getRequest().then(function(stuff){
			$scope.allTodos = stuff;
		})

		$scope.toggleEditing = function () {
			$scope.editing = !scope
		}

		// $scope.deleteTodo = function (index, id) {
		// 	$http.delete('http://api.vschool.io/marcus/todo/' + id);
		// 	$scope.allTodos.splice(index, 1);
		// };

		$scope.deleteTodo = function (index, id) {
			httpService.deleteRequest(id);
			$scope.allTodos.splice(index, 1);
		};

		// $scope.checkedTodo = function(id, completed) {
		// 	$http.put('http://api.vschool.io/marcus/todo/' + id,
		// 	 {completed: completed}).then(function(response){
		// 	 	console.log(response);
		// 	 })
		// }

		$scope.checkedTodo = function(id, completed) {
			httpService.putRequest(id, completed)
		}


		$scope.stripedTask = function(completed, title) {
			if (completed === true) {
				$scope.title.innerHTML = '<strike>title</strike>'
			}
		}

		$scope.addTodo = function (todos) {
			var newTodo = angular.copy(todos);
			$scope.allTodos.push(newTodo);
			$scope.newTodo = {};

			httpService.postRequest(todos);
			
			// var postTodo = $http.post('http://api.vschool.io/marcus/todo/', todos);

			// postTodo.then(function (response) {
			// console.log(response);
			// });

		}

		



}]);
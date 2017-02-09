angular.module('todoList')

.service('httpService', ['$http', function ($http){
	
	this.getRequest = function(){
		return $http.get('http://api.vschool.io/marcus/todo')
			.then(function(response){
				return response.data;
			})
	}

	this.deleteRequest = function(id){
		return $http.delete('http://api.vschool.io/marcus/todo/' + id);
	}

	this.putRequest = function(id, completed){
		return $http.put('http://api.vschool.io/marcus/todo/' + id,
			{completed: completed}).then(function(response){
				return response;
			})
	}

	this.postRequest = function(todos){
		return $http.post('http://api.vschool.io/marcus/todo/', todos)
			.then(function(response){
				return response;
			})
	}

}]);
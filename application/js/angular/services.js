
app.service('kraService',function($http){

	return{

		// For Fetch Program  
		fetchProgramsData: function(loginData) {
			var sendLoginData = {
				url: 'http://startvapi.scoredata.com/api/programlisting/',
				// url: 'http://localhost/scoredata/php/file1.php',
				method: 'GET',
				data: loginData,
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					'Authorization':'Token aac4449e4b9359f1d522c9a1cb6270c5606bb448'
				}
			};

			return $http(sendLoginData);
		},

	}

});
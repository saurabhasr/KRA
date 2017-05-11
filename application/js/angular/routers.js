//config or routing
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	//routing 
	.when('/goals',		{title:'ScoreData',templateUrl:'goals.html',controller:'goalsCtrl'})
	.when('/details',	{title:'ScoreData',templateUrl:'details.html',controller:'detailsCtrl'})

	//default page 
	.otherwise({title:'/goals', templateUrl:'goals.html',controller:'goalsCtrl'});
}])
.run(['$location', '$rootElement', '$window', '$rootScope', function($location, $rootElement, $window, $rootScope) {
	
	// For closing the opened pop ups when route changes
	$rootScope.$on('$routeChangeSuccess', function( ) {
		//Write code here ... 
		// if(localStorage.auth == "true"){
		// 	console.log("Yes");
		// }
		// else{
		// 	console.log("No");
		// 	location.href = "../../login/content/index.html"
		// }

	});

}]);
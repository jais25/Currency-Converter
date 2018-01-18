var app = angular.module("CurrencyConvert", []); 
function MyCtrl($scope) {
    $scope.numOnlyRegex = /\d+\.?\d*/;
}
app.controller("myCtrl", function($scope,$http) {

    $scope.currencies = {
"CAD":	1.2444
,"EUR":	0.81947
,"USD": 1};
    $scope.convert = function(){
    	$http.get("http://api.fixer.io/latest?base=USD")
    	.then(function(response){
    		from_value = $scope.currency_val_from;
    		from_currency_rate = response.data.rates[$scope.currency_from];
    		to_currency_rate = response.data.rates[$scope.currency_to];

    		to_value = from_value*(to_currency_rate/from_currency_rate);
    		if($scope.currency_to == 'USD'){
    			to_value = from_value/from_currency_rate;
    		}
    		if($scope.currency_from == 'USD'){
    			to_value = from_value*to_currency_rate;
    		}

    		$scope.currency_val_to = to_value;
    	});
    }
});


var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){

  $scope.tickedToppings = 0;
  $scope.tickedVeggies = 0;
  $scope.tickedCheese = 0;
  $scope.tickedSauces = 0;
  $scope.cart = [];
  $scope.total = 0;

  var crustCnt = 0;
  var previousVal = 0;

  $scope.updatePriceCrust = function(value){
    if(crustCnt == 0){
      $scope.total = $scope.total + value;
      crustCnt++;
    } else{
      if(previousVal != value) $scope.total = $scope.total + value - previousVal;
    }
    previousVal = value;
  };

  var requiredFunc = function(ticked){
    if(ticked > 0){
      return true;
    } else {
      return false;
    }
  };

  $scope.updatePrice = function(key, value, bool){

    if(Object.keys($scope.toppings).indexOf(key) != -1){
      if(bool) $scope.tickedToppings++;
      else $scope.tickedToppings--;
      $scope.requiredToppings = requiredFunc($scope.tickedToppings);
    }

    if(Object.keys($scope.veggies).indexOf(key) != -1){
      if(bool) $scope.tickedVeggies++;
      else $scope.tickedVeggies--;
      $scope.requiredVeggies = requiredFunc($scope.tickedVeggies);
    }

    if(Object.keys($scope.cheese).indexOf(key) != -1){
      if(bool) $scope.tickedCheese++;
      else $scope.tickedCheese--;
      $scope.requiredCheese = requiredFunc($scope.tickedCheese);
    }

    if(Object.keys($scope.sauces).indexOf(key) != -1){
      if(bool) $scope.tickedSauces++;
      else $scope.tickedSauces--;
      $scope.requiredSauces = requiredFunc($scope.tickedSauces);
    }

    if(bool == true){
      $scope.total = $scope.total + value;
      $scope.cart.push(key + ' ' +value);
    } else if(bool == false){
      $scope.total = $scope.total - value;
      $scope.cart.splice($scope.cart.indexOf(key), 1);
    }
    console.log($scope.cart);
  };

  $scope.reloadRoute = function() {
    $route.reload();
  }

  $scope.base = {
    "Thin": 350,
    "Normal": 300
  }

  $scope.toppings = {
    "Anchovies": 50,
    "Bacon": 100,
    "Canadian Bacon": 150,
    "Chicken": 100,
    "Italian Sausage": 175,
    "Sausage": 125,
    "Pepperoni": 90
  }

  $scope.veggies = {
    "Green Peppers": 50,
    "Mushrooms": 25,
    "Onions": 30,
    "Tomatoes": 30,
    "Banana Peppers": 70,
    "Pineapple Tidbits": 65,
    "Ripe Olives": 95,
    "Green Olives": 90,
    "Jalapeno Peppers": 75
  }

  $scope.cheese = {
    "Parmesan/Romano": 100,
    "Three Cheese Blend": 150
  }

  $scope.sauces = {
    "Chicken BBQ Pizza Sauce": 80,
    "Ranch Sauce": 70,
    "Spinach Alfredo Sauce": 75
  }

  $scope.sides = {
    "Chicken Poppers": 200,
    "Chicken Wings(Roasted)": 250,
    "Chocolate Chip Cookie": 150,
    "Double Chocolate Chip Brownie": 200
  }

  $scope.extras = {
    "Pepperoncini": 25,
    "BBQ Dipping Sauce": 25,
    "Blue Cheese Dipping Sauce": 25,
    "Buffalo Dipping Sauce": 25,
    "Cheese Dipping Sauce": 25,
    "Garlic Sauce": 25,
    "Garlic Parmesan Sauce": 25,
    "Honey Chipotle Sauce": 25
  }


  $scope.updatePriceCrust($scope.base["Thin"]);

}]);

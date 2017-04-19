var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){

  $scope.tickedToppings = 0;
  $scope.tickedVeggies = 0;
  $scope.tickedCheese = 0;
  $scope.cart = [];
  $scope.total = 0;
  $scope.thin = 350;
  $scope.normal = 300;

  $scope.maxSelected = function(checked, key){
    if(checked){
      $scope.data.push(key);
      return $scope.data.length;
    }
  };

  $scope.updatePriceCrust = function(value){

    if(value == $scope.thin){
      $scope.normal = 0;
      $scope.total += $scope.thin;
    }else if(value == $scope.normal){
      $scope.thin = 0;
      $scope.total += $scope.normal;
    }

    /*if($scope.totalCrust != value && $scope.totalCrust != 0){
      if($scope.totalCrust > value){
        $scope.total = $scope.total + $scope.totalCrust - value;
        $scope.totalCrust = value;
      }else{
        $scope.total = $scope.total + value - $scope.totalCrust;
      }
    }else if($scope.totalCrust == 0){
      $scope.total = $scope.total + value;
      $scope.totalCrust = value;
    }*/
  };

  $scope.updatePrice = function(key, value, bool){

    if(Object.keys($scope.toppings).indexOf(key) != -1){
      if(bool) $scope.tickedToppings++;
      else $scope.tickedToppings--;
    }

    if(Object.keys($scope.veggies).indexOf(key) != -1){
      if(bool) $scope.tickedVeggies++;
      else $scope.tickedVeggies--;
    }

    if(Object.keys($scope.cheese).indexOf(key) != -1){
      if(bool) $scope.tickedCheese++;
      else $scope.tickedCheese--;
    }

    if(bool == true){
      $scope.total = $scope.total + value;
      $scope.cart.push(key, value);
    } else if(bool == false){
      $scope.total = $scope.total - value;
      $scope.cart.splice($scope.cart.indexOf(key), 2);
    }
    console.log($scope.cart);
  };

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

}]);

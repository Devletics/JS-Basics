//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  
var isTyler = function(something) {
  if (something === "Tyler") {
     return true;
  }
  else {
    return false;
  }
}

isTyler(name);


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


//Code Here

var getName = function() {
  var x = prompt("Input Your name");
  console.log(x);
}

getName();

//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  
  var welcome = function() {
    var x = prompt("Input Your name");
    alert("Welcome, " + x);
  }
  
 welcome();


//Next problem


//What is the difference between arguments and parameters?

  //Answer Here

// A Parameter is the placeholder and an argument is what is passed into the function

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

//Answer Here

//Null, 0, Undefined

//Next Problem

//Create a function called myName that returns your name

  //Code Here
  
  var myName = function(){
  return "Josh";
}

myName();

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var myName = function(){
  return "Josh";
}

  var newMyName = myName();
  


//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.


  //Code Here
  
  var outerFn = function() {
  return function(){
    return "Josh";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  
  var x = outerFn();
  console.log(x);
//Now invoke innerFn.

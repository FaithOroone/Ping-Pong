//frontend logic
$(document).ready(function(){
  $("num-form").submit(function(event){
    var user_input = parseInt($("NumberInput").val());

    var Results = counter(user_input); //stores the input and creates a function
    $("#numResult").empty(); //picks content from ul
    Results.forEach(function(result){//adds results in a list
      $("#numResult").append("<li>"+ result + "<li>");
    });
    event.preventDefault();
  });
});

//backend logic
var counter = function(UserInput){
  var numArray = [];
  for (var number = 1; number <= UserInput;number +=1){// tests value and pushes text to index
    if(number % 15 === 0){
      numArray.push("pingPong")
    }else if (number % 5 === 0){
      numArray.push("pong")
    }else if(number % 3 === 0){
      numArray.push("ping")
    }else {
      numArray.push(number);
    }
  }return numArray;
}; //ends the function

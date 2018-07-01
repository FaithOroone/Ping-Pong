//frontend logic
&(doucment).ready(function(){
  $("form#main").submit(function(event){
    var user_input = parseInt($("input#num").val());

    var finalResult = counter(user_input); //stores the input and creates a function
    $("#result").empty(); //picks content from ul
    finalResult.forEach(function(result){//adds results in a list
      $("#result").append("<li>"+ result + "<li>");
    });
    event.preventDefault();
  });
});

//backend logic
var counter = function(newUserInput){
  var mainArray = [];
  for (var index = 1; index <= newUserInput;index +=1){// tests value and pushes text to index
    if(index % 15 === 0){
      mainArray.push("pingPong")
    }else if (index % 5 === 0){
      mainArray.push("pong")
    }else if(index % 3 === 0){
      mainArray.push("ping")
    }else {
      mainArray.push(index);
    }
  }return mainArray;
}; //ends the function

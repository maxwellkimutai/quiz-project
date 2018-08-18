// Business (or back-end) logic:
var answers = [];
var correctAnswers = ["concat", "charat", "local", "reverse", "substr"];
var result = 0;
var questions =["answer1", "answer2", "answer3", "answer4", "answer5"];
var unanswered = 0;
var complete;
var incompleteQuiz = function() {
  if(unanswered > 0) {
    alert("You have not answered all the questions!!! ");
    complete = false;

  }
  else {
    complete = true;
  }
};

var calculateScore = function() {
  answers.forEach(function(answer) {
    for(index = 0; index < correctAnswers.length; index++) {
      if (answer === correctAnswers[index]) {
        result += 10;
      }
    }
  });
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    questions.forEach(function(question) {
      if ((typeof $("input:radio[name="+ question +"]:checked").val()) !== "undefined" ) {
        answers.push($("input:radio[name="+ question +"]:checked").val());
      }
      else {
        answers = [];
        unanswered += 1;
      }
    });
    incompleteQuiz();
    unanswered = 0;
    calculateScore();

    if (complete === true) {
      $("#quiz").hide();
      $("#output").fadeIn(2000);
      $(".message").hide();
      $("#score").append(result);
      $("#try-again").fadeIn(3000);
    }

  });

  $("#try-btn").click(function(){
    $("#quiz").fadeIn(2000);
    $("#output").hide();
    $(".message").fadeIn(2000);
    $("#try-again").hide();
    $("#score").empty();
    $("input[type=radio]:checked").prop("checked",false);
    answers = [];
    result = 0;
  });

});

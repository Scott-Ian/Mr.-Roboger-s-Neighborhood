$(document).ready (function () {
  $("form#welcome").submit(function (event) {
    event.preventDefault();

    const userInput = parseInt($("input#user-input").val());
    console.log(userInput);

    $("#results").text(userInput);
  });
});
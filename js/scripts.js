// Business Logic
function robogerResponse (number) {
  let robogerResponseArray = [];
  for (let i = 0; i <= number; i++) {
    robogerResponseArray.push(i);
  }
  return robogerResponseArray;
}



// UI Logic
$(document).ready (function () {
  $("form#welcome").submit(function (event) {
    event.preventDefault();

    const userInput = parseInt($("input#user-input").val());

    const result = robogerResponse(userInput);

    $("#results").text(result);
  });
});
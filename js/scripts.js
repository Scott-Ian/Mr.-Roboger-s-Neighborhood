// Business Logic

// Populates an array with the numbers of 0 - input, as a string
function populateResponseArray (number) {
  let arrayToBePopulated = [];
  for (let i = 0; i <= number; i++) {
    arrayToBePopulated.push(i.toString());
  }
  return arrayToBePopulated
}

function replaceElements (element) {
  if (element.includes(3)) {
    return "Won't you be my neighbor?";

  } else if (element.includes(2)) {
    return "Boop!";

  } else if (element.includes(1)) {
    return "Beep!";

  } else {
    return element;
  }
}

function robogerResponse (number) {
  const robogerPopulatedArray = populateResponseArray(number);

  const robogerResponseArray = robogerPopulatedArray.map (function(element) {
    return replaceElements(element);
  })
  return robogerResponseArray;
}

// UI Logic
$(document).ready (function () {
  $("form#welcome").submit(function (event) {
    event.preventDefault();

    const userInput = parseInt($("input#user-input").val());

    const result = robogerResponse(userInput).join(", ");

    $("#results").text(result);
  });
});
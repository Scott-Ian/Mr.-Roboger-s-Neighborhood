// Business Logic

const robogerPopulatedArray = [];

// Populates an array with the numbers of 0 - input, as a string
function populateResponseArray (number) {
  let arrayToBePopulated = [];
  for (let i = 0; i <= number; i++) {
    arrayToBePopulated.push(i.toString());
  }
  return arrayToBePopulated;
}

// A Recursive solution for populateResponseArray
function recursivePopulateResponseArray (number, array) {
  if (array.length-1 === number) {
    return array;
  } else {
    array.push(array.length.toString());
    recursivePopulateResponseArray(number, array);
  }
}

// Replaces elements in an array if they contain 3, 2, or 1
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
  
  const robogerPopulatedArray = [];
  // const robogerPopulatedArray = populateResponseArray(number);
  recursivePopulateResponseArray(number, robogerPopulatedArray);
  

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
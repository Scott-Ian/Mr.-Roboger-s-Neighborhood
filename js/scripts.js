// Business Logic

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
  if (array.length-1 != number) {
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
  // const robogerPopulatedArray = populateResponseArray(number); Enable this line to use for loop array filling
  const robogerPopulatedArray = []; // Disable this line and line below to not recursively fill the array
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
    const reverse = $("input[name='reverse']:checked").val();

    let result;
    if (reverse) {
      result = robogerResponse(userInput).reverse().join(", ");
    } else {
      result = robogerResponse(userInput).join(", ");
    }

    $("#results").text(result);
  });
});
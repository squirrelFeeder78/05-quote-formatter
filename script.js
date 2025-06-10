// Get references to the form and result elements. We use 'const' because these variables do not change.
const form = document.getElementById('form'); // form element
const result = document.getElementById('result'); // result display

// Add an event listener to the form for the 'submit' event
form.addEventListener('submit', function(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the values from the input fields
  // We use 'const' because these values are only set once per submit
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adjective = document.getElementById('adjective').value;

  // Create the sentence using template literals for easier string formatting
  // The verb is changed to its "verbing" form by adding "ing"
  var sentence = `${verb}ing ${adjective} ${noun} is the real test of character. #LifeRules`;

  // Capitalize the first letter of the sentence
  // We take the first character, make it uppercase, and add the rest of the sentence
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

  // Display the sentence in the result element
  result.textContent = sentence;

  // Clear the input fields after submitting
  document.getElementById('noun').value = "";
  document.getElementById('verb').value = "";
  document.getElementById('adjective').value = "";
});

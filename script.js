//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Get the code container
    var codeContainer = document.getElementById('codeContainer');

    // Create six input fields dynamically
    for (var i = 0; i < 6; i++) {
      var input = document.createElement('input');
      input.type = 'text';
      input.maxLength = 1;
      input.classList.add('code');
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeyDown);

      // Append the input field to the code container
      codeContainer.appendChild(input);
    }

    // Function to handle input events
    function handleInput(event) {
      var input = event.target;

      // Move to the next input field on input
      if (input.value.length === 1) {
        var nextInput = input.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }

    // Function to handle backspace key press
    function handleKeyDown(event) {
      var input = event.target;
      var prevInput = input.previousElementSibling;

      // Move to the previous input field on backspace press
      if (event.key === 'Backspace' && input.value.length === 0 && prevInput) {
        prevInput.focus();
      }
    }
  });
/*
 *
 */
 
const form = document.getElementById('clues');
const searchInput = document.getElementById('search');
const displayMessage = document.getElementById('displayMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  displayMessage.textContent = searchInput.value;
});

/* Plan
 * 1. Clean the submitted text and lower case it
 * 2. Check to see if submission exists as div
 * 3. If not, set submission to default div name
 * 4. Hide the previous output div (saved as var)
 * 5. Show the new output div (and update the saved var) 
 */ 
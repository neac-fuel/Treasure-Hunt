/*
 *
 */
 
const searchform = document.getElementById('search-form');
const searchInput = document.getElementById('search-bar');
const noResult = document.getElementById('no-result');
var prevSpan = document.getElementById("help");

const searchTerm = document.getElementById('search-term');

searchform.addEventListener('submit', function(event) {
	event.preventDefault(); 
	var newInput = searchInput.value.trim().replace(/[\s:]+/g, '-').toLowerCase();
	var newSpan = document.getElementById(newInput);
	if (!newSpan) {
		searchTerm.textContent = searchInput.value;
		newSpan = noResult;
	}

	prevSpan.style.display = "none";
	newSpan.style.display = "block";
	prevSpan = newSpan;
});

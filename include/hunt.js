var params = new URLSearchParams(document.location.search);
var query = params.get("search");

if (query) {
	let sanitizedQuery = query.trim().replace(/[\s:]+/g, '-').toLowerCase();
	var showClue = document.getElementById(sanitizedQuery);
	if (!showClue) {
		document.getElementById('search-term').textContent = query;
		showClue = document.getElementById('no-result');
	}
	showClue.style.display = "block";
}

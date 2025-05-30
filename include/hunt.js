var params = new URLSearchParams(document.location.search);
var query = params.get("search");

if (query) {
	var sanitizedQuery = query.trim().replace(/[\s:]+/g, '-').toLowerCase();
	
	if ( sanitizedQuery.startsWith("333") ) {
		var gift = sanitizedQuery.substring(4);
		switch (gift) {
			case "wisdom":
			case "miracles":
			case "discernment":
			case "encouragement": 
			case "mercy": 
			case "pastoring": 
			case "shepherding": 
				sanitizedQuery = "gifts-numclue";
				break;
			case "knowledge": 
			case "prophecy": 
			case "tongues": 
			case "interpretation": 
			case "interpretation-of-tongues": 
			case "giving": 
			case "apostleship": 
				sanitizedQuery = "gifts-cluetext-a";
				break;
			case "faith":
			case "healing": 
			case "serving": 
			case "teaching": 
			case "leadership": 
			case "evangelism": 
				sanitizedQuery = "gifts-cluetext-part2";
				break;
		}
	}
	
	var showClue = document.getElementById(sanitizedQuery);
	if (!showClue) {
		document.getElementById('search-term').textContent = query;
		showClue = document.getElementById('no-result');
	}
	showClue.style.display = "block";
}

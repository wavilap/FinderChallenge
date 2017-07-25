/* Function search main */
function searchForm() {
	searchInput.onkeyup = function (e) {
		
		if (searchInput.value.length > 2) {
			searchBtn.disabled = false;
			searchBtn.addEventListener('click', getResults);
			enterPress(e);
		} else {
			searchBtn.disabled = true;
		}
	}
}


/* Search for enter */
function enterPress(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if(code == 13) {
		getResults();
	}
}

function emptyResult() {
	var div = document.createElement('div');
	div.setAttribute('class', 'search-empty pure-u-1');

	books.innerHTML = '';
	div.innerHTML = 'No se encontraron resultados';
	books.appendChild(div) 
}


/* Get search results */
function getResults() {
	loadJSON(JSON_FILE, function (response) {
		var search = searchInput.value;
		var regex = new RegExp(search, 'i');
		var cont = 0;

		books.innerHTML = '';

		response.data.map(function (item) {
			if (regex.test(item.title)) {
				generateTemplate(item.title, item.teaser, item.image);
				cont++;
			}
		});

		if (cont == 0) {
			emptyResult();
		}
	});
}



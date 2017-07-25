/* Listed first items */
function initData() {
	loadJSON(JSON_FILE, function (response) {
		var data = response.data;

		books.innerHTML = '';

		for (var i = 0; i < 9; i++) {
			generateTemplate(data[i].title, data[i].teaser, data[i].image);
		}
	});
}
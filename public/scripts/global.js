/*
  constants and global functions
*/

var JSON_FILE = '/books-schema.json';
var searchInput = document.getElementById('searchInput');
var searchBtn = document.getElementById('searchBtn');
var books = document.getElementById('books');


/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(this, content);
        }
    };
    xobj.send(null);
};


/**
 * [Initial listing of books]
 * @method fillDataInput
 */
function fillDataInput () {
    loadJSON(JSON_FILE, function (response) {
        var list = response.data.map(function (i) {
            return i.title;
        });

        new Awesomplete(searchInput, {
            list: list,
            minChars: 3,
            maxItems: 7
        });
    });
}


/**
 * [Generate the template of each book]
 * @method generateTemplate
 */
function generateTemplate(t, d, i) {
    var tpl =   '<div class="book-image pur-u-2-3"><img src="'+ i +'" alt="'+ t +'"></div>'
            +   '<div class="book-footer">'
            +       '<h1 class="book-title">'+ t +'</h1>'
            +       '<p>'+ d +'</p>'
            +    '</div>'
            ;

    var item = document.createElement('article');
    item.setAttribute('class', 'book pure-u-1-3');
    item.innerHTML = tpl;
    books.appendChild(item);
}


window.onload = function() {

  var requestURL = 'https://ahen4life.github.io/list/liste.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();

  request.onload = function() {
    var listText = request.response
    var list = JSON.parse(listText);
    displayData(list);
  }

  function displayData(e) {

    for (var i = 0; i < e.items.length; i++) {
      document.getElementById('my-list').insertAdjacentHTML('beforeend', '<li>' + e.items[i].name + '</li>')
    }

  }

}

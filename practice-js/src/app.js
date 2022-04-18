var itemList = document.querySelectorAll('.itemList');

itemList.forEach(function(input) {
	itemList.addEventListener('click', function(event) {
		alert('clicked');
	});
});
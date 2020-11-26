$("document").ready(function() {
	function show_search() {
		$(".nav").append('<div><input width="200" height="30" type="search" class="search_input"></div>');
		$(nav_search).remove();
	}

	let nav_search = document.getElementById("search");
	nav_search.addEventListener("click", show_search);
});
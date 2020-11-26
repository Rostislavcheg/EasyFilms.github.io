$("document").ready(function() {
	$(".info_page").css({ "display":"none" }); // Hide info page

	function info_page_f() {
		$(".info_page").css({ "display":"block" });
		$(".row").css({ "display":"none" });
	}

	function close_info_page_f() {
		$(".row").css({ "display":"block" });
		$(".info_page").css({ "display":"none" });
	}

	// Add event to link for close info
	let close_info_page = document.getElementById("close-info-pg");
	close_info_page.addEventListener('click', close_info_page_f);

	// Add event to link for open info
	let info_page = document.getElementById("info-btn");
	info_page.addEventListener('click', info_page_f);
});
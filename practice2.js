function handleClicks() {
	let count = 0;

	// $(".js-counter").text(count);

	$(".js-clicker").click(function(event) {
		count += 1;
    	$('.js-counter').text(count);
	});

}

$(handleClicks);


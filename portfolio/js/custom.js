$(document).ready(function(){
	
	$('.slowmoving').click(function(){
		    $('html, body').animate({
		        scrollTop: $( $(this).attr('href') ).offset().top
		    }, 1000); // можно менять время
		    return false;
	});

})
	
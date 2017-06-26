$(document).ready(function(){
	// $('.onec').mouseeneter();
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})
})
$('li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000); // можно менять время
    return false;
});
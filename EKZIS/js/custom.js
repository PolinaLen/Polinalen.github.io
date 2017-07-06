$(document).ready(function(){
	// $('.onec').mouseeneter();
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});

	$('li a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 1000); // можно менять время
	    return false;
	});

	$('#p1c').click(function(){
		$('#1c').modal();
	});
	$('#pwebs').click(function(){
		$('#webs').modal();
	});
	$('#pprog').click(function(){
		$('#prog').modal();
	});
	$('#psoftware').click(function(){
		$('#software').modal();
	});
	$('#psu').click(function(){
		$('#su').modal();
	});
	$('#ppoly').click(function(){
		$('#poly$').modal();
	});
	$('#phelp').click(function(){
		$('#help').modal();
	});
	$('#psupport').click(function(){
		$('#support').modal();
	});
})

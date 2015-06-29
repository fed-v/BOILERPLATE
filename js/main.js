jQuery( document ).ready(function( $ ) {
	
	
	//CREATE INSTANCE OF THE DATE OBJECT	
	var date = new Date();	
								
	//EXTRACT FOUR DIGIT YEAR AND ADD TO SPAN
	document.getElementById('year').innerHTML = date.getFullYear();
	
	
	$("#myForm").submit(function() {
		$.post('includes/sendMail.php', {name: $('#name').val(), email: $('#email').val(), message: $('#message').val(), myFormSubmitted: 'yes'}, function(data) {
			$("#formResponse").html(data).fadeIn('100');
			$('#name, #email, #message').val(''); /* Clear the inputs */
		}, 'text');
		return false;
	});

	
});
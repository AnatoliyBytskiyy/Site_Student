$(document).ready(function(){
	$("#phone").mask("+38 (999) 99-99-999");
	$("#phone2").mask("+38 (999) 99-99-999");
	$("#recipient-telephone").mask("+38 (999) 99-99-999");

	$.datepicker.setDefaults( $.datepicker.regional[ "" ] );

	$( "#recipient-term-work" ).datepicker();
});
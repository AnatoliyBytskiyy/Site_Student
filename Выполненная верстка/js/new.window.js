$(document).ready(function(){
	// var params = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=300px,height=300px"


	// function newWindow(id, pageurl, params){
	// 	id.onclick = function() {
	// 		window.open(pageurl, order, params);
	// 	}
	// };

	// newWindow(order_work, order.html, params);
	// newWindow(for_autors, order.html, params);  


	$('#price_work').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.modal-title').text(recipient)
		// modal.find('.modal-body input').val(recipient)
	})

	// $('#work').on('show.bs.modal', function (event) {
	// 	var button = $(event.relatedTarget) 
	// 	var recipient = button.data('whatever') 
	// 	var modal = $(this)
	// 	modal.find('.modal-title').text(recipient)
	// })
});
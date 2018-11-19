var menuLeft = document.getElementById( 'pushMenu' ),
hideLeftPush = document.getElementById( 'hideLeftPush' ),
showLeftPush = document.getElementById( 'showLeftPush' ),
body = document.body;

showLeftPush.onclick = function() {
	classie.add( this, 'active' );
	classie.add( body, 'cbp-spmenu-push-toright' );
	// $('.cbp-spmenu-push-toright').css("overflow-y","hidden");
	classie.add( menuLeft, 'cbp-spmenu-open' );

	// disableOther( 'showLeftPush' );
};

hideLeftPush.onclick = function() {
	classie.remove( this, 'active' );
	classie.remove( body, 'cbp-spmenu-push-toright' );
	classie.remove( menuLeft, 'cbp-spmenu-open' );

	// disableOther( 'showLeftPush' );
};

// function disableOther( button ) {
// 	if( button !== 'showLeftPush' )
// 		classie.toggle( showLeftPush, 'disabled' );
// }
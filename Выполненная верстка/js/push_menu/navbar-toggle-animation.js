(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "mouseover", function(e) {
      e.preventDefault();
      this.classList.add("is-active");
    });
    toggle.addEventListener( "mouseout", function(e) {
      e.preventDefault();
      this.classList.remove("is-active");
    });
  }
 
})();
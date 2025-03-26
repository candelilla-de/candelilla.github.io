$(document).ready(function() {

  function Starter() {
      $('.starter').css( "display", "none" );
  }

  function Delay() {
    if (window.localStorage.item === undefined) {
      $('.starter').css( "display", "block" );
      setTimeout(Starter, 4000);;
      window.localStorage.setItem("item", 1);
    } else {
      $('.starter').css( "display", "none" );
    }
  }
  setTimeout(Delay, 2000);;

});

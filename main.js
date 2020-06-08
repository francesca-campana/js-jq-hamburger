
// $ ('.header-right > a').click(
//   function() {
//      $ ('div.hamburger-menu').show();
//   }
// );
//
//
//  $ ('.close').click(
//    function() {
//      $ ('div.hamburger-menu').hide()
//    }
//  );
$ ('.header-right > a').click(
function (){
  $('.hamburger-menu').addClass('active')

  }
);
 $ ('.close').click(
   function() {
     $ ('div.hamburger-menu').removeClass('active')
   }
 );

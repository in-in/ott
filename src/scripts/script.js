$( document ).ready(function() {
    //menu
    var $menuToggle = $('.menu__toggle');
    var $menuList = $('.menu__list');
    
    $menuToggle.click(function(e) {
      e.preventDefault();
      $menuList.slideToggle(200, function() {
        if($(this).css('display') === 'none') {
          $(this).removeAttr('style');
        }
      });
    });
});

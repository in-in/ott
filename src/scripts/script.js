$( document ).ready(function() {
    //menu
    var $menuToggle = $('.menu__toggle');
    var $menuList = $('.menu__list');
    
    $menuToggle.click(function(e) {
      e.preventDefault();
      $(this).toggleClass('menu__toggle--open');
      $menuList.slideToggle(200, function() {
        if($(this).css('display') === 'none') {
          $(this).removeAttr('style');
        }
      });
    });
    //submenu
    var $menuLinkMore = $('.menu__link-more');
    var $menuSubmenu = $('.menu__submenu');
    
    $menuLinkMore.click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $menuSubmenu.toggleClass('menu__submenu--open');
      $(window).on('click keydown', function(e) {
        if (e.type === 'click' || e.keyCode === 27 && $menuSubmenu.hasClass('menu__submenu--open')) {
          $menuSubmenu.removeClass('menu__submenu--open');
        }
      });
    });
});

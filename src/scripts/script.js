$(document).ready(function() {
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
    // tabs
    var $buttonTab = $('.button--tab');
    var inApp = {
      aero: '4%',
      train: '5%',
      hotel: '8%'
    };
    var inSite = {
      aero: '5%',
      train: '7%',
      hotel: '9%'
    };
    
    function changePrice(id) {
      var priceType = ['aero', 'train', 'hotel'];
      for(var i = 0; i < priceType.length; i++) {
        if(id === 'inSite')
          $('[data-type='+ priceType[i] +']').text(inSite[priceType[i]]);
        else if (id === 'inApp')
          $('[data-type='+ priceType[i] +']').text(inApp[priceType[i]]);
      }
    }
    
    $buttonTab.click(function(e) {
      e.preventDefault();
      $this = $(this);

      changePrice($this.attr('id'));
      
      $this.addClass('button--tab-active').siblings().removeClass('button--tab-active');
    });
});

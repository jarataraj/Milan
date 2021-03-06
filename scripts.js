$(document).ready(function(){
   
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > .2*$("#home").outerHeight()) {
            $('nav').css("background-color", "#222");
        }
        else {
            $('nav').css("background-color", "#333");
        }
    });
    
    $(window).on('scroll', function() {
         var navHeight = $( window ).height() - 44;
         if ($(window).scrollTop() > navHeight) {
             $('nav').addClass('fixed');
         }
         else {
             $('nav').removeClass('fixed');
         } 
    });

    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - nav_height - 20,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('li').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"] li').addClass('active');
        }
      });
    });

    nav.find('a').on('click', function () {
      var $el = $(this)
        , id = $el.attr('href');

      $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height + 1
      }, 500);

      return false;
    });
    
    function watchForHover() {
        var hasHoverClass = false;
        var container = document.body;
        var lastTouchTime = 0;

        function enableHover() {
            // filter emulated events coming from touch events
            if (new Date() - lastTouchTime < 500) return;
            if (hasHoverClass) return;

            container.className += ' hasHover';
            hasHoverClass = true;
        }

        function disableHover() {
            if (!hasHoverClass) return;

            container.className = container.className.replace(' hasHover', '');
            hasHoverClass = false;
        }

        function updateLastTouchTime() {
            lastTouchTime = new Date();
        }

        document.addEventListener('touchstart', updateLastTouchTime, true);
        document.addEventListener('touchstart', disableHover, true);
        document.addEventListener('mousemove', enableHover, true);

        enableHover();
    }

    watchForHover();
    
});


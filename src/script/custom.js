function slideSwitch() {
    var $active = $('#slideshow li.active');
    var $activeDot = $('.slider-control li.active');

    if ( $active.length == 0 ) {
		$active = $('#slideshow li:last');
    }

    if ( $activeDot.length == 0 ) {
		$activeDot = $('.slider-control li:last');
    }

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next(): $('#slideshow li:first');
    var $nextDot =  $activeDot.next().length ? $activeDot.next(): $('.slider-control li:first');

    $active.addClass('last-active');
    $activeDot.addClass('last-active');

    $next.css({opacity: 0.0})
    .addClass('active')
    .animate({opacity: 1.0}, 1000, function() {
        $active.removeClass('active last-active');
    });

    $nextDot.addClass('active')
    .animate({opacity: 1.0}, 0, function() {
        $activeDot.removeClass('active last-active');
    });
}

slideSwitch();

$(function() {
    setInterval( "slideSwitch()", 5000 );
});

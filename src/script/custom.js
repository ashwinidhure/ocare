$(document).ready(function() {
    var count= 1,
    arr_class=['one', 'two', 'three', 'four', 'five'];

    var myVar = setInterval(function() {
        setClass(arr_class[count]);
        count ++;
        if(count == 4) {
			count = 0;
        //clearInterval(myVar);
        }
    }, 4000);

    function setClass(name) {
        $('#slider-content').removeClass();
        $('#slider-control li').removeClass();
		$('#slider-content').addClass(name);
		$('#slider-control li').eq(count).addClass('active');
    }

	$('#slider-control li').click(function(){
		var index = parseInt($(this).attr('data-index'));
		count = index == 3 ? 0 : index + 1;
		setClass(arr_class[index]);
	});

    $('#navbarSideButton').on('click', function() {
        $('#navbarSide').addClass('open');
        $('.overlay').show();
    });
    
      // Close navbarSide when the outside of menu is clicked
    $('.overlay').on('click', function(){
        $('#navbarSide').removeClass('open');
        $('.overlay').hide();
    });
})

$('body').on('click', '.div-link a', function() {
    $('.single').hide();
    $('.div-link li').removeClass('active');
    var openId = $(this).attr('href');
    $(openId).show();
    $(this).parent().addClass('active');

    if ($('#a').is(':hidden')) {
        $('.back').show();
    } else {
        $('.back').hide();
    };

    if ($('#c').is(':hidden')) {
        $('.next').show();
    } else {
        $('.next').hide();
    };
});

$('.back').click(function(){
    $('.div-link .active').prev().children('a').click();
});

$('.next').click(function(){
    $('.div-link .active').next().children('a').click();
});
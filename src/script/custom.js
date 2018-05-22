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
})
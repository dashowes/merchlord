$(function() {
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	$('.about, .categories-big, .browsebuttons-big').hide();
	
	$('#mainlogo').click(function() {
	    $('.about').slideToggle('slow');
	});
	
	$('#browsebutton').click(function() {
	    $('.browsebuttons-big').slideToggle('slow');
	});
});
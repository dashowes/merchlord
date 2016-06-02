var ready = function() {
	$('.about, .categories-big, .browsebuttons-big').hide();
	
	$('#mainlogo').click(function() {
	    $('.about').slideToggle('slow');
	});
	
	$('#browsebutton').click(function() {
	    $('.browsebuttons-big').slideToggle('slow');
	});
	
	$('#categoriesbutton').click(function() {
	    $('.categories-big').slideToggle('slow');
	});
};

$(document).ready(ready);
$(document).on('page:load', ready);
/* VARIABLES */
var $contents = $('.main-content');

/* NAV BAR */
var $contactNav = $('#contact-href');
var $volunteerNav = $('#volunteer-href');
var $personalNav = $('#personal-href');
var $workNav = $('#work-href');


$(document).ready(function() {

	/* CLICKS */
    $("a[href^='#']").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		} /* speed */ );
	});
	/* SCROLL */
	$(window).scroll(check_if_in_view);

	/* AUXILIAR FUNCTIONS */ 
	function check_if_in_view() {
		var window_height = $(window).height();
		var window_top_position = $(window).scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($contents, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		    //check to see if this current container is within viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {
		    	trigger_navbar($element.attr('id'),true);
		    } else {
		      trigger_navbar($element.attr('id'),false);
		    }
	  	});
	}

	function trigger_navbar(element,status){
		switch(element){
			case 'home-info': manageTrigger($contactNav,status); break;
			case 'personal-info': manageTrigger($personalNav,status); break;
			case 'education-info': manageTrigger($workNav,status); break;
		}
	}

	function manageTrigger(element,status){
		if(status){
			element.addClass('active');
			element.removeClass('disabled');
		} else {
			element.addClass('disabled');
			element.removeClass('active');
		}
	}
});

/* TypeIt */

new TypeIt('#typeit-p', {
    strings: ["<h1>Hello !!</h1>","I'm <strong>Paulo</strong>","Software developer","Volunteer","And I inspire youth to be better","Wanna work together?"],
    autoStart: false,
    repeat: true
});

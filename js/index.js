$(document).ready( function() {
	// Logo
	var $logo 	= $('#logo');
	if (location.href.indexOf("#") != -1) {
		if(location.href.substr(location.href.indexOf("#"))!='#home'){ $logo.show(); }
	}

	// Show logo 
	$('#tab-container .tab a').click(function()		{ $logo.slideDown('slow'); });
	$('#home-links .slide-down a').click(function()	{ $logo.slideDown('slow'); });
	// Hide logo
	$('#tab-home').click(function() { $logo.slideUp('slow'); });	

	$('#tab-container').easytabs({
	animate			: true,
	updateHash		: true,
	transitionIn	: 'slideDown',
	transitionOut	: 'slideUp',
	animationSpeed	: 600,
	tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
	});
});

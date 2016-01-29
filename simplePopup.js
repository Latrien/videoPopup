$(document).ready(function(){
	var popUpStyle = document.createElement('style');
	popUpStyle.type = 'text/css';
	popUpStyle.innerHTML = '\
	#simplePopUpScreen {\
		position: fixed;\
		z-index: 9999;\
		width: 100%;\
		height: 100%;\
		top: 0;\
		left: 0;\
		display: none\
	}\
	#simplePopUpOverlay {\
		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";\
		-moz-opacity: 0.75;\
		-khtml-opacity: 0.75;\
		filter: alpha(opacity=75);\
		opacity: 0.75;\
		z-index: 0;\
		background: #000;\
		width: 100%;\
		height: 100%;\
		position: fixed\
	}\
	#simplePopUpContainer {\
		min-width:240px;\
		max-height:600px;\
		position: relative;\
		z-index: 999999;\
		margin: 0 auto;\
		top: 20%;\
	}\
	#simplePopUpWindow {\
		background: white;\
		z-index: 999999;\
		width: 100%;\
		height:100%;\
		max-height: 600px;\
		box-shadow: 1px 1px 10px #000;\
		border-radius: 2px;\
	}\
	#simplePopUpWindow img{\
		height:100%;\
		max-height:768px;\
	}\
	#simplePopUpWindow iframe{\
		width:100%;\
		max-height:768px;\
	}\
	#simplePopUpCloser {\
		width: 30px;\
		height: 30px;\
		position: absolute;\
		z-index: 999999;\
		top: 0px;\
		right: -45px;\
		cursor: pointer;\
		font-weight: bold;\
		color: #fff;\
		box-shadow: 1px 1px 10px #000;\
		line-height: 30px;\
		font-size: 17px;\
		text-align: center;\
		background-color: #000;\
		border-radius: 2px;\
	}\
	div[simplePopup]{\
		cursor: pointer;\
	}\
	@media screen and (max-width: 768px) {\
		#simplePopUpContainer{\
			width:80% !important;\
			height:360px !important;\
			top:10%;\
		}\
	}\
	@media screen and (max-width: 530px) {\
		#simplePopUpContainer{\
			width:60% !important;\
			height:240px !important;\
		}\
	}\
	@media screen and (max-width: 480px) {\
		#simplePopUpWindow h2{\
			font-size:21px;\
			line-height:24px;\
		}\
	}\
	';		

	document.head.appendChild(popUpStyle);

	var popUpDivs;
	popUpDivs = '\
	<div id="simplePopUpScreen">\
	   	<div id="simplePopUpOverlay"></div>\
	   	<div id="simplePopUpContainer">\
	     	<div id="simplePopUpCloser">X</div>\
	     	<div id="simplePopUpWindow"></div>\
	    </div>\
	</div>\
	'

	$("body").append(popUpDivs);		

	$('body').on('click','div[simplePopup=true]',function(){
	    $('#simplePopUpScreen').css('display','block');
	    $('#simplePopUpContainer').css('width',$(window).width()/2);
	    $('#simplePopUpContainer').css('height',$(window).width()/4);

	    if($(this).attr('popUpType')=='youtube_video'){
		    $('#simplePopUpWindow').append('<iframe title="' + $(this).attr('videoID') + '" width="' + $('#simplePopUpWindow').width() + '" height="' + $('#simplePopUpWindow').height() + '" src="https://www.youtube.com/embed/' + $(this).attr('videoID') + '?enablejsapi=1" frameborder="0" allowfullscreen></iframe>');
		}

		if($(this).attr('popUpType')=='tc'){
			$('#simplePopUpContainer').css('height','auto');
		    $('#simplePopUpWindow').append($('#tcContent').html());
		}
	});

  	$("#simplePopUpCloser , #simplePopUpOverlay").click(function(){
    	$("#simplePopUpScreen").fadeOut('slow',function(){
    		$('#simplePopUpWindow').empty();
    	}); 
  	});   	
});
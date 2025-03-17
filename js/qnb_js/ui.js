/**�˻� ����[S]**/
var s = $('input'),
    f  = $('form'),
    a = $('.after'),
		m = $('h4');

s.focus(function(){
  if( f.hasClass('open') ) return;
  f.addClass('in');
  setTimeout(function(){
    f.addClass('open');
    f.removeClass('in');
  }, 100);
});

a.on('click', function(e){
  e.preventDefault();
  if( !f.hasClass('open') ) return;
   s.val('');
  f.addClass('close');
  f.removeClass('open');
  setTimeout(function(){
    f.removeClass('close');
  }, 100);
})
/**�˻� ����[E]**/
$('.accordion > li').click(function(){
	$(".accordion > li").removeClass();
	$(this).addClass("active");
	$(".accordion > li").children('ul').hide();
	$(this).children('ul').show();
});

$('.accordion > li > ul > li').click(function(){
	$('.accordion > li > ul > li').removeClass("active");
	$(this).addClass("active");
	$('.accordion > li > ul > li').children('ul').hide();
	$(this).children('ul').show();
});

$(".moreBtn").click(function(){
	if ($(this).hasClass("morebtnClose")){
		$(this).removeClass("morebtnClose");
		$(".btnCounsel").animate({bottom: "-152px"},100, 'linear');
		$(".btnChat").animate({bottom: "-76px"},100, 'linear');
		$(this).css("transform", "rotate(0deg)");
	}else{
		$(this).addClass("morebtnClose");
		$(".btnCounsel, .btnChat").animate({bottom: "0px"},100, 'linear');
		$(this).css("transform", "rotate(135deg)");
	}
	/*$(".btnCounsel, .btnChat").animate({bottom: "0px"},100, 'linear');
	$(this).toggleClass("morebtnClose");
	$(this).css("transform", "rotate(45deg)");*/
});

// $("nav ul li").mouseover(function(){
// 	$(this).children('span').css("width", "100%");
// 	$(this).children('ul').show();
// 	$('#gnb').show();
// });
// $("nav ul li").mouseleave(function(){
// 	$(this).children('span').css("width", "0");
// 	$("nav > ul > li > ul").hide();

// });
/*$("nav li a").hover(function(){
	
});*/

// $("#gnb").mouseleave(function(){
// 	$('#gnb').hide();
// 	$("nav > ul > li > ul").hide();
// 	$("nav ul li span").css("width", "0");
// });

$(".morebtnClose").click(function(){
	alert('xx');
});
$( '.topBtn' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
});

$( '.topBtn' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
});

$('.closeBtn').click(function(){
	$('.layerPopUp').hide();
});

$(".accordion > li > ul > li > ul > li").each(function(){
	if ($(this).hasClass("active")) {
		$(this).parent().parent().parent().parent().addClass("active");	
		$(this).parent().parent().addClass("active");	
		$(this).parent().show();
		$(this).parent().parent().parent().show();
	} else {
		//alert(false);
	}
});
$(".accordion > li > ul > li").each(function(){
	if ($(this).hasClass("active")) {
		$(this).parent().parent().addClass("active");	
		$(this).parent().show();
		//$(this).parent().parent().parent().show();
	} else {
		//alert(false);
	}
});

$(".btnCounsel, .btnChat").hover(function(){
	$(this).children().css("width", "217px");
	$(this).children().css("font-size", "15px");
},function(){
	$(this).children().css("font-size", "0px");
	$(this).children().css("width", "0px");
	
});

function tabSetting() {
	$('.tabPage').hide();
	$($('.current').find('a').attr('href')).show();

	$('.tabMenu li').click(function (event) {
		var tagName = event.target.tagName;
		var selectedLiTag = (tagName.toString() == 'A') ? $(event.target).parent('li') : $(event.target);
		var currentLiTag = $('li[class~=current]');
		var isCurrent = false;  
		
		isCurrent = $(selectedLiTag).hasClass('current');
		 
		if (!isCurrent) {
			$($(currentLiTag).find('a').attr('href')).hide();
			$(currentLiTag).removeClass('current');

			$(selectedLiTag).addClass('current');
			$($(selectedLiTag).find('a').attr('href')).show();
		}
		return false;
	});
}

/*if ($(this).hasClass("morebtnClose")){
		//$(this).removeClass("morebtnClose");
		//$(".btnCounsel").animate({bottom: "-152px"},100, 'linear');
		//$(".btnChat").animate({bottom: "-76px"},100, 'linear');
		//$(this).css("transform", "rotate(0deg)");
	}else{
		//$(this).addClass("morebtnClose");
		//$(".btnCounsel, .btnChat").animate({bottom: "0px"},100, 'linear');
		//$(this).css("transform", "rotate(135deg)");
	}*/

	$(function () {
		// �� �ʱ�ȭ �� ����
		tabSetting();
	});
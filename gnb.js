$(function(){
  var depth1 = $('#main-header nav');
  var header = $('#main-header');

  //depth1에 마우스가 올라가면 header의 길이를 300px로 하여라
  depth1.mouseenter(function(){
    header.stop().animate({height:"350px"});
  }).mouseleave(function(){
    header.stop().animate({height:"110px"},100);
  })
 //depth1에 마우스가 떠나면 header의 길이를 110px로 하여라


});


$(function(){
  var nav = $('#sub-header nav');
  var subheader = $('#sub-header');


  //depth1에 마우스가 올라가면 header의 길이를 300px로 하여라
  nav.mouseenter(function(){
    subheader.stop().animate({height:"350px"});
  }).mouseleave(function(){
    subheader.stop().animate({height:"110px"},100);
  })
 //depth1에 마우스가 떠나면 header의 길이를 110px로 하여라

});



// c01 스크립트 소스

$(function(){
  var figure2=$('#c01 .swiper-slide:nth-child(1) .box');
  var hoverbox2=$('#c01 div.inner .swiper-container2 .swiper-wrapper .swiper-slide:nth-child(1) div.box .hover');

  figure2.mouseenter(function(){
      hoverbox2.stop().animate({opacity: "1"});
  }).mouseleave(function(){
    hoverbox2.stop().animate({opacity:"0"})
  })
});



$(function(){
  var figure2=$('#c01 .swiper-slide:nth-child(2) .box');
  var hoverbox2=$('#c01 .swiper-slide:nth-child(2) .box .hover');

  figure2.mouseenter(function(){
      hoverbox2.stop().animate({opacity: "1"});
  }).mouseleave(function(){
    hoverbox2.stop().animate({opacity:"0"})
  })
});



$(function(){
  var figure2=$('#c01 .swiper-slide:nth-child(3) .box');
  var hoverbox2=$('#c01 .swiper-slide:nth-child(3) .box .hover');

  figure2.mouseenter(function(){
      hoverbox2.stop().animate({opacity: "1"});
  }).mouseleave(function(){
    hoverbox2.stop().animate({opacity:"0"})
  })
});







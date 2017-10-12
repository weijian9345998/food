$(function(){
    $(".food").animate({
			opacity:1,
		},2000,'linear');
    $(".slide_left").animate({
            top:'100px',
		},1000,'linear');
    $(".slide_right").animate({
            top:'100px',
		},1000,'linear');
})

$(function(){
  $(".nav ul li:eq(1)").mouseover(function(){
    $(".navdown li:eq(0)").css("opacity","1")
  });
  $(".navdown li:eq(0)").mouseleave(function(){
    $(this).css("opacity","0")
  });
  $(".nav ul li:eq(2)").mouseover(function(){
    $(".navdown li:eq(1)").css("opacity","1")
  });
  $(".navdown li:eq(1)").mouseleave(function(){
    $(this).css("opacity","0")
  });
  $(".nav ul li:eq(3)").mouseover(function(){
    $(".navdown li:eq(2)").css("opacity","1")
  });
  $(".navdown li:eq(2)").mouseleave(function(){
    $(this).css("opacity","0")
  });
  $(".nav ul li:eq(4)").mouseover(function(){
    $(".navdown li:eq(3)").css("opacity","1")
  });
  $(".navdown li:eq(3)").mouseleave(function(){
    $(this).css("opacity","0")
  });
})
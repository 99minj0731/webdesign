$(function() {
  //탭 메뉴
  $("nav>ul>li").focusin(function(){
    $(this).find(".sub").slideDown()
    $(this).addClass("on")
  })
  $(".sub>li:last-child").focusout(function(){
    $(".sub").slideUp()
    $("nav>ul>li").removeClass("on")
  })

  //Slide

  function slide(){
    $(".slide ul").animate({top:"-300px"},2000,function(){
      $(".slide ul").append($(".slide>ul>li").first())
      $(".slide ul").css({top:0})
    })    
  }

  setInterval(slide, 2000)

  // 네브바 
  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
    $(this).addClass("on")
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
    $(this).removeClass("on")
  })
  // 팝업
  $(".pp").click(function(){
    $(".popup").show()
    return false
  })
  $("button").click(function(){
    $(".popup").hide()
  })
})
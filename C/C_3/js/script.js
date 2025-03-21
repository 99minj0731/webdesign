$(function(){
  //키보드 
  $("nav>ul>li").focusin(function(){
    $(this).find(".sub").stop().slideDown()
    $(this).addClass("on")
  })

  $(".sub>li:last-child").focusout(function(){
    $(".sub").stop().slideUp()
    $("nav>ul>li").removeClass("on")
  })
  // 팝업
  $(".pp").click(function(){
    $(".popup").show()
    return false
  })
  $("button").click(function(){
    $(".popup").hide()
    return false
  })
  //슬라이드

  function slide() {
    $(".slide ul").animate({left:"-800px"},2000,function(){
      $(".slide ul").append($(".slide>ul>li").first())
      $(".slide ul").css({left:0})
    })
  }

  setInterval(slide,3000)


  // 메뉴
  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
    $(this).addClass("on")
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
    $(this).removeClass("on")
  })
})
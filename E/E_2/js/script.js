$(function(){
  //키보드 이벤트
  $("nav>ul>li").focusin(function(){
    $(this).addClass("on")
    $(this).find(".sub").slideDown()
  })
  $(".sub>li:last-child").focusout(function(){
    $("nav ul li").removeClass("on")
    $(".sub").slideUp()
  })

  //슬라이드
  function slide() {
    $(".slide ul").animate({top: "-700px"},2000,function(){
      $(".slide ul").append($(".slide ul li").first())
      $(".slide ul").css({top:0})
    })
  }

  setInterval(slide, 3000)

  //네브바
  $("nav>ul>li").mouseenter(function(){
    $(this).addClass("on")
    $(this).find($(".sub")).stop().slideDown()
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).removeClass("on")
    $(this).find($(".sub")).stop().slideUp()
  })

  //팝업
  $(".pp").click(function(){
    $(".popup").show()
    return false
  })

  $("button").click(function(){
    $(".popup").hide()
  })
})
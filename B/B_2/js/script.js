$(function(){
  //키보드 웹접근성
  $("nav>ul>li").focusin(function(){
    $(".sub").slideDown()
    $(this).addClass("on")
  })
  $(".sub>li:last-child").focusout(function(){
    $("nav>ul>li").removeClass("on")
  })
  $("nav>ul>li:last-child li:last-child").focusout(function(){
    $(".sub").slideUp()
  })

  //슬라이드
  function slide(){
    $(".slide ul").animate({top:"-300px"},1500,function(){
      $(".slide ul").append($(".slide ul li").first())
      $(".slide ul").css({top:0})
    })
  }
  setInterval(slide,3000)

  //메뉴
  $("nav>ul>li").mouseenter(function(){
    $(".sub").stop().slideDown()
  })
  $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp()
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
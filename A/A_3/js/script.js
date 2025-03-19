$(function(){
  //탭 콘
  $(".tabmenu>li").click(function(){
    $(".tabmenu li").removeClass("on")
    $(".tabcon").hide()
    $(this).addClass("on")
    $(this).find(".tabcon").show()

  })

  // 슬라이드
  
  let i = 0

  function slide(){
    if(i<2){
      i++
    }
    else{
      i=0
    }
  
    $(".slide>ul>li").fadeOut(2000)
    $(".slide>ul>li").eq(i).fadeIn(2000)
  }

  setInterval(slide,2000)

  //네비게이션 바
  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
    $(this).addClass("on")
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
    $(this).removeClass("on")
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
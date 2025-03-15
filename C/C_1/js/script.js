$(function(){
  //키보드메뉴
  $("nav>ul>li").focusin(function(){
    $(this).find(".sub").slideDown()
    $(this).addClass("on")
  })

  $(".sub li:last-child").focusout(function(){
    $(".sub").slideUp()
    $("nav>ul>li").removeClass("on")
  })

  //탭메뉴    
  let t = 0
  $(".tabmenu>li").click(function(){
    $(".tabmenu>li").removeClass("on")
    $(this).addClass("on")
    t = $(this).index()
    $(".tabcon").hide()
    $(".tabcon").eq(t).show()
    return false
  })

  //슬라이드
  let i = 0
  function slide(){
    if(i<2){
      i++ 
    }
    else{
      i=0
    }
    $(".slide ul li").fadeOut(200)
    $(".slide ul li").eq(i).fadeIn(200)
  }

  setInterval(slide,2000)
  //메뉴
  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
  })
  $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp()
  })
  //팝업
  $(".pp").click(function(){
    $(".popup").show()
    return false
  })

  $(".button").click(function(){
    $(".popup").hide()
  })
})
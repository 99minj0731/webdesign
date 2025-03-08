$(function(){

  //슬라이드 
  let n = 0
  function slide(){
    if(n<2) {
      n++ 
    }
    else {
      n =0
    }
    $(".slide ul li").fadeOut()
    $(".slide ul li").eq(n).fadeIn()
  }
  setInterval(slide,1000)


  //tabmenu
  $(".tabmenu>li").click(function(){
    $(".tabmenu>li").removeClass("on")
    $(this).addClass("on")

    let i = $(this).index()
    console.log(i)
    $(".tabcon").hide()
    $(".tabcon").eq(i).show()
    return false
  })

  //메뉴
  $("nav>ul>li>a").focusin(function(){
    $(this).next().slideDown()
    $(this).parent().addClass("on")
  })
  $(".sub li:last-child").focusout(function(){
    $(".sub").slideUp()
    $("nav li").removeClass("on")
  })

  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
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
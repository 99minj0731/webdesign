$(function(){
  //키보드 메뉴
  $("nav>ul>li").focusin(function(){
    $(this).find(".sub").stop().slideDown()
    $(this).addClass("on")
  })
  $(".sub>li:last-child>a").focusout(function(){
    $(".sub").stop().slideUp()
    $("nav>ul>li").removeClass("on")
  })
  $("nav>ul>li").focusout(function(){
    $(this).find(".sub").slideUp()
  })
  //슬라이드 메뉴 
  let i = 0

  function slide() {
    if(i<2){
      i++
    }
    else{
      i=0
    }
    $(".slides ul li").fadeOut(200)
    $(".slides ul li").eq(i).fadeIn(200)
  }

  setInterval(slide,2000)
  console.log(i)
  //사이드바
  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
  })
  $(".sub>li").mouseenter(function(){
    $(this).closest("li").addClass("on")
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
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
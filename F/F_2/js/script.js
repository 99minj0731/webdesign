$(function(){
  //슬라이드
  
  let i = 0
  
  function slide(){
    if(i<2){
      i++
    }
    else {
      i = 0
    }
    $(".slide>ul>li").fadeOut(2000)
    $(".slide>ul>li").eq(i).fadeIn(2000)
  }

  setInterval(slide,3000)
  


  //네비게이션 바
  $("nav>ul>li").mouseenter(function(){
    $(this).children(".sub").stop().slideDown()
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
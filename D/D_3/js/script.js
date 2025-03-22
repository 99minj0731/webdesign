$(function() {
  //탭 메뉴
  $(".con li").click(function(){
    $(".con li").removeClass("on")
    $(this).addClass("on")
    $(".tabcon").hide()
    $(this).find(".tabcon").show(function(){
      $(this).css({display:"flex"})
    })
  })


  //팝업 
  $(".pp").click(function(){
    $(".popup").show()
    return false
  })
  $("button").click(function(){
    $(".popup").hide()
  })
  //슬라이드
  $(".slide ul li").hide()
  $(".slide ul li").eq(0).show()

  let i = 0
  function slide (){
    if(i<2){
      i++
    }
    else{
      i=0
    }
    $(".slide ul li").fadeOut(2000)
    $(".slide ul li").eq(i).fadeIn(2000)
  }

  setInterval(slide, 2000)


  //네브바
  $("nav>ul>li>h2").mouseenter(function(){
    $(".sub").stop().slideDown(function(){
      $(".sub").css({display:"flex"})
    })
    $(this).parent().addClass("on")
  })


  $("nav>ul>li").mouseleave(function(){
    $("nav>ul>li").removeClass("on")
    $(".sub").stop().slideUp()
  })
})
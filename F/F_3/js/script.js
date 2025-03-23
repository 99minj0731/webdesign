$(function(){
  //탭 메뉴

  let i = 0

  $(".con li").click(function(){
    $(".con li").removeClass("on")
    $(this).addClass("on")

    i = $(this).index()
    console.log(i)

    $(".tabcon").hide()
    $(".tabcon").eq(i).show(function(){
      $(".tabcon").eq(i).css({display:"flex"})
    })
  })

  // $(".noticeT").click(function(){
  //   $(".tabcon").hide()
  //   $(".notice").show()
  // })
  // $(".gallT").click(function(){
  //   $(".tabcon").hide()
  //   $(".gall").show(function(){
  //     $(".gall").css({display: "flex"})
  //   })
  // })

  //슬라이드
  let move = $(".slide").width()

  function slide (){
    $(".slide>ul").animate({left:-(move)}, 3000,function(){
      $(".slide>ul").append($(".slide>ul>li").first())
      $(".slide>ul").css({left:0})
    })
  }

  setInterval(slide,2000)

  //네브바
  $("nav>ul>li").mouseenter(function(){
    $(".sub").stop().slideDown()
    $(".submenu").stop().slideDown()
  })
  $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp()
    $(".submenu").stop().slideUp()
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
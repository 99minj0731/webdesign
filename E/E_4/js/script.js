$(function(){
  //팝업
  $(".pp").click(function(){
    $(".popup").show()  
    return false
  })
  $("button").click(function(){
    $(".popup").hide()  
  })

  //슬라이드 
  let move = $(".slides").width()

  function slide(){
    $(".slide>ul").animate({left:-(move)}, 3000, function(){
      $(".slide>ul").append($(".slide>ul>li").first())
      $(".slide>ul").css({left:0})
    })
  }

  setInterval(slide, 2000)


  // 네브바
  $("nav>ul>li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown()
  })
  $("nav>ul>li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp()
  })
})
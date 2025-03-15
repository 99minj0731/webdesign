$(function(){
  //슬라이드

  function slide(){
    $(".slide ul").animate({marginLeft:"-100%"},2000,function(){
      $(".slide ul").append($(".slide ul li").first())
      $(".slide ul").css({marginLeft:0})
    })
  }

  setInterval(slide,3000)
  //팝업
  $(".pp").click(function(){
    $(".popup").show()
    return false
  })
  $(".button").click(function(){
    $(".popup").hide()
  })
})
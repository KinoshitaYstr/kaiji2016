$(function(){
  //メニュー固定関係
  var target = $("nav");
  var footer = $("footer");

  var targetHeight = target.outerHeight(true);
  var targetTop = target.offset().top;

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if(scrollTop > targetTop){
      var footerTop = footer.offset().top;

      if(scrollTop+targetHeight > footerTop){
        customTopPosition = footerTop-(scrollTop+targetHeight);
        target.css({position:"fixed",top:customTopPosition+"px"});
      }else{
        target.css({position:"fixed",top:"0px"});
      }
    }else{
      target.css({position:"static",top:"auto"});
    }
  });

  //BJの詳細画面表示
  $("#BJ").children(".detail_btn").click(function(){
    $("#BJ").children(".game_details").fadeIn();
  });
  $("#BJ").find(".close_btn").click(function(){
    $("#BJ").children(".game_details").fadeOut();
  });

  //pokerの詳細画面表示
  $("#poker").children(".detail_btn").click(function(){
    $("#poker").children(".game_details").fadeIn();
  });
  $("#poker").find(".close_btn").click(function(){
    $("#poker").children(".game_details").fadeOut();
  });

  //roulleteの詳細画面表示
  $("#roullete").children(".detail_btn").click(function(){
    $("#roullete").children(".game_details").fadeIn();
  });
  $("#roullete").find(".close_btn").click(function(){
    $("#roullete").children(".game_details").fadeOut();
  });

  //near9
  $("#near9").children(".detail_btn").click(function(){
    $("#near9").children(".game_details").fadeIn();
  });
  $("#near9").find(".close_btn").click(function(){
    $("#near9").children(".game_details").fadeOut();
  });



});

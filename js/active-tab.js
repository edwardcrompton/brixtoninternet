$('li').click(function(){
  if ($("li").hasClass('active')) {
      $("li").removeClass('active');
  }
  $(this).addClass('active');
});
$("#carouselId").carousel();
$(".item").click(function(){
    $("#carouselId").carousel(1);
  });
$(".left").click(function(){
    $("#carouselId").carousel("prev");
  });  

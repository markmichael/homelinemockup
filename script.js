$(document).ready(function(){
  $(function() {
    $( "#slider" ).slider({
      value:9,
      min: 1,
      max: 12,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value+" MONTHS" );
      }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" )+" MONTHS" );
  });

  $(".showmap1").click(function(){
  	$(".showmap1").addClass("active");
  	$(".showmap2").removeClass("active");
  	$(".showmap3").removeClass("active");
  	$("#map1").removeClass("hidden");
  	$("#map2").addClass("hidden");
  	$("#map3").addClass("hidden");
  })
  $(".showmap2").click(function(){
  	$(".showmap2").addClass("active");
  	$(".showmap1").removeClass("active");
  	$(".showmap3").removeClass("active");
  	$("#map2").removeClass("hidden");
  	$("#map1").addClass("hidden");
  	$("#map3").addClass("hidden");
  })
  $(".showmap3").click(function(){
  	$(".showmap3").addClass("active");
  	$(".showmap2").removeClass("active");
  	$(".showmap1").removeClass("active");
  	$("#map3").removeClass("hidden");
  	$("#map2").addClass("hidden");
  	$("#map1").addClass("hidden");
  })
});
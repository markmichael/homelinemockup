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
  $("#eastwood").mouseover(function(){
  	$(".totalevictions").text("3K EVICTIONS");
  	$(".avgpropertyvalue").text("AVG PROPERTY VALUE: $90K");
  	$(".neighborhoodname").text("EASTWOOD");
  });
  $("#fifth").mouseover(function(){
  	$(".totalevictions").text("4K EVICTIONS");
  	$(".avgpropertyvalue").text("AVG PROPERTY VALUE: $40K");
  	$(".neighborhoodname").text("FIFTH WARD");
  });
  $("#gulfgate").mouseover(function(){
  	$(".totalevictions").text("2K EVICTIONS");
  	$(".avgpropertyvalue").text("AVG PROPERTY VALUE: $110K");
  	$(".neighborhoodname").text("GULFGATE/PINE VALLEY");
  });
  $("#idylwood").mouseover(function(){
  	$(".totalevictions").text("1.5K EVICTIONS");
  	$(".avgpropertyvalue").text("AVG PROPERTY VALUE: $70K");
  	$(".neighborhoodname").text("IDYLWOOD");
  });
  $("#magnolia").mouseover(function(){
  	$(".totalevictions").text("1.5K EVICTIONS");
  	$(".avgpropertyvalue").text("AVG PROPERTY VALUE: $50K");
  	$(".neighborhoodname").text("MAGNOLIA PARK");
  });
  $("#pecan").mouseover(function(){
  	$(".totalevictions").text("4K EVICTIONS");
  	$(".avgpropertyvalue").text("AVG PROPERTY VALUE: $113K");
  	$(".neighborhoodname").text("PECAN PARK");
  });
  $("#second").mouseover(function(){
  	$(".totalevictions").text("3K EVICTIONS");
  	$(".avgpropertyvalue").text("AVG PROPERTY VALUE: $74K");
  	$(".neighborhoodname").text("SECOND WARD");
  });
});
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
});
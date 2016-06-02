$(document).ready (function(){

  $("select#favTopic").change(function(event) {
    var topic = parseInt($("#favTopic").val());
    event.preventDefault();
    $("#followUp1").hide();
    $("#followUp2").hide();
    $("#followUp3").hide();

    if (topic === 1 ) {
      $("#followUp1").show();
    }
    else if (topic === 2 ) {
      $("#followUp2").show();
    }
    else  {
      $("#followUp3").show();
    }
  });
});

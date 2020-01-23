"use strict";
var renderer = new Renderer();
var handler = new Handler();
var stepper = new Stepper();
var counter = new Counter();


var band1 = new Band();
var band2 = new Band();
var band3 = new Band();


var päckle = [band1, band2, band3, counter, handler];


$(function() {
  $("#InputFeld").append("<input type=\"text\" id=\"band1\" placeholder=\"Zahl eingeben\">" + " x " + "<input type=\"text\" id=\"band2\" placeholder=\"Zahl eingeben\">")
  $("#Button").append("<input type=\"button\" id=\"button\" value = \"Los, rechnen\" >")
  $("#Stepmode").append("<input type=\"radio\" name=\"Stepmode\" value = \"Stepmode an\">", "<label for=\"Stepmode\">Schritt für Schritt ausführen?</label>")
  $("#Button" ).click(function() {
  band1.fuegeZahlHinzu($("#InputFeld input#band1").val());
  band2.fuegeZahlHinzu($("#InputFeld input#band2").val());
  renderer.render(päckle);
  console.log("render in Touring1")
  $("input#button").prop("disabled", true);
  if ($("#Stepmode input:checked").val() == 'Stepmode an'){
    handler.setzeStepmode(true);
    renderer.render(päckle);
    console.log("render in Stepmode an")
  }

  setTimeout(function(){
    while(!stepper.gibStatus() && !handler.gebeStepmode()){
      stepper.fuehreSchrittAus(päckle);
      renderer.render(päckle);
}
}, 1000)

  if (handler.gebeStepmode()){
    $( "#NextStep" ).empty().append( "<input type=\"button\" id=\"button\" value = \"nächster Schritt\" disabled = \"true\">" );
    $("#NextStep input#button").removeAttr("disabled");
    console.log("Button enabled")
    $("#NextStep input#button").click(function() {
      stepper.fuehreSchrittAus(päckle);
      renderer.render(päckle);
      console.log("render in Einzelschritt")
      if(stepper.gibStatus()){
      $("#NextStep input#button").prop("disabled", true);
      }
  })
}

});
});

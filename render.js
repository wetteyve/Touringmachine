"use strict"

function Renderer() {
this.index = 1;
};


Renderer.prototype.render = function ([band1, band2, band3, steps, handler]) {

    renderBand1(band1);
    renderBand2(band2);
    renderBand3(band3);

$( "#Resultat" ).empty().append( "<p> Resultat: " + band3.gibIndex() + "</p>" );
  $( "#currentState" ).empty().append( "<p> aktueller Zustand: " + handler.gibStatus() + "</p>" );
  $( "#AnzahlSteps" ).empty().append( "<p> Anzahl Schritte " + counter.gebeCounter() + "</p>" );
  $( "#Modus" ).empty().append( "<p> Stepmodus an: " + handler.gebeStepmode() + "</p>" );

  };

  function renderBand1(band){
    var string = "#Band1"
    $(string).empty();
    var arrayLength = band.gibLänge();

    for (var i = 0; i < arrayLength; i++) {
      if(i == band.gibIndex()+15){
        $( "#Band1" ).append("<span class= \"dotlese dot" + band.gibSpezifischenWert(i) + "\"></span>");
      }
      else{
        $( "#Band1" ).append("<span class=\"dot" + band.gibSpezifischenWert(i) + "\"></span>");

      }

    };



  }



  function renderBand2(band){
    var string = "#Band2"
    $(string).empty();
    var arrayLength = band.gibLänge();

    for (var i = 0; i < arrayLength; i++) {
      if(i == band.gibIndex()+15){
      $( "#Band2" ).append("<span class= \"dotlese dot" + band.gibSpezifischenWert(i) + "\"></span>");

    }
    else{

        $( "#Band2" ).append("<span class=\"dot" + band.gibSpezifischenWert(i) + "\"></span>");

    };

}

  }
  function renderBand3(band){
    var string = "#Band3"
    $(string).empty();
    var arrayLength = band.gibLänge();

    for (var i = 0; i < arrayLength; i++) {
      if(i == band.gibIndex()+15){

        $( "#Band3" ).append("<span class= \"dotlese dot" + band.gibSpezifischenWert(i) + "\"></span>");

      }
      else{

          $( "#Band3" ).append("<span class=\"dot" + band.gibSpezifischenWert(i) + "\"></span>");

    };



  }
}

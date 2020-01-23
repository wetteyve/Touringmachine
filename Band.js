"use strict";

function Band(zahl) {
    this.ausgabe = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.index = 15;

};

Band.prototype.gibAusgabe = function () {
    return this.ausgabe;
  };
Band.prototype.gibIndex = function () {
    return this.index - 15;
  };
Band.prototype.erhoeheIndex = function () {
  this.index = this.index + 1;
};
Band.prototype.senkeIndex = function () {
this.index = this.index - 1;
};

Band.prototype.fuegeZahlHinzu = function(zahl) {
  for(var i = 0; i < zahl; i++){
    this.ausgabe.splice(15,0, 1)

  };
}

Band.prototype.loescheWert = function() {
    this.ausgabe[this.index] = 0;
}

Band.prototype.gibWert = function(){

  return this.ausgabe[this.index];
}

Band.prototype.gibSpezifischenWert = function(zahl){
return this.ausgabe[zahl];

}

Band.prototype.gibLänge = function(){

  return this.ausgabe.length;
}

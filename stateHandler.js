"use strict"

function Handler() {
this.state = 0
this.stepmode = false;
};

Handler.prototype.gibStatus = function(){

return "Q" + this.state;

}

Handler.prototype.aendereStatus = function(zahl){
this.state = zahl;

}
Handler.prototype.setzeStepmode = function(bool){

this.stepmode = bool;

}

Handler.prototype.gebeStepmode = function(){

return this.stepmode;

}

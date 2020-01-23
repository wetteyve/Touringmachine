"use strict";

function Counter() {
    this.number = 0;

};

Counter.prototype.erhoeheCounter = function(){
this.number = this.number + 1;

}

Counter.prototype.gebeCounter = function(){
return this.number;

}

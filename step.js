"use_strict"

function Stepper() {
this.finished = false;
};

Stepper.prototype.fuehreSchrittAus = function([band1, band2, band3, counter, handler]){


// if (handler.gebeStepmode() == true){
//  console.log("came to positive Stepmode")
//   $("#NextStep input#button").prop("disabled", false);
//   console.log("enabled Button")
//   $("#NextStep input#button").click(function() {
//     console.log("next-Button clicked")
//     switchAusfuehrung([band1, band2, band3, steps, handler]);
//     console.log("finished Switch Stepmode")
//     stepmode_hilfsbool = true;
// })
// if(stepmode_hilfsbool){
//  $("#NextStep input#button").prop("disabled", true);
//   console.log("disabled next-button again")}
//   stepmode_hilfsbool = false;
// }


    switchAusfuehrung([band1, band2, band3, counter, handler]);



}

function switchAusfuehrung([band1, band2, band3, steps, handler]){
switch(handler.state){
    case 0:
    //q01
    if(band1.gibWert() == 1 && band2.gibWert() == 1 && band3.gibWert() == 0){
      // console.log("q01: " +band1.gibWert() + ", "+ band1.gibIndex() + " /"+band2.gibWert()+ ", "+ band2.gibIndex() + " /"+band3.gibWert()+ ", "+ band3.gibIndex() + " /")
        band1.loescheWert();
        band2.erhoeheIndex();
        band3.fuegeZahlHinzu(1);
        band3.erhoeheIndex();
        handler.aendereStatus(1);
        counter.erhoeheCounter();
        break;
    }
//q02
if(band1.gibWert() == 0){
  // console.log("q02: " +band1.gibWert() + ", "+ band1.gibIndex() + " /"+band2.gibWert()+ ", "+ band2.gibIndex() + " /"+band3.gibWert()+ ", "+ band3.gibIndex() + " /")
    band1.erhoeheIndex();
    handler.aendereStatus(3);
    counter.erhoeheCounter();
    break;
}

//q03
if(band2.gibWert() == 0){
  // console.log("q03: " +band1.gibWert() + ", "+ band1.gibIndex() + " /"+band2.gibWert()+ ", "+ band2.gibIndex() + " /"+band3.gibWert()+ ", "+ band3.gibIndex() + " /")
    band2.erhoeheIndex();
    handler.aendereStatus(3);
    counter.erhoeheCounter();
    break;
}

    break;

    case 1:
//q11
if(band1.gibWert() == 0 && band2.gibWert() == 1 && band3.gibWert()== 0){
  // console.log("q11: " +band1.gibWert() + ", "+ band1.gibIndex() + " /"+band2.gibWert()+ ", "+ band2.gibIndex() + " /"+band3.gibWert()+ ", "+ band3.gibIndex() + " /")
    band2.erhoeheIndex();
    band3.fuegeZahlHinzu(1);
    band3.erhoeheIndex();
    counter.erhoeheCounter();
    break;
}

//q12
if(band1.gibWert() == 0 && band2.gibWert() == 0 && band3.gibWert()== 0){
  // console.log("q12: " +band1.gibWert() + ", "+ band1.gibIndex() + " /"+band2.gibWert()+ ", "+ band2.gibIndex() + " /"+band3.gibWert()+ ", "+ band3.gibIndex() + " /")
    band2.senkeIndex();
    handler.aendereStatus(2);
    counter.erhoeheCounter();
    break;
}
// console.log("Fehler Case 0: " + band1.gibWert() + " " + band2.gibWert() + " " + band3.gibWert())
    break;

    case 2:
    //q21
    if(band1.gibWert() == 0 && band2.gibWert() == 1 && band3.gibWert()== 0){
      // console.log("q21: " +band1.gibWert() + ", "+ band1.gibIndex() + " /"+band2.gibWert()+ ", "+ band2.gibIndex() + " /"+band3.gibWert()+ ", "+ band3.gibIndex() + " /")
        band2.senkeIndex();
        counter.erhoeheCounter();
        break;
    }

    //q22
    if(band1.gibWert() == 0 && band2.gibWert() == 0 && band3.gibWert()== 0){
      // console.log("q22: " +band1.gibWert() + ", "+ band1.gibIndex() + " /"+band2.gibWert()+ ", "+ band2.gibIndex() + " /"+band3.gibWert()+ ", "+ band3.gibIndex() + " /")
        band1.erhoeheIndex();
        band2.erhoeheIndex();
        handler.aendereStatus(0);
        counter.erhoeheCounter();
        break;
    }
    // console.log("Fehler Case 0: " + band1.gibWert() + " " + band2.gibWert() + " " + band3.gibWert())
    break;

    case 3:
    Stepper.finished = true;
    $("body").css("background-color", "green");
    break;

}
}

Stepper.prototype.gibStatus = function(){
  return Stepper.finished;
}

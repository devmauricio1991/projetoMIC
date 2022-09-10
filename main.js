//true = ( > que 5mm de diferença no halo em comparação ao mero)
//false = (não possio diferença em relação ao mero)


var boronico = document.getElementById("br");
var edta = document.getElementById("ed");
var cloxa = document.getElementById("cl");
var cesp = document.getElementById("cesp");
var ncesp = document.getElementById("ncesp");
var temocilina = document.getElementById("te");
var cazavi = document.getElementById("ca");
var meropenem = document.getElementById("me");
var imipenem = document.getElementById("im");

console.log(boronico);
console.log(edta);
console.log(cloxa);




function verificakpc (){
    if (boronico.checked === true && edta.checked === false && cloxa.checked === false)
        return console.log(`KPC`);
}

//fazer ficar automatico - onclick? algo assim



function metalo (boronico,edta,cloxa){
    if (boronico == false && edta == true && cloxa == false)
        return console.log(`Metalo`);
}


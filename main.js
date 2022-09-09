//true = ( > que 5mm de diferença no halo em comparação ao mero)
//false = (não possio diferença em relação ao mero)


let boronico = document.getElementById("br");
let edta = document.getElementById("ed");
let cloxa = document.getElementById("cl");
let cesp = document.getElementById("cesp");
let ncesp = document.getElementById("ncesp");
let temocilina = document.getElementById("te");
let cazavi = document.getElementById("ca");
let meropenem = document.getElementById("me");
let imipenem = document.getElementById("im");

console.log(boronico);
console.log(edta);
console.log(cloxa);




function verificakpc (boronico,edta,cloxa){
    if (boronico.checked == true && edta == false && cloxa == false)
        return console.log(`KPC`);
}



function metalo (boronico,edta,cloxa){
    if (boronico == false && edta == true && cloxa == false)
        return console.log(`Metalo`);
}


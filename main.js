//true = ( > que 5mm de diferença no halo em comparação ao mero)
//false = (não possio diferença em relação ao mero)

let mero = //recebe true or false
let boronico = //recebe true or false
let edta = //recebe true or false
let cloxa = //recebe true or false

console.log(mero);
console.log(boronico);
console.log(edta);
console.log(cloxa);


function verificakpc (boronico,edta,cloxa){
    if (boronico == true && edta == false && cloxa == false)
        return console.log(`KPC`);
}



function metalo (boronico,edta,cloxa){
    if (boronico == false && edta == true && cloxa == false)
        return console.log(`Metalo`);
}


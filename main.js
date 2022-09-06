//true = ( > que 5mm de diferença no halo em comparação ao mero)
//false = (não possio diferença em relação ao mero)

let mero = parseInt(prompt("Digite o halo do Meropenem"));
let boronico = ((parseInt(prompt("Digite o halo do meropenem com ac.Boronico"))) - mero);
let edta = ((parseInt(prompt("Digite o halo do meropenem com EDTA"))) - mero);
let cloxa = ((parseInt(prompt("Digite o halo do meropenem com cloxa"))) - mero);

function verificainibidores (mero,boronico,edta,cloxa){
    if (boronico <= 5 && edta <= 5 && cloxa <=5)
        console.log(`Mecanismo: Permeabilidade`);
        else{
            (boronico >= 5 && edta <= 5 && cloxa <=5)
        console.log(`Mecanismo: KPC`)
        }
    }

verificainibidores();
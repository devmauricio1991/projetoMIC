//true = ( > que 5mm de diferença no halo em comparação ao mero)
//false = (não possio diferença em relação ao mero)

let mero = parseInt(prompt("Digite o halo do Meropenem"));
let boronico = parseInt(prompt("Digite o halo do meropenem com ac.Boronico"));
let edta = parseInt(prompt("Digite o halo do meropenem com EDTA"));
let cloxa = parseInt(prompt("Digite o halo do meropenem com cloxa"));

function verificainibidores (mero,boronico,edta,cloxa){
    if ((boronico-mero) <= 5 && (edta-mero) <= 5 && (cloxa-mero) <=5)
        console.log(`Mecanismo: Permeabilidade`);
        break
        else{
            ((boronico-mero) > 4 && (edta-mero) <= 5 && (cloxa-mero) <=5)
        console.log(`Mecanismo: KPC`)
        }
    }

verificainibidores();
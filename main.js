//true = ( > que 5mm de diferença no halo em comparação ao mero)
//false = (não possio diferença em relação ao mero)

var mero = parseInt(prompt("Digite o halo do Meropenem"));
var boronico = parseInt(prompt("Digite o halo do meropenem com ac.Boronico"));
var edta = parseInt(prompt("Digite o halo do meropenem com EDTA"));
var cloxa = parseInt(prompt("Digite o halo do meropenem com cloxa"));

function verificainibidores (){
    if ((mero-boronico) <= 5 && (mero-edta) <= 5 && (mero - cloxa) <=5)
        console.log(`O mecanismo mudança permeabilidade`);
    }

verificainibidores();
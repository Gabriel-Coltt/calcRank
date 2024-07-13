const rankedLevel = ["Ferro","Bronze",
    "Prata", "Ouro", "Diamante","Lendário","Imortal"];
    
const txtout0 = "Seu saldo de vitória é ";
const txtOut1 = " e seu nível rankeado atual é: ";

const ps = require('prompt-sync');
const prompt = ps();

let vic;
let def

do{
    vic = prompt("Digite o número de vitórias: ");
    def = prompt("Digite o número de derrotas: ");
}while(vic === "" || def === "");

let rank = getVicDefeat(vic,def);

function getVicDefeat(victory, defeat){
  let level = victory - defeat
  return level

};

switch(true){
    case rank<=10:
        console.log(txtout0+rank+txtOut1+rankedLevel[0])
    break
    case rank>=11 && rank<=20:
        console.log(txtout0+rank+txtOut1+rankedLevel[1]);
    break
    case rank>=21 && rank<=50:
        console.log(txtout0+rank+txtOut1+rankedLevel[2]);
    break
    case rank>=51 && rank<=80:
        console.log(txtout0+rank+txtOut1+rankedLevel[3]);
    break
    case rank>=81 && rank<=90:
        console.log(txtout0+rank+txtOut1+rankedLevel[4]);
    break
    case rank>=91 && rank<=100:
        console.log(txtout0+rank+txtOut1+rankedLevel[5]);
    break
    case rank>=101:
        console.log(txtout0+rank+txtOut1+rankedLevel[6]);
    break
}


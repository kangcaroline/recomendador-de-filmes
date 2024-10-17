//ação,romance,drama,comedia,thriller

//parasita,16 anos,drama, thriller

//o diario da princesa, livre,comedia
//vingadores ultimato, 12 anos,ação
//adoreveis mulheres, 10 anos,drama
//uma linda mulher,12 anos,romance


let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(600, 600);
   createSpan("Sua idade:");
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de Drama ?");
}
function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
  }

  function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 16) {
        if(idade >= 12) {
            return "Vingadores Ultimato";
        } else {
            if(gostaDeDrama){
                return "o diario da princesa";
            } else {
                return "Parasita";
            }
        }
    } else {
 if (gostaDeRomance) {
            return "uma linda mulher";
        } else {
            return "O diario da princesa";
        }
    }
}
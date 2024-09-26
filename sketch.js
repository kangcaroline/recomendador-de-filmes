//ação,romance,drama,comedia,thriller

//parasita,16 anos,drama, thriller

//o diario da princesa, livre,comedia
//vingadores ultimato, 12 anos,ação
//adoreveis mulheres, 10 anos,drama
//uma linda mulher,12 anos,romance

function setup(){ 
  createCanvas(600, 500);
}

function draw() {
  background(220);
  
  let recomendacao = geraRecomendacao();
  text (recomendacao, width / 2, height /2);
}

function geraRecomendacao() {
   if(idade >= 16) {
    return "o diario da princesa";
  } else {
    
    return "parasita";
  }
  
} 


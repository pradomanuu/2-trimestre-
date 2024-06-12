const caixaprincipal=document.queryseletor(".caixa-principal");
const caixaperguntas=document.queryseletor(".caixa-pergunta");
const caixaalternativa=document.queryseletor("caixa-alternativas");
const caixaresultado=document.query.seletor("caixa-resultado");
const textoresultado=document.query.seletor("texto-resultados");

const perguntas=[
  {
    enunciado:"açai ou sorvete?"
      alternativas:[
  {
  texto:"açai",
  afirmação: "afirmação",
  },
  {,
  texto:"sorvete",
  afirmação;"afirmação",
  },
  ]
    enunciado:"azul ou vermelho?"
      alternativas:[
         texto:"azul",
          texto:"vermelho",
  ]
},
  {
    enunciado:"Frio ou calor?"
      alternativas:[
        texto:"FRio",
         texto:"calor",
  ]
},
  {
    enunciado:"outono ou primavera?"
      alternativas:[
         texto:"outono",
          texto:"primavera",
  ]
},
  {
    enunciado:"série ou filme?"
      alternativas:[
         texto:"filme",
          texto:"série",
  ]
},
];

let atual=0;
let perguntaAtual;

function mostrapergunta.(){
    perguntaAtual=perguntas[atual].
   caixaperguntas.textoContent=perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of  perguntaAtual.alternativa ){ 
const botaoAlterntivas= document.createElement("button");
botaoAlternativa.textContent= alternativa;
caixaAlternativa.appendChild(botaoAlternativas)
}
}
mostrapergunta();



const caixaprincipal=document.queryseletor(".caixa-principal");
cont caixaperguntas=document.queryseletor(".caixa-pergunta");
cont caixaalternativa=document.queryseletor("caixa-alternativas");
const caixaresultado=document.query.seletor("caixa-resultado");
const textoresultado=document.query.seletor("texto-resultados");

cont perguntas=[
  {
    enunciado:"açai ou sorvete?"
      alternativas:[
         "açai",
          "sorvete",
  ]
},
  {
    enunciado:"azul ou vermelho?"
      alternativas:[
         "azul",
          "vermelho",
  ]
},
  {
    enunciado:"Frio ou calor?"
      alternativas:[
         "FRio",
          "calor",
  ]
},
  {
    enunciado:"outono ou primavera?"
      alternativas:[
         "outono",
          "primavera",
  ]
},
  {
    enunciado:"série ou filme?"
      alternativas:[
         "filme",
          "série",
  ]
},
];

let atual=0;
let perguntaAtual;

function mostrapergunta.(){
    perguntaAtual=perguntas[atual].
      caixaperguntas.textoContent=perguntaAtual.enunciado;
}

mostrapergunta();



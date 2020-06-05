// variaveis

var tabuleiro = [] ;
var O = 0;
var X = 0;
var MAX = 3; // constante do tamanho da Matriz
var ct = 0; // variavel de contagem
var object =  document.querySelectorAll(".clicked"); // var Object

//  criando o vetor
for(var i = 0; i < MAX; i++) {
    tabuleiro[i]= new Array(MAX);
}// fim for vetor
// criando a Matriz e colocando 0(ZERO dentro)
for(var i = 0; i < MAX; i++) {
    for(var j = 0; j <MAX; j++){
        tabuleiro[i][j] = 0;

    }// fim do 2º for da matrix
}// fim 1º for/

// inicia o jogo caso haja vencedor, e a matriz zera
function IniciaJogo(){
       tabuleiro2 = [];   
    for(var i = 0; i < MAX; i++) {
        tabuleiro2[i] = new Array(MAX);
        for(var j = 0; j <MAX; j++){
        tabuleiro2[i][j] = 0;
        if(tabuleiro2[i][j] == 0){
            for(var k = 0; k < object.length; k++){
                object[k].style.background = "black";
            }// fim 3 for
        }// fim if   
        }// fim do 2º for da matrix
    }// fim 1º for
    return tabuleiro2;
}// fim da zeraMatriz ****************************************************************
//Verifica se uma posição da matriz está vazia (igual a 0) e retorna true ou false
function EstaVazia(linha, coluna, tabuleiro) {
    var t = true;
    var f = false;
   if(tabuleiro[linha][coluna] == 0) {
    return t;
   } // fim do if
   else {
       return f;
   }
}// fim da função estávazia
//Adiciona um valor inteiro (1 a 4) a uma posição da matriz
function AdicionaNaPosicao(linha, coluna, posição, tabuleiro){
 return tabuleiro[linha][coluna] = posição;
}// fim do AdicionaPosição *************************************************************
//Devolve uma linha da matriz num array unidimensional
function LinhaMatriz(linha, tabuleiro){    
  var  x = new Array(MAX);
    for(var i = 0; i < MAX; i++){
        x[i]= tabuleiro[linha][i];
    }

     return x;
}// fim do devolve linha matriz*********************************************************
//Devolve uma coluna da matriz num array unidimensional
function ColunaMatriz(coluna, tabuleiro) {
    var x = new Array(MAX);
    for(var i = 0; i < MAX; i++){
        x[i]= tabuleiro[i][coluna];
    }
    return x;
}// fim do colunaMatriz******************************************************************
//Devolve a diagonal esquerda da matriz num array unidimensional
function DiagonalEsquerda(tabuleiro){
    var x = new Array(MAX);
    for(var i = 0; i < MAX; i++) {
        x[i]= tabuleiro[i][i];
    }
   return x;
}// fim da diagonalesquerda***************************************************************
//Devolve a diagonal Direita da matriz num array unidimensional
function DiagonalDireita(tabuleiro) {
    var x = new Array(MAX);
    var ct = MAX -1;
    for(var i = 0; i < MAX; i++) {
        x[i]= tabuleiro[i][ct];
        ct--;
    }
    return x;
}// fim da função DiagonalDireita*********************************************************
//Altera uma linha da matriz somando 2 a todas as posições
function GanhaLinhaMatriz(linha, tabuleiro){
for(var i = 0; i < MAX; i++) {
   tabuleiro[linha][i] = tabuleiro[linha][i] +2;
}
 return tabuleiro;
}// fim do GanhaLinha ********************************************************************
//Altera uma coluna da matriz somando 2 a todas as posições
function GanhaColunaMatriz(coluna, tabuleiro) {
  for(var i= 0; i < MAX; i++) {
  tabuleiro[i][coluna] = tabuleiro[i][coluna] +2;
}
  return tabuleiro;
}// fim do GanhaColunaMatriz**************************************************************
//Altera diagonal esquerda da matriz somando 2 a todas as posições
function GanhaDiagonalEsquerda(tabuleiro){
    for(var i = 0; i < MAX; i++) {
        tabuleiro[i][i] = tabuleiro[i][i]+2;
    }
    return tabuleiro;
}// fim da GanhaDiagonalEsquerda *********************************************************
//Altera diagonal direita da matriz somando 2 a todas as posições
function GanhaDiagonalDireita(tabuleiro){
    var ct = MAX;
 for(var i = 0; i < MAX; i++){
    ct--;
     tabuleiro[i][ct] = tabuleiro[i][ct] +2;
 }
     return tabuleiro;
}// fim do GanhaDiagonalDireita***********************************************************
//Verifica se um array unidimensional tem todos os seus valores iguais, caso sejam 0 assume
//que são valores diferentes. Retorna true ou false.
function ValoresIguais(vetor){   
    var compara = vetor[0];
    if(compara == 0) {
        return false;
    }
    for(var i = 0; i< MAX; i++) {   
    if(compara != vetor[i]) {
        return false;
     }
    }// fim for
  return true;
}// fim do ValoresIquais********************************************************************

//Verifica todas as linhas, colunas ou diagonais e se alguma delas tem os seus valores todos
//iguais. Caso se verifique, invoca a função Ganha correspondente. Retorna true ou false.
function MatrizIguais(tabuleiro) {
    for(var i = 0; i < MAX; i++) {
        var linhaIguais = ValoresIguais(LinhaMatriz(i, tabuleiro));
        if(linhaIguais) {
            GanhaLinhaMatriz(i, tabuleiro);
            return true;
        }// fim do if linhaiquais
        var colunaIguais = ValoresIguais(ColunaMatriz(i, tabuleiro));
        if(colunaIguais ) {
            GanhaLinhaMatriz(i, tabuleiro);
            return true;
        }// fim if colunaIquais
    }// fim for linha e coluna

        var DiaEsqIguais = ValoresIguais(DiagonalEsquerda(tabuleiro));
        if(DiaEsqIguais ) {
            GanhaDiagonalEsquerda(tabuleiro);
            return true;
        }
        var DiaDirIgual = ValoresIguais(DiagonalDireitaMatriz(tabuleiro));
        if(DiaDirIgual) {
            GanhaDiagonalDireita(tabuleiro);
            return true;
        }
    return false;
}// fim da Função MatrizIQual****************************************************************

/** FUNÇÂO JOGO*********************************************************************************/
for(var i = 0; i < object.length; i++) {
    object[i].onckick = function() {
        if(EstaVazia(this.dataset.linha, this.dataset.coluna, tabuleiro)) {
            ct ++;
            if((ct % 2) == 0) {
                AdicionaNaPosicao(this.dataset.linha,this.dataset.coluna, i, tabuleiro);
                ct = 0;
                this.style.backgroundImage = "url(_img/O.png)";
            }// fim if ct 
            else{
                AdicionaNaPosicao(this.dataset.linha,this.dataset.coluna, i, tabuleiro);
                this.style.backgroundImage = "url(_img/X.png)";
            }









        }// FIM DO IF ESTÁ VAZIO
        };// fim função
}// fim for 




console.log(tabuleiro);
 console.log(AdicionaNaPosicao(0,0,0,tabuleiro));
console.log(AdicionaNaPosicao(0,1,0,tabuleiro));
console.log(AdicionaNaPosicao(0,2,0,tabuleiro));
//console.log(GanhaDiagonalDireita(tabuleiro));
console.log(ValoresIguais(LinhaMatriz(0,tabuleiro)));
//console.log(ValoresIguais(GanhaLinhaMatriz(0,tabuleiro)));





/*******
 * Objetivo: Calcular a tabuada de um determinado numero
 * Data: 06/09/2023
 * Autor: Julia Silva
 * Versão: 1.0
 *******************/

const gerarTabuada= function(valorTabuada, valorInicial, valorFinal){

// Recebe os valores dos argumentos a função em variaveis iniciais
        let tabuada = valorTabuada;
        let contadorInicial = valorInicial;
        let contadorFinal = valorFinal;

        let resutado;
        let status = false;
 
// Validação de entradas em branco

if(tabuada == ''|| contadorInicial == ''|| contadorFinal == '')
console.log('ERRO: É obrigatório a digitação de todos os valores.');
else if(isNaN(tabuada) || isNaN(contadorFinal) || isNaN(contadorInicial))
console.log('ERRO: É obrigatório somente a digitação de valores numéricos');
else{

    //Conversão de dados de String para Number 
    contadorInicial = Number(contadorInicial);
    contadorFinal = Number(contadorFinal);
    tabuada = Number(tabuada);

    //Tratamento para garantir que o contadorInicial sempre seja menor do que o final
    if(contadorInicial > contadorFinal){
        contadorInicial = valorFinal
        contadorFinal = valorInicial
    }

    
    //Exemplo usando o while 
    /****
     *  while(contadorInicial <= contadorFinal) { 
        resultado = tabuada *contadorInicial
        console.log(`${tabuada} x ${contadorInicial} = ${resutado}`)
        contadorInicial++
        status = true;
        } 
     * **/

        //Exemplo usando FOR

        for(;contadorInicial <= contadorFinal; contadorInicial++){
            resultado = tabuada *contadorInicial;
            console.log(`${tabuada} x ${contadorInicial} = ${resutado}`);
            status = true;

        }
   
        }

         return status;


        }
       
           console.log(gerarTabuada('9', '0', '100'));
           
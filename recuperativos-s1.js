/*
Problema difícil 1 (50 puntos):
Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
*/
//creo funcion rotar que recibira como parametros un array y un entero
function rotar(arr, n){
    //obtengo el largo del array
    var largo = arr.length;
    //corto mi array
    var cortado = arr.slice(largo-n)
    //concateno al inicio de mi array
    return cortado.concat(arr.slice(0, largo - n));
}


/*
Problema difícil 4 (50 puntos):
Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.
*/
//funcion indice que recibe como parametro un array
function indice(arr){
    //variable que guarda el valor del indice
    var indice = 0;
    //variable que guarda el valor del array 
    var numMenor = arr[0];
    //recorro el array
    for(var i = 0 ; i < arr.length;i++){
        //comparo si el valor que estoy consultando es menor al que hay en mi variable
        if(arr[i] < numMenor){
            //rescato el valor del numero menor
            numMenor = arr[i];
            //rescato el valor del indice
            indice = i;
        }
    }
    //retorno el valor del indice
    return indice;
}
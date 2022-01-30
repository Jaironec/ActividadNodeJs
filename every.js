//Every: verifica que todos los elementos del array cumplan con la
//misma condicion. si todos cumplen se devuelve verdadero si no falso.
const numeros =[10, 20, 30, 40, 50, -5];

//Determinar si todos los elementos del array de numeros son positivos

const EsPositivo = numeros.every(data => {
    return data > 0;
});

const EsPositivoVers2 = numeros.every(data => data > 0);

console.log("Elementos positivos : ", EsPositivo);
console.log("Elementos positivos Version 2: ", EsPositivoVers2);

//ForEach - Every - Filter
//Verificar si todos los elementos de una matriz son positivos
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 20, 30]];
function matrizSoloPositivo(array){
    var res =[];
    array.forEach(element =>{
       res.push(element.every(item =>{ 
            return item > 0;
        }));
    });
    //console.log(res);
    return res.every(data => data==true);
}
const x = matrizSoloPositivo(matriz);
if(x)
console.log("La matriz tiene solo positivos: ", x);
else
console.log("La matriz tiene solo negativos: ", x);

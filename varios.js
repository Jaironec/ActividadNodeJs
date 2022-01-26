const vertor = [10, 20, 30, 40, 50, 60, 70, 80, 90];

vertor.forEach((data, indice, array) => {
    console.log(data, indice, array, array[0]);
})

//Se tiene un array de nombres
// Se pide devolver el array que incluya unicamente los nombres que tienen
// una sola palabra
const nombres = ["Juan", "Pedro", "Maria", "Hector Perez", "Jose de la Cuadra"];

function getNombresDeUnaPalabra(array){
    return array.filter (data => {
        return data.indexOf(' ')==-1;
    })
}
const nom = getNombresDeUnaPalabra(nombres);
console.log(nom);

//Una funcion resive una cadena de caracteres
// se pide que la funcion devuelva la palabra ingresada sin consonantes.

const Palabra = "Universidad";
function getPalabras(str)
{
    var vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    return str.split("").filter(data => {
        return vocales.indexOf(data.toLowerCase())!=-1;
    }).join('');
}
const parrafo = getPalabras(Palabra);
console.log(parrafo);
console.log(getPalabras("JuAnito"));

//Una funcion recibe un array de palabras 
//Se pide que la funcion devuelva las palabras que tienen la misma vocal
entrada=["analgan","zoom","casa","jinete","iglesia"]
function palabrasMismaVocal(array){
    array.filter(data=>{
        
        const strvocales=getPalabras(data);
        console.log(strvocales);
    })
}
palabrasMismaVocal(entrada);

//Presentar en github hasta las 22:00


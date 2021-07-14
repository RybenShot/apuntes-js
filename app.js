////CONTADOR
//Cadenas
//contar cuantos caracteres tiene una palabra. se incluye los espacios. Efecto Twitter
let lengthPalabra = "Esto es para contar en Nº de caracterees que hay en esta frase"//62
console.log(lengthPalabra.length)
//No podemos calcular la longitud de un numero EXCEPTO si esta en modo String
let lengthNumero = lengthPalabra.length //62
console.log(lengthNumero.length) //undefined

////CONCADENACION
let firstName = 'Manuel'
let lastName = 'Perez'
//String
let completeName = firstName + ' ' + lastName // Forma de concadenar String A LO BRUTO
console.log(completeName) //Manuel Perez
let concatCompleteName = firstName.concat(' ', lastName) // otra forma de concadenar Strings
console.log(concatCompleteName) //Manuel Perez

////TRANSFORMACION
let mayusName = firstName.toUpperCase() //a MAYUSCULAS 
let minusName = lastName.toLowerCase() //a mimusculas
console.log(mayusName + ' ' + minusName) //MANUEL perez

////BUSCAR EN EL STRING
//Indice////////////////////////////////////////////////
let letraDelNombre = firstName[2]//capturamos en una variable la letra que esta posicionada en la posicion 2 de la variable "firstName" que en este caso es 'n'
console.log(letraDelNombre)//'n'
//IndexOf/////////////////////////////////////////////
let favoritePhrase = 'Emosido engañao'
let = favoritePhrase.indexOf('eng')//8. la posicion donde empieza el caracter en al cadena
let = firstName.indexOf('r')// Manuel. No lleva una 'r' asiq ue da un -1 en señal de que ese caracter no esta
let = firstName.indexOf('e')// 4
firstName = 'Pepe' //Reasignamos un nuevo valor a 'firstName'
let = firstName.lastIndexOf('e')//3. Da la posicion del ULTIMO valor que coincida
//Includes//////////////////////////////////////////////////
//Esto se usa para comprovaciones
console.log(favoritePhrase.includes('sido'))//true
console.log('al raton perez le gusta el queso'.includes('dientes'))//false
//charAt//////////////////////////////////////////////////
// Puede servir para buscar una letra y convertirla a mayus
console.log(favoritePhrase.charAt(8))// 'e' en este caso le das la posicion y el te devuelve la letra que hay ahi
firstName = 'sebastian'
console.log(firstName.charAt(0).toUpperCase())//'S'
//Slice /////////////////////////////////////////////////
//Se usa para coger un cacho de una variable
'emosido engañao'
console.log(favoritePhrase.slice(2,5))//'osi' Deste la posicion 2 hasta EL ANTERIOR a la posicion del 5

//PRACTICA MUY INTERESANTE
favoritePhrase = 'emosido                                                      engañao                            ' //Hemos dejado espacion en medio y atras. vamos a quitarlo
favoritePhrase = favoritePhrase.trim()// Le quita los espacion de detras y lo metemos de nuevo en la variable
let fistSpace = favoritePhrase.indexOf(' ')//7
let lastSpace = favoritePhrase.lastIndexOf(' ')// 60 
//Capturamos las posiciones desde donde hasta donde esta el espacio
let characterNumber = favoritePhrase.length// 68
//Capturamos el tamaño total de la frase entera
let fistWord = favoritePhrase.slice(0, fistSpace)//'emosido'
let secondWord = favoritePhrase.slice(lastSpace, characterNumber)// ' engañao'. 
//Capturamos las dos palabras en diferentes variables
favoritePhrase = fistWord + secondWord// emosido engañao
//Y lo unimos todo


//DOM
let name = 'Sebastian';
 lastName = 'jimenez'
let job = 'Developer';
let age = '24'
let html = `<p>Buenos dias señor ${name}.Soy un parrafo de Java Script </p>`

let parrafo = document.getElementById('pharagrapJavaScript')//sustituimos SOLO lo que haya dentro del ID que indicamos en el div del html
parrafo.innerHTML = html //metemos la variable que hemos echo previamente
//Comparacion///////////////////////////////////////////////
html = `<p>Buenos dias señor ${name} ${lastName}. Se que trabajas como ${job}, tambien que eres ${age > 30 ? 'mayor de 30': 'menor de 30'} </p>`
 parrafo = document.getElementById('pharagrapJavaScript')//sustituimos SOLO lo que haya dentro del ID que indicamos en el div del html
parrafo.innerHTML = html //metemos la variable que hemos echo previamente


//ARRAYS
let animales = ['perro', 'cabra', 'gato']
let tango = [[1,2,3], {perror:'tango', edad:13}, 'Fernando', 41]
let conteoDeArray = animales.length//3
//comprovacion para saber si una variable es un array
Array.isArray(animales)//true
Array.isArray(conteoDeArray)//false.       porque es un numero
Array.isArray([])//true.                   aunque sea vacio, es un array
//acceso por indice
animales[1]//cabra
tango[2]//"Fernando"     
tango[1]//"{perror:'tango', edad:13}"
//meter un nuevo objeto en una posicion concreta de un array
animales[1] = 'pato'//sobreescribe a la 'cabra'
//encontrar un elemento por el nombre
animales.indexOf('gato')// 2 //De ta la posicion en la que este
//Mutar array// 
animales.push('delfin')// Lo añade al final
animales.unshift('Loro')// Lo añade al principio
animales.pop()// Quita el ultimo elemento del array
//Slice Splice////////////////////////////////////////////////////////////////////////////////////////
let testSplice = ['teclado', 'raton', 'monitor', 'torre', 'webcam', 'altavoz', 'pato']
let loQueHemosQuitadoDelArray = testSplice.splice(2 , 4)// guardamos en una variable lo que hemos sacado del otro array, en este caso tendriamos un nuevo array con ['monitor', 'torre', 'webcam', 'altavoz'] Y HA MUTADO EL ANTERIOR ARRAY //Por asi decirlo hemos cortado y pegado
//testSpliceSlice Tiene ahora ["teclado", "raton", "pato"]
testSplice.splice(0 , 1)// Elimina 'teclado' y deja el resto ahora el array seria ["raton", "pato"]// Por asi decirlo solo ha cortado y no lo hemos """Pegado"""" en ningun lado
let testSlice = ['libreta', 'tijeras', 'vaso', 'movil', 'boli', 'tipex', 'planta']
let restoSplice = testSlice.slice(2 , 4)// guardamos en una nueva variable ["vaso", "movil"] EL ARRAY ORIGINAL NNNOOOOOO HA MUTADO //Por asi decirlo ha copiado y pegado
testSlice //Sigue teniendo todos sus elementos
testSlice.slice(3,5)// devuelve ["movil", "boli"] PERO NO MUTA EL ARRAY ORIGINAL
let testSlice2 = ['libreta', 'tijeras', 'vaso', 'movil', 'boli', 'tipex', 'planta']
let nuevoOrden = testSlice2.reverse() //Hemos guardado todo lo que tiene testSlice2 pero del reves los ultimos son los primeros YYYYYYYYY EL ARRAY ORIGINAL TAMBIEN SE HA MUTADO con el mismo efecto
//Concadenar Arrays // unir arrays//////////////////////////////////////////////////////////////////////
let testSplice2 = ['teclado', 'raton', 'monitor', 'torre', 'webcam', 'altavoz', 'pato']
let testSlice3 = ['libreta', 'tijeras', 'vaso', 'movil', 'boli', 'tipex', 'planta']
let arrayConcat = testSplice2.concat(testSlice3)//Guardamos en una nueva variable la union de los dos arrays que hemos dicho SIN MUTAR LOS DEMAS
arrayConcat //["teclado", "raton", "monitor", "torre", "webcam", "altavoz", "pato", "libreta", "tijeras", "vaso", "movil", "boli", "tipex", "planta"]





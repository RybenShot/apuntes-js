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
console.log(favoritePhrase.slice(2, 5))//'osi' Deste la posicion 2 hasta EL ANTERIOR a la posicion del 5

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
html = `<p>Buenos dias señor ${name} ${lastName}. Se que trabajas como ${job}, tambien que eres ${age > 30 ? 'mayor de 30' : 'menor de 30'} </p>`
parrafo = document.getElementById('pharagrapJavaScript')//sustituimos SOLO lo que haya dentro del ID que indicamos en el div del html
parrafo.innerHTML = html //metemos la variable que hemos echo previamente


//ARRAYS
let animales = ['perro', 'cabra', 'gato']
let tango = [[1, 2, 3], { perror: 'tango', edad: 13 }, 'Fernando', 41]
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
let loQueHemosQuitadoDelArray = testSplice.splice(2, 4)// guardamos en una variable lo que hemos sacado del otro array, en este caso tendriamos un nuevo array con ['monitor', 'torre', 'webcam', 'altavoz'] Y HA MUTADO EL ANTERIOR ARRAY //Por asi decirlo hemos cortado y pegado
//testSpliceSlice Tiene ahora ["teclado", "raton", "pato"]
testSplice.splice(0, 1)// Elimina 'teclado' y deja el resto ahora el array seria ["raton", "pato"]// Por asi decirlo solo ha cortado y no lo hemos """Pegado"""" en ningun lado
let testSlice = ['libreta', 'tijeras', 'vaso', 'movil', 'boli', 'tipex', 'planta']
let restoSplice = testSlice.slice(2, 4)// guardamos en una nueva variable ["vaso", "movil"] EL ARRAY ORIGINAL NNNOOOOOO HA MUTADO //Por asi decirlo ha copiado y pegado
testSlice //Sigue teniendo todos sus elementos
testSlice.slice(3, 5)// devuelve ["movil", "boli"] PERO NO MUTA EL ARRAY ORIGINAL
let testSlice2 = ['libreta', 'tijeras', 'vaso', 'movil', 'boli', 'tipex', 'planta']
let nuevoOrden = testSlice2.reverse() //Hemos guardado todo lo que tiene testSlice2 pero del reves los ultimos son los primeros YYYYYYYYY EL ARRAY ORIGINAL TAMBIEN SE HA MUTADO con el mismo efecto
//Concadenar Arrays // unir arrays//////////////////////////////////////////////////////////////////////
let testSplice2 = ['teclado', 'raton', 'monitor', 'torre', 'webcam', 'altavoz', 'pato']
let testSlice3 = ['libreta', 'tijeras', 'vaso', 'movil', 'boli', 'tipex', 'planta']
let arrayConcat = testSplice2.concat(testSlice3)//Guardamos en una nueva variable la union de los dos arrays que hemos dicho SIN MUTAR LOS DEMAS
arrayConcat //["teclado", "raton", "monitor", "torre", "webcam", "altavoz", "pato", "libreta", "tijeras", "vaso", "movil", "boli", "tipex", "planta"]


//OBJETOS Y FUNCIONES
let persona = {
  firstName: "Sebastian",
  lastName: "Jimenez",
  age: "24",
  email: "sebastianjimenezroman@hotmail.com",
  hobbies: ['deportes', 'musica', 'videojuegos'],
  adress: {
    city: 'malaga',
    town: 'campanillas'
  },
  getBirdYear: function () {
    return 2021 - this.age
  }
}
//Para acceder a un dato del objeto es a traves de las eparacion de puntos
persona.adress.city//malaga
persona.getBirdYear()//1997
persona.hobbies[2]//"videojuegos"// PERO Para acceder a algo que hay dentro de un array tenemos que acceder a traves del indice
let people = [//Esto es una coleccion de elementos // array de objetos
  { name: "nestor", age: "53" },
  { name: "kira", age: "5" },
  { name: "raul", age: "21" },
  { name: "paula", age: "27" }
]
let raul = people[2]//{name: "raul", age: "21"} lo guardamos en la variable
people[2].name// "raul"


// LOOPS // BUCLES
// for ( let i = 0; i < people.length; i = i + 1){
//   // console.log(people[i].name)
//   // console.log(people[i].age)
//   console.log(`Nombre ${people[i].name} edad ${people[i].age}`)
// }
//  for ( let i = 0; i <= 100 ; i = i + 1){
//    console.log( i )
//  }
let phrase = 'el perro de san roque no tiene rabo'
letters = []
let animals = ['pato', 'perro', 'gato', 'caballo']
for (let i = 0; i < phrase.length; i = i + 1) {
  // console.log(phrase[i])
  letters.push(phrase[i])
}
for (let i = 0; i <= 10; i++) {
  console.log(i)
  if (i === 7) {
    console.log(`El numero ${i} es mi favorito`)
  }
  if (i === 9) {
    console.log(`Paro la cadena porque he encontrado el Nº ${i}`)
    break //PARO EL BUBLE
  }
}
//while
let i = 0
while (i < 10) {
  console.log(`${i} es menor que 10`)
  i++
}
// foreach()
// let animals = ['pato', 'perro' , 'gato', 'caballo']
let otherAnimals = []
animals.forEach(function (animal, i) {
  console.log(`El animal es ${animal} y se va a mater en el nuevo array en al posicion ${i}`)
  otherAnimals.push(animal)
  }
)
const persona2 = {//Recorremos todos los valores de la variable persona2
  nombre: 'Sebas',
  age: '24'
}// Recorremos un objeto
for (key in persona2) {
  console.warn(`La key en el objeto es ${key} y el valor es ${persona2[key]}`)
}
//Chip chop
//Un ciclo del 0 al 100 en el que 
//// si el numero es multiplo de 3 diche chip
//// si el numero es multiplo de 5 diche chop
//// si el numero es multiplo de 3 y 5 dice chip chop
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.error(`${i} CHIPCHOP`)
  }else if (i % 3 === 0) {
     console.warn(`${i} chip`)
   }else if (i % 5 === 0) {
    console.warn(`${i} chop`)
  }else{
    console.log(i)
  } 
}

//FECHAS Y HORAS
let birthday = new Date('11-21-1996')// Mes - Dia - Año 
birthday = new Date('December 11 1996')
birthday = new Date('11/21/1996')
// birthday = new Date().getDay() //Te devuelve el dia de la semana qeu estamos ahora en numero
birthday.setDate(16)//Cambio el dia 
birthday.setMonth(4)//Cambio el mes
let today = new Date()//Da la fecha actual, de ahora mismo
today.getDate()//Da el dia de ahora mismo
today.getDay()//Da el dia de la semana
today.getFullYear()//El año de ahora mismo
today.getHours()//Da la hora de ahora mismo
today.getMilliseconds()//Da el milisegundo de ahora mismo


//CONDICIONALES
//if() 
let color = 'black'
if (color === 'red') {
  console.log('Viva Elmo!')
} else if (color === 'yelow') {
  console.log('vivan los Simpsoms!')
} else if (color === 'blue') {
  console.log(`Vivan los Pitufos! porque el color es ${color}`)
} else {
  console.log(`El color no esta en la lista. Tu color es ${color}`)
}//Una condicional MUY SIMPLE
let pueblerino = {
  name: 'Francisco',
  age: '90'
}
if (pueblerino.age <= 13) {
  console.log(`${pueblerino.name} tiene ${pueblerino.age} años asi que pertenende a INFANTE`)
}
if (13 < pueblerino.age && pueblerino.age <= 18) {
  console.log(`${pueblerino.name} tiene ${pueblerino.age} años asi que pertenende a ADOLESCENTE`)
}
if (18 < pueblerino.age && pueblerino.age <= 65) {
  console.log(`${pueblerino.name} tiene ${pueblerino.age} años asi que pertenende a ADULTO`)
}
if (pueblerino.age > 65) {
  console.log(`${pueblerino.name} tiene ${pueblerino.age} años asi que pertenende a SENIOR`)
}
// Ejercicio cluedo
//poison           Mr. Kaleo        ballroom
//trophy           Ms. Van Cleve    galery
//pool stick       Mrs. Sparr       billiars room
//knife            Mr. Parkes       dining room 
let room
let suspect
let weapon
let solved = false
let clue = 'Sebas'
if (clue === 'billiars room' || clue === 'Mrs. Sparr' || clue === 'pool stick') {
  room = 'billiars room';
  suspect = 'Mrs. Sparr';
  weapon = 'pool stick'
  solved = true
}
if (clue === 'dining room' || clue === 'Mr. Parkes' || clue === 'knife') {
  room = 'dining room';
  suspect = 'Mr. Parkes';
  weapon = 'knife'
  solved = true
}
if (clue === 'galery' || clue === 'Ms. Van Cleve' || clue === 'trophy') {
  room = 'galery';
  suspect = 'Ms. Van Cleve';
  weapon = 'trophy'
  solved = true
}
if (clue === 'ballroom' || clue === 'Mr. Kaleo' || clue === 'poison') {
  room = 'ballroom';
  suspect = 'Mr. Kaleo';
  weapon = 'poison'
  solved = true
}
if (solved == true) {
  console.log(`El asesino esta entre nosotros y es ${suspect} en la habitacion ${room} con el arma ${weapon}`)
}
else {
  console.log(`El asesino no esta entre nosotros, viene de fuera`)
}
//condicinal con ?
let number1 = 100
number1 === 100 ? console.log('number1 es igual a 100') : console.error('number1 no es igual a 100')
number1 === 41 || number1 < 18 ? console.log('se cumple') : console.error('no se cumple')
//Actividad cajero 
let balance = 0
let checkBalance = true
let isActive = true
console.log(`Bienvenido a nuestro cajero querido cliente`)
if (checkBalance === false) {
  console.log(`Que tenga un buen dia`)
} else if (isActive === true && balance > 0) {
  console.log(`Tu cuenta esta activa y tiene actualmente ${balance}`)
} else if (isActive === false) {
  console.warn(`Sucuenta no esta activa, por favor para usar nuestros servicios reactivela`)
} else if (isActive === true && balance === 0) {
  console.warn(`Su cuenta esta activa pero actualmente esta a 0, porfavor meta dinero`)
} else if (isActive === true && balance < 0) {
  console.error(`Su cuenta esta activa pero nos debe dinero, por favor contactenos`)
}
// switch
let color2 = 'verde pistacho'
switch (color2) {
  case 'red':
    console.log(`El color es ${color2}`)
    break
  case 'green':
    console.log(`El color es ${color2}`)
    break
  case 'blue':
    console.log(`El color es ${color2}`)
    break
  case 'yelow':
    console.log(`El color es ${color2}`)
    break
  default:
    console.log(`El color ${color2} no esta en la lista`)
    break
}
let numberOfTheWeek = new Date().getDay()
switch (numberOfTheWeek) {
  case 1:
    console.log(`Hoy es Lunes`)
    break;
  case 2:
    console.log(`Hoy es Martes`)
    break;
  case 3:
    console.log(`Hoy es Miercoles`)
    break;
  case 4:
    console.log(`Hoy es Jueves`)
    break;
  case 5:
    console.log(`Hoy es Viernes`)
    break;
  case 6:
    console.log(`Hoy es Sabado`)
    break;
  default:
    console.log(`Hoy es Domingo`)
}
let bebida = 'Coke' //prompt('Que quieres beber hoy?') //Pepsi o Coke
let typeOfDrink
let stock = false
switch (bebida) {
  case 'Pepsi':
    typeOfDrink = 'Pepsi'
    stock = true
    break;
  case 'Coke':
    typeOfDrink = 'Coke'
    stock = true
    break
  default:
    console.warn('Lo siento pero no tenemos esa bebida')
    break;
}
if (stock === true) {
  console.log(`Aqui tiene su bebida ${typeOfDrink}`)
}


// FUNCIONES DECLARACIONES y EXPRESIONES
function greatings(firstName2 = 'Invitado sin nombre', lastName2 = 'y sin apellido') {//dejamos un valor por defecto 
  return `Hola, buenas tardes ${firstName2} ${lastName2}`
}
console.log(greatings('Andres', 'Lopez'))
let usersName = []
let usersData = ['ivan', 'Andres', 'celia', 'pablo']
for (let i = 0; i < usersData.length; i = i + 1) {
  storeUsersName(usersData[i])
}
function storeUsersName(firstName) {
  usersName.push(firstName)
}//Ahora si miramos en consola 'usersData' veremos todos los nombres que se han pasado de una rray a otro
let ivan = getUserName('Ivan', 'Matas') //Asignamos a una variable el resultado de una funcion
function getUserName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
(function () {// funcion auto-invocada
  console.warn(`Se acaba de arrancar una funcion auto-invocada`)
})();
let autoName = 'Peper';
(function (autoName) {
  console.log(`buenos dias ${autoName}`)
})(autoName)//si no meto la variable aqui no detectara el nombre



////CONTADOR
//Cadenas
//contar cuantos caracteres tiene una palabra. se incluye los espacios. Efecto Twitter
let lengthPalabra = "Esto es para contar en Nº de caracterees que hay en esta frase"//62
console.log(lengthPalabra.length)
//No podemos calcular la longitud de un numero EXCEPTO si esta en modo String
let lengthNumero = lengthPalabra.length //62
console.log(lengthNumero.length) //undefined

////CONCADENACION
let fistName = 'Manuel'
let lastName = 'Perez'
//String
let completeName = fistName + ' ' + lastName // Forma de concadenar String A LO BRUTO
console.log(completeName) //Manuel Perez
let concatCompleteName = fistName.concat(' ', lastName) // otra forma de concadenar Strings
console.log(concatCompleteName) //Manuel Perez

////TRANSFORMACION
let mayusName = fistName.toUpperCase() //a MAYUSCULAS 
let minusName = lastName.toLowerCase() //a mimusculas
console.log(mayusName + ' ' + minusName) //MANUEL perez
// //variables
// var nombre = 'tipo de dato';
// let nombre = 'tipo de dato'; //ocupa menos espacio.
// //constante
// const nombre = 'tipo de dato';//No cambian su valor una vez declarada. Se tiene que declarar cuandoe es inicializar.

// // tipo de datos
// let type = 'String(cadena de texto), number(numeros), boolean(true/false)';
// //Casos especiales
// let undefined = 'Significa que no esta inicializada,osea, que no tiene valor';
// let nulll = null; //Tiene un valor nulo
// let nan = NaN; //no es un numero.




// class Animal {

//  constructor (especie, edad, color) {
//   this.especie = especie;
//   this.edad = edad;
//   this.color = color;
//   this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
 
//  }

//   verInfo () {
//   document.write(this.info)
//  }

// }

// class Perro extends Animal {
//  constructor(especie,edad,color,raza){
//   super(especie,edad,color);
//   this.raza = raza;
//  }

//  static ladrad(){
//   alert('!WAW')
//  }

//  set setRaza (newRaza){
//   this.raza = newRaza;
//  }
 
//  get getRaza(){
//   return this.raza;
//  }

// }

// const perro = new Animal('mamifero',38,'marron');

// perro.setRaza = 'Pedro';



// let cadena = "Esto cadena es una ";
// // let cadena2 = " cadena2"

// resultado = cadena.concat(cadena2)
// resultado = cadena.startsWith(cadena2) //FALSE
// resultado = cadena.endsWith(cadena2) // FALSE
// resultado = cadena.includes(cadena2) //VERDADERO ESTA INCLUIDO
// resultado = cadena.indexOf("cadena") //Muestra la posicion de la primera letra de esa palabra
// resultado = cadena.lastIndexOf("cadena") //arranca desde atras y nos dice cual es el ultimo
// resultado = cadena.padStart(9,"c") //rellena la cadena hasta tal punto al principio
// resultado = cadena.padEnd(9,"10") //rellena la cadena despues de la palabra
// resultado = cadena.repeat(2) // repite depende la cantidad que le digamos
// resultado = cadena.split(",")//Divide la palabra depende el caracter palabra que le pasemos y lo guarda en un array
// resultado = cadena.substring(0,2)//devuelve lo que se selecciona creando un nuevo string
// resultado = cadena.toLocaleLowerCase("cadena") //CONVIERTE TODO A MINISCULA
// resultado = cadena.toUpperCase("cadena")//CONVIERTE A MAYUSCULA
// resultado = cadena.toString("cadena")//CONVIERTE A STRING
// resultado = cadena.trim("cadena")//remueve los espacios
// resultado = cadena.trimEnd("cadena")//remueve los espacios al final
// resultado = cadena.trimStart("cadena")//remueve los espacios al principio


// let nombres = ["Matias","Mateo","Lara","Martin"]

// nombres.pop() //elimina el ultimo del array
// nombres.shift() //elimina el primero
// nombres.push("elemento") //Agrega un elemento al final
// nombres.reverse() //invierte el orden de un array
// nombres.unshift(1,3) //Agrega uno o mas elemetnos y devuelve la longitud del array
// nombres.sort()/ /Ordena el array y se basa en el orden del diccionario
// nombres.splice(1,3,"roberto","gustavo")//Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// nombres.join("-"); //siver para convertir a string y en parametros le pasamos el separador
// nombres.slice(0,2) //devuelve los elementos que queremos sin el ultimo incluido
// nombres.toString()
// nombres.indexOf()
// nombres.lastIndexOf()
// nombres.includes()
// let res = nombres.filter(nombre => numero.length > 4) 
// let res2 = nombres.forEach()


// let palabra = "anana";
 
// let palabraAlReves = palabra.split("").reverse().join("")

// if (palabra === palabraAlReves){
//  document.write("Es palindromo")
// }else{
//  document.write("No es palindromo")
// }

// numero = Math.sqrt(25);//raiz cuadrada
// numero = Math.cbrt(25);//raiz cubica
// numero = Math.max(4,1,2,4,5,7,8,5,21,1234,235,457,213);//numero mas grande
// numero = Math.min(2,4,5,3,2,5,9,992);//numero mas chiquito
// numero = Math.random()*100;//numero random de 0-100
// numero = Math.round("varaible a redondear");
// numero = Math.floor("variable a redondear");//redondear para abajo
// numero = Math.PI;//devuelve el numero pi

//diferencia entre console.log y console.info es que info es un mensaje informative y log es para depuracion
//console.table sirve para crear una tabla con objetos o arrays

//Metedos de seleccion de elementos
// "document" es una interface
// document.getElementById('nombreid')
// document.getElementsByTagName("tag de el elemento ejemplo 'p' para <p></p>")
// document.querySelector(". # Y DEMAS PARA SELECCION CON SELECTORES")
// document.querySelectorAll(". # Y DEMAS PARA SELECCION CON SELECTORES PERO ESTE SELECCIONA TODOS LOS QUE COINCIDAN")

// const rangoEtario = document.querySelector('.rangoEtario')
// rangoEtario.setAttribute("type","text")
// console.log(rangoEtario.getAttribute("type"));
// rangoEtario.removeAttribute("type")

// const titulo = document.getElementById('hola')
// titulo.setAttribute('contentEditable', 'true')
// atributo hidden sirve para ocultar un elemento
// tabindex sirve para focusear titulo.setAtribute('tabindex', '0')

// const input = document.querySelector('.input-normal')

// const input2 = document.querySelector('.img')

// input.className = 'matias'
// input.type = 'text'
// input2.accept = 'image/png'
// input2.minlength = 3
// input.placeholder = 'nasgdasd'
// input.required = 'required' 



// const titulo2 = document.querySelector('titulo')
// titulo2.style.color = 'red'
// titulo2.style.backgroundColor = 'blue'
// titulo2.classList.add('') //agrega lo que pongas + lo que ya esta en la class
// titulo2.classList.remove('')//mismo per elimina
// titulo2.classList.item(1) //position de la class que queremos seleccionar
// titulo2.classList.contains('')//PALABRA A PREGUNTAR SI CONTIENE
// titulo2.classList.toggle('')//EN CASO QUE TENGA LA CLASE LA ELIMINA Y EN CASO DE QUE NO LA TENGA LA AGREGA
// titulo2.classList.replace('claseacambiar','nuevaclase')
 



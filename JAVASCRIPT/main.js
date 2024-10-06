//SECCION 1 - Ejercicio 2
/*
let a=5;
let b=10;
let c = a+b;

console.log("Valor de a=", a, ", valor de b=", b);
console.log("La suma del valor a + b es= ", c);
console.log(" ");
*/

//Ejercicio 3

/*
let nombre = prompt("Ingrese su nombre: ");
console.log("Hola", nombre,"!");
console.log("");
*/

//SECCION 2 - Ejercicio 1

/*
let d=29;
let e=10;
let f=23;
let mayor;
if(d>e && d>f){
    mayor=d;
}else if(e>d && e>f){
    mayor=e;
} else {
    mayor=f;
}
console.log("Los valores declarados son:",d,";",e,";",f);
console.log("El mayor de los numeros es:",mayor);
console.log(" ");

//Ejercicio 2

let num = prompt("Ingresa un nro y te dire si es par o impar");

if(num %2 === 0){
    console.log("El numero",num,"es par");
}else{
    console.log("El numero",num,"es impar");
}
*/


//SECCION 3 - Ejercicio 1

/*
let g= 10;
console.log("BUCLE WHILE")
while(g<=10 && g>=0){
    console.log("Esta es la iteracion", g);
    g--;
}
*/

//Ejercicio 2

/*
let numero;
do{
    numero= prompt("Ingrese un numero mayor a 100:");
    if(numero>100){
        console.log("El numero es mayor a 100");
        console.log("El numero ingresado es: ",numero);
    }else{
        console.log("El numero",numero,"es menor a 100");
    }
}while(numero<=100);
*/

//SECCION 4 - Ejercicio 1

/*
function esPar(valor){
    return valor % 2 === 0;
  }
  console.log("Funcion Par:")
  console.log("El número 3 es Par:", esPar(3));
  console.log("El número 8 es Par:", esPar(8));
  console.log("El número 102 es Par:", esPar(102));
  console.log("El número 15 es Par:", esPar(15));
  */

  //Ejercicio 2

/*
  const convertirCelsiusAFahrenheit = (celsius) => {
    let far = celsius*1.8+32;
    console.log(celsius,"°C son equivalentes a", far,"°F");
  };
  convertirCelsiusAFahrenheit(30);
*/

//SECCION 5 - Ejercicio 1

/* 
let persona ={
    nombre: "Lucas",
    apellido: "Garcia",
    edad: 21,
    ciudad: "Maipu",

    cambiarCiudad: function (nuevaCiudad){
        this.ciudad=nuevaCiudad;
        return this.ciudad;
    }
}
console.log("Persona:", persona.nombre, persona.apellido,"; Edad:",persona.edad,"; Ciudad:",persona.ciudad);
console.log("La Ciudad de", persona.nombre, persona.apellido, "ha sido actualizada: ", persona.cambiarCiudad("Formosa"));
*/

//Ejercicio 2

/* let libro = {
    titulo: "Azul de Primera",
    autor: "Alex Arce",
    año: 2023,
}
let libro1 = {
    titulo: "Otro Libro",
    autor: "Autor",
    año: 1978,
}

function antiguedad (libro){
    return 2024-libro.año>=10;
}

console.log("El libro",libro.titulo,"es antiguo:",antiguedad(libro));
console.log("El libro",libro1.titulo,"es antiguo:",antiguedad(libro1));
 */

//SECCION 6 - Ejercicio 1

/*
let arreglo = [1,2,3,4,5,6,7,8,9,10];
let multi = arreglo.map(
    (elem)=>{
        return elem *2;
    }
)
console.log("Numeros del arreglo: ",arreglo);
console.log("Numeros multiplicados por 2:", multi);
 */

//Ejercicio 2

/*
let pares =[];
for(let i = 1; i <= 20; i ++){
    if(i%2 ===0){
        pares.push(i);
    }
}
console.log("Los primeros 10 numeros pares son:", pares);
*/

//SECCION 7 - Ejercicio 1

/*
function cambiarColor (){
    const parrafo =document.querySelectorAll("p");
    parrafo.forEach(function(p){
        p.style.color="blue";
    });
}
boton.addEventListener("click", cambiarColor); //ASOCIO EL "CLICK" A LA FUNCION "cambiarColor"
*/

//Ejercicio 2
/*
function mostrarAlert (){
    let campo = document.getElementById("text").value;
    alert("Has ingresado el valor: "+ campo);
}

document.getElementById("alerta").addEventListener("click",mostrarAlert);
*/

//SECCION 8- Ejercicio 1

/* 
function agregClick (){
    let elem = document.querySelectorAll("#lista li");
    elem.forEach(function(li){
        li.addEventListener("click",function(){
            mostrarElem(li);
        });
    });
}
function mostrarElem(elemento){
    console.log(elemento.textContent);
}
document.addEventListener("DOMContentLoaded", agregClick); */

//Ejercicio 2

/*
document.getElementById("deshabilitar").addEventListener("click", function() {
    document.getElementById("campotexto").disabled = true;
  });
  
  document.getElementById("habilitar").addEventListener("click", function() {
    document.getElementById("campotexto").disabled = false;
  });
  */

  //SECCION 9 

 /*  
document.addEventListener('DOMContentLoaded', function() {
    const correoInput = document.getElementById('correo');
    const correoGuardadoTexto = document.getElementById('correoGuardado');
    const eliminarBtn = document.getElementById('eliminarCorreo');  // Aquí el ID correcto
  
    // Verificar si hay un correo guardado al cargar la página
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        mostrarCorreoGuardado(correoGuardado);
    }
  
    // Manejar el envío del formulario para guardar el correo
    document.getElementById('formCorreo').addEventListener('submit', function(event) {
        event.preventDefault();  // Evitar que se recargue la página
        const correo = correoInput.value;
        
        if (correo) {
            localStorage.setItem('correo', correo);  // Guardar el correo en localStorage
            mostrarCorreoGuardado(correo);           // Mostrar el correo en el DOM
        }
    });
  
    // Eliminar el correo del localStorage
    eliminarBtn.addEventListener('click', function() {
        localStorage.removeItem('correo');  // Eliminar el correo de localStorage
        correoGuardadoTexto.textContent = 'Correo guardado: ';  // Limpiar el texto en el DOM
        eliminarBtn.style.display = 'none';  // Ocultar el botón de eliminar
    });
  
    // Función para mostrar el correo guardado
    function mostrarCorreoGuardado(correo) {
        correoGuardadoTexto.textContent = `Correo guardado: ${correo}`;
        eliminarBtn.style.display = 'block';  // Mostrar el botón de eliminar
    }
  });
   */
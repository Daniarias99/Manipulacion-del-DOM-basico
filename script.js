// esto es para imprimir cada etiqueta del html que tenemos, hay que volverlas constantes y con el nombre que se crearon, ojo en la parte de los strenn como se colocan//
//usar la funcion document.querySelector("""); para cada elemento//

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

// creamos un objet para mandar a imprimir a la console del navegador//


console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// o imprimir un solo elemento//
// le podemos dar var al input en la ventana anterior//

console.log(input.value);


//para cambiar el nombre del titulo h1 u otra etiqueta usamos la propiedead .innerHTML//
// y adiconar <br> para bajar de linea//
h1.innerHTML = "Hoy es el lanzamiento <br> FIFA 23";
// para escribir en forma de texto y en una sola linea cambiamos el .innerHTMIL por .innerText//

// para crear atributos por ejemple le colcocamos  a la etiqueta h1 pantalla = "plazing">..
//luego para imprimir ese atributo usamos la funcion h1.getAttribute("pantalla"); dentro de un consolog

//console.log(h1.getAttribute("pantalla")); ejemplo que pase a comentario para editarlo

//entonces nos imprime platzing en la consola del nv//

// para modificar un atributo de etiqueta class usamos setAttribute(" aqui el valor que tiene", "luego el nuevo valor");//

console.log(h1.getAttribute("class"));

h1.setAttribute("class", "rojo");

// en la consola va a seguir siendo verde, pero si lo impeccionamos va  salir rojo//

//funcion para especifiacamente clases h1.classList/ para adicionar classs h1.class.add("naranja"); 
//para eliminar una class h1.classList.remove("rojo");/
// para preguntar si un elemento tinene una clase y nos responda true o false - h1.classList.contains("rojo");
//para modificar el input.value = y aqui a lo que cambiamos

input.value = 567
//para crear una imagen y colocarla en la etiqueta que escojamos

const img = document.createElement("img");
img.setAttribute("src", "https://sm.ign.com/ign_es/screenshot/default/image002-1_3te9.jpg");
console.log(img);

pid.innerHTML = ("");      //este es para borrar el parrafito de pid que creamos al principio
pid.append(img);   //este es para que la imagen se vea 

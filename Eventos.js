const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#Calculo1");
const input2 = document.querySelector("#Calculo2");
const btn = document.querySelector("#btnCalcular");
const pResul = document.querySelector("#result");
const pid = document.querySelector("#pid");

//btn.addEventListener("click", btnOnClick);

//function btnOnClick() {
    //const sumaInputs = (Number(input1.value)  +  parseInt(input2.value));
   // pResul.innerText = "Resultado: " + sumaInputs;
//}



//recordar la funcion number para que sume numeros de forma natural//

//entonces, borramos el btn0nclick del html y escribimos esta nueva funcion nombreconstante.addEventListener//

//ahora pondre la funcion de arribe en forma comentario par hacerlo de otra forma mas interesante//


//para realizar eventos en forma de formulario//

form.addEventListener("submit", sumarInputvalues);

function sumarInputvalues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = (Number(input1.value)  +  parseInt(input2.value));
    pResul.innerText = "Resultado: " + sumaInputs;
}


//recodar agg submit y la propiedad .preventDefault(); para que el resultado se quede












const img = document.createElement("img");
img.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/43/43148.png");
console.log(img);

pid.append(img);





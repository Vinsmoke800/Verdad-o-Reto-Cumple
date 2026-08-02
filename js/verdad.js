// ==========================================
// MÓDULO DE VERDAD
// ==========================================


// Elementos de la pantalla Verdad

const pantallaInicio = document.getElementById("pantallaInicio");

const pantallaVerdad = document.getElementById("pantallaVerdad");

const cartaVerdad = document.querySelector(".verdad");

const textoPregunta = document.getElementById("textoPregunta");

const btnOtraPregunta = document.getElementById("btnOtraPregunta");

const btnReiniciarVerdad = document.getElementById("btnReiniciarVerdad");



// ==========================================
// SISTEMA DE MAZO
// ==========================================


let mazoPreguntas = [];


function mezclarPreguntas(){

    mazoPreguntas = [...preguntasVerdad];


    for(
        let i = mazoPreguntas.length - 1;
        i > 0;
        i--
    ){

        let j = Math.floor(
            Math.random() * (i + 1)
        );


        [
            mazoPreguntas[i],
            mazoPreguntas[j]

        ] =
        [
            mazoPreguntas[j],
            mazoPreguntas[i]
        ];

    }

}


function obtenerPregunta(){

    if(mazoPreguntas.length === 0){

        mezclarPreguntas();

    }


    return mazoPreguntas.pop();

}



// ==========================================
// MOSTRAR PANTALLA
// ==========================================


function abrirVerdad(){

    pantallaInicio.classList.remove("activa");


    pantallaVerdad.classList.add("activa");


    nuevaPregunta();

}



// ==========================================
// CAMBIAR PREGUNTA
// ==========================================


function nuevaPregunta(){


    const carta = document.getElementById(
        "cartaPregunta"
    );


    // Animación de salida

    carta.classList.remove("girar");


    void carta.offsetWidth;


    carta.classList.add("girar");



setTimeout(()=>{


    textoPregunta.textContent =
    obtenerPregunta();


},350);


}



// ==========================================
// VOLVER AL INICIO
// ==========================================


function cerrarVerdad(){


    pantallaVerdad.classList.remove("activa");


    pantallaInicio.classList.add("activa");


}



// ==========================================
// EVENTOS
// ==========================================


cartaVerdad.addEventListener(
    "click",
    abrirVerdad
);



btnOtraPregunta.addEventListener(
    "click",
    nuevaPregunta
);



btnReiniciarVerdad.addEventListener(
    "click",
    cerrarVerdad
);



// Inicializar mazo

mezclarPreguntas();
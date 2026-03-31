const cria = document.getElementById("normal");
const btn = document.getElementById("btn");

const estados = {
    normal:  "normal.png",
    puto: "bravo.png",
    morto: "morto.png",
    comendo: "comendo.png",
    feliz: "feliz.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 15){
                cria.src = estados.puto;
            }

            if(contador == 30){
                cria.src = estados.morto;
            }
        }, 1000);
}


controlador();

function alimentar() {

    if (contador >= 30) {
        console.log("A criatura morreu. Não pode alimentar.");
        return;
    }
    
    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

     if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.feliz;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

const fundoDia = "mundo.png";
const fundoNoite = "mundo_noite.png";
let horas = 0;
let intervaloFundo = null;

function atualizarFundo() {

    if (intervaloFundo) clearInterval(intervaloFundo);

    intervaloFundo = setInterval(() => {

        horas++;
        console.log("hora do dia:",horas);

        if (horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
        } else {
            document.body.style.backgroundImage = `url('${fundoDia}')`;
        }

        if (horas >= 24) horas = 0;

    }, 1000);

} 

controlador();
atualizarFundo();



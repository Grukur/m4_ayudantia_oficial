import {A, E, I, O, U} from "./clases/Tipos.js";
import data from "./data.js";

let vocales = [];
let imagenSrc;
let sonidoOrg;

const cardCreate = () => {
    try {
        const template = document.getElementById('Vocales');
        template.innerHTML = ``;
        vocales.forEach((key, i) => {
            template.innerHTML += `
            <div class="px-3 pb-2">
            <div class="bg-dark text-white">
              <img
                height="200"
                src="./assets/imgs/${key.img}" 
                data-bs-toggle="modal"  
                data-bs-target="#exampleModal" 
                onclick="modalDetails('${i}')" 
              />
              <div>
                <button onclick="playSound('${key.sonido}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
              </div>
            </div>
          </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

window.playSound = (sonido) => {
    try {
        const vocal = vocales.find((item)=>{
            return item.sonido === sonido;
        })
        sonido == 'A.mp3' ? vocal.cantoA()
        : sonido == 'E.mp3' ? vocal.cantoE()
        : sonido == 'I.mp3' ? vocal.cantoI()
        : sonido == 'O.mp3' ? vocal.cantoO()
        : sonido == 'U.mp3' ? vocal.cantoU()
        : undefined;

        /* let musica = new Audio(`./assets/sounds/${sonido}`);
        musica.play(); */
    } catch (error) {
        console.log(error);
    }
}

window.modalDetails = (i) => {
    try {
        const modalBody = document.getElementsByClassName('modal-body')[0];
        const vocal = vocales[i];
        modalBody.innerHTML = `
        <div class="px-3 pb-2">
        <div class="card w-50 m-auto bg-dark text-white border-0">
          <img
            src="./assets/imgs/${vocal.img}"
            class="d-block m-auto w-100"
          />
          <div class="card-body text-center">
            <h6 class="card-text ">${vocal.rango}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${vocal.comentario}</p>
          </div>
        </div>
        </div>
        `
    } catch (error) {
        console.log(error)
    }
};

document.getElementById('vocal').addEventListener('change', async (e) => {
    try {
        const vocalSelected = e.target.value;
        const vocales = await data.getData()
        const vocalObject = await vocales.find((letra)=>{
            return letra.nombre === vocalSelected;
        })
        imagenSrc = `${vocalObject.img}`;
        sonidoOrg = `${vocalObject.sonido}`;
        const preview = document.getElementById('preview');
        preview.parentElement.classList.remove('p-5')
        preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
    } catch (error) {
        console.log(error);
    }
});

document.getElementById('btnRegistrar').addEventListener('click', () =>{
    try {
        const nombre = document.getElementById('vocal').value;
        const rango = document.getElementById('rango').value;
        const comentario = document.getElementById('comentarios').value;
        if(nombre && rango && comentario){
            let vocal = nombre == 'A' ? new A(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'E' ? new E(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'I' ? new I(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'O' ? new O(nombre, rango, comentario, imagenSrc, sonidoOrg)
            : nombre == 'U' ? new U(nombre, rango, comentario, imagenSrc, sonidoOrg)
            :undefined;

            /* let voca;
            if(nombre == 'A'){
                voca = new A(nombre, rango, comentario, imagenSrc, sonidoOrg)
            }else if (nombre == 'E'){
                voca = new E(nombre, rango, comentario, imagenSrc, sonidoOrg)
            } */

            vocales.push(vocal);
            cardCreate();
        } else{
            alert('Faltan datos')
        }
    } catch (error) {
        console.log(error)
    }
});
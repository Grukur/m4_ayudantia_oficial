import Vocales from "./Vocales.js";

const audioPlayer = document.getElementById('player');

export class A extends Vocales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoA(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class E extends Vocales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoE(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class I extends Vocales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoI(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class O extends Vocales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoO(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
export class U extends Vocales{
    constructor(nombre, rango, comentario, img, sonido){
        super(nombre, rango, comentario, img, sonido);
    }

    cantoU(){
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
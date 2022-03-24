const contenidoPrincipal = document.querySelector("#contenidoPrincipal");

const formCaptcha = document.querySelector("#formCaptcha");

const memes = [
    "https://i.pinimg.com/564x/fa/79/51/fa795192f0378c9ccf95e1a8547f7611.jpg",
    "https://i.pinimg.com/564x/cb/d0/8f/cbd08ffef999f4b019f4db80cd25315e.jpg",
    "https://i.pinimg.com/564x/0c/4d/ff/0c4dff69eaba1c7d1421f5573ab42d8e.jpg",
    "https://i.pinimg.com/564x/65/c5/44/65c5446630aef937116d22a66e063873.jpg",
    "https://i.pinimg.com/564x/8d/dc/74/8ddc74ff7d6007136c513ddbf8705c3c.jpg",
    "https://i.pinimg.com/564x/6a/fe/1c/6afe1c490da7e72a8837e57677eb58e1.jpg",
    "https://i.pinimg.com/564x/69/17/07/691707c99828a00b56e822d9f3417daf.jpg",
];
const img = document.querySelector("#memeImg");

const abecedarioNumero = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
];

function reiniciarContenido() {
    cambiarImagen();
    generarCaptcha();
}

function validarForm(e) {
    e.preventDefault();
    const input = document.querySelector("#captchaText").value;
    validarCaptcha(input);
}

function generarCaptcha() {
    let textCaptcha = "";
    let parrafoCaptcha = document.querySelector("#codigoCaptcha");

    for (i = 0; i <= 6; i++) {
        textCaptcha +=
            abecedarioNumero[Math.floor(Math.random() * abecedarioNumero.length)];
    }
    parrafoCaptcha.textContent = textCaptcha;
}

function validarCaptcha(input) {
    parrafoCaptcha = document.querySelector("#codigoCaptcha").textContent;

    if (input === parrafoCaptcha) {
        reiniciarContenido();
    } else {
        agregarMensaje("Captcha Invalido", "error");
    }
}

function agregarMensaje(mensaje, tipo) {
    let div = document.createElement("div");
    div.classList.add(tipo);
    div.textContent = mensaje;
    contenidoPrincipal.append(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
}

function cambiarImagen() {
    let numRandom = Math.floor(Math.random() * memes.length);
    img.src = memes[numRandom];
}

function eventListeners() {
    window.addEventListener("DOMContentLoaded", reiniciarContenido);
    formCaptcha.addEventListener("submit", validarForm);
}

eventListeners();
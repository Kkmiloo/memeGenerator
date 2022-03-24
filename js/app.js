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

class UI {
  cambiarImagen() {
    const img = document.querySelector("#memeImg");
    let numRandom = Math.floor(Math.random() * memes.length);
    img.src = memes[numRandom];
  }

  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add(tipo);
    divMensaje.textContent = mensaje;
    document.querySelector("#contenidoPrincipal").append(divMensaje);
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  generarCaptcha() {
    let textCaptcha = "";
    const parrafoCaptcha = document.querySelector("#codigoCaptcha");
    for (let i = 0; i < 6; i++) {
      textCaptcha +=
        abecedarioNumero[Math.floor(Math.random() * abecedarioNumero.length)];
    }
    parrafoCaptcha.textContent = textCaptcha;
  }
}

function validarForm(e) {
  e.preventDefault();
  const input = document.querySelector("#captchaText").value;
  validarCaptcha(input);
}

function validarCaptcha(input) {
  parrafoCaptcha = document.querySelector("#codigoCaptcha").textContent;

  if (input === parrafoCaptcha) {
    reiniciarContenido();
    ui.imprimirAlerta("Captcha Valido", "success");
    return;
  } else {
    ui.imprimirAlerta("Captcha Invalido", "error");
    return;
  }
}

function reiniciarContenido() {
  ui.cambiarImagen();
  ui.generarCaptcha();
}

function eventListeners() {
  window.addEventListener("DOMContentLoaded", reiniciarContenido);
  formCaptcha.addEventListener("submit", validarForm);
}

const ui = new UI();
eventListeners();

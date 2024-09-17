window.onload = inicio;
let btn;
let veces = 0;

function inicio() {
  btn = document.querySelector(".boton");
  btn.onclick = modificar;
  fase0();
}

function modificar() {
  veces++;
  if (veces == 1) {
    document.querySelector(".precio").innerHTML = `5€`;
    document.querySelector(".descripcion").innerHTML = `Café para llevar`;
    document.querySelector(
      ".imagen"
    ).innerHTML = `<img src = "img/capuchino.png">`;
    btn.classList.add("fase1");
  } else if (veces == 2) {
    document.querySelector(".precio").innerHTML = `10€`;
    document.querySelector(".descripcion").innerHTML = `Desayuno`;
    document
      .querySelector("section")
      .insertAdjacentHTML(
        "beforeend",
        `<div class = "imagen2"><img src="img/cake.png"></div>`
      );
    btn.classList.add("fase2");
  } else {
    btn.classList.remove("fase1");
    btn.classList.remove("fase2");
    fase0();
    veces = 0;
  }
}

function fase0() {
  btn.innerHTML = `<section>
        <div class="precio"></div>
        <div class="imagen"></div>
      </section>
      <div class="descripcion"></div>`;

  document.querySelector(".precio").innerHTML = `2€`;
  document.querySelector(".descripcion").innerHTML = `Café de Colombia`;
  document.querySelector(
    ".imagen"
  ).innerHTML = `<img src = "img/espresso.png">`;
  btn.classList.add("fase0");
}

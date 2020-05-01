var imagem = document.getElementById("container-imagem");
var estrela1 = document.getElementById("e1");
var estrela2 = document.getElementById("e2");
var estrela3 = document.getElementById("e3");
var estrela4 = document.getElementById("e4");
var estrela5 = document.getElementById("e5");

function selecionar_imagem(image) {
  imagem.style.opacity = 0;
  imagem.style.transform = "translateX(-60px)";
  setTimeout(() => {
    imagem.style.opacity = 1;
    imagem.style.transform = "translateX(0px)";
    imagem.src = image.src;
  }, 800);
}

function checar1() {
  estrela1.classList.add("checked");
  estrela2.classList.remove("checked");
  estrela3.classList.remove("checked");
  estrela4.classList.remove("checked");
  estrela5.classList.remove("checked");
}

function checar2() {
  estrela1.classList.add("checked");
  estrela2.classList.add("checked");
  estrela3.classList.remove("checked");
  estrela4.classList.remove("checked");
  estrela5.classList.remove("checked");
}

function checar3() {
  estrela1.classList.add("checked");
  estrela2.classList.add("checked");
  estrela3.classList.add("checked");
  estrela4.classList.remove("checked");
  estrela5.classList.remove("checked");
}

function checar4() {
  estrela1.classList.add("checked");
  estrela2.classList.add("checked");
  estrela3.classList.add("checked");
  estrela4.classList.add("checked");
  estrela5.classList.remove("checked");
}

function checar5() {
  estrela1.classList.add("checked");
  estrela2.classList.add("checked");
  estrela3.classList.add("checked");
  estrela4.classList.add("checked");
  estrela5.classList.add("checked");
}
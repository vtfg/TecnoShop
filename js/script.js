// Ideia:
/* Ao clicar nas setas mudar a imagem da rx */

var img = document.getElementById("imagem");
var coracao = document.getElementsByClassName('coracao')
var loader = document.getElementsByClassName('loader')

function setaDir() {
  img.style.transform = "translateX(60px)";
  img.style.opacity = 0;
  setTimeout(() => {
    img.classList.add("mudanca");
    img.style.opacity = 1;
    img.src = "../img/produtos/rx-foto2.webp";
    img.style.transform = "translateX(0px)";
  }, 1000);
}

function setaEsq() {
  img.style.transform = "translateX(-60px)";
  img.style.opacity = 0;
  setTimeout(() => {
    img.classList.remove("mudanca");
    img.style.opacity = 1;
    img.src = "../img/produtos/gigabyte-rx-5500-xt-gaming-oc-4gb.png";
    img.style.transform = "translateX(0px)";
  }, 1000);
}

function favorite(item) {
 coracao.item(item).classList.remove('far')
 coracao.item(item).classList.add('fas')
 coracao.item(item).classList.add('checked')
}

$(window).on("load", function() {
   $('.loader').fadeOut(1000);
});
var imagem = document.getElementById("imagem");
var musica = document.getElementById("musica");

imagem.addEventListener("click", function () {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

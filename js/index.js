//tentativa de fazer um hub de imports, porém não finciona com o slider ,-,
document.write(
  '<script type="text/javascript" src="./js/owl/setup.js"></script>',
  '<script type="text/javascript" src="./js/owl/jquery.min.js"></script>',
  '<script type="text/javascript" src="./js/owl/owl.carousel.min.js"></script>',
  '<script src="https://kit.fontawesome.com/495a63b11e.js" crossorigin="anonymous"></script>'
);

var filmes = document.getElementById("film-container");

let i = 0;

while (i < 50) {
  filmes.innerHTML += `
  <div class="item">
    <div class="info-container">
      <div class="info-sub-container">
        <h1 class="info-title">Como as imagens são geradas ?</h1>
        <h2 class="info-description">
          Os filmes são inseridos via JavaScript usando um while loop e a api do unsplash, para que as imagens inseridas sejam diferentes uma das outras foi necessário alterar as proporções e adicoinar +1 a cada elemento pelo loop
        </h2>
      </div>
      <button id="film-bottom" class="botao">
        <i class="fas fa-play-circle"></i>
        Assistir
      </button>
    </div>
    <img
    class="box-film"
    src="https://source.unsplash.com/${720}x${1080 + i}/"
    alt="item"
  />
  </div>
`;

  i++;
}

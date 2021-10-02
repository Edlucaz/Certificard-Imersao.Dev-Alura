function mudaTema() {
  var temaDark = document.body.classList.toggle("dark");
  var logoGitHub = document.getElementById("gitHub");
  var logoCodepen = document.getElementById("codepen");
  var botaoTema = document.getElementById("botaoTema");
  if (temaDark == true) {
    logoGitHub.src = "https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png";
    logoCodepen.src = "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-White-Small.png";
    botaoTema.textContent = "Modo Light";
  } else {
    logoGitHub.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    logoCodepen.src = "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
    botaoTema.textContent = "Modo Dark";
  }
}

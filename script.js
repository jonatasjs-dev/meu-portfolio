//console.log("Olá, mundo");

//document.querySelector("");

const elemTexto = document.querySelector(".sobre");
const elemInformacoes = document.querySelector(".informacoes");
const elemBotaoInformaceos = document.querySelector(".botao-informacoes");
const elemBotaoLight = document.querySelector(".botao-lihgt");
const elemBotaoDark = document.querySelector(".botao-dark");

//adicionar evendo de click no botão
elemBotaoInformaceos.addEventListener("click", function () {
  console.log("clicou no botão informações");
  elemInformacoes.classList.toggle("visivel");

  //console.log(elemBotaoInformaceos.classList.contains("visivel"));

  if (elemInformacoes.classList.contains("visivel")) {
    elemBotaoInformaceos.textContent = "Ocultar informações";
  } else {
    elemBotaoInformaceos.textContent = "Exibir informações";
  }
});

//Adicionar evento de click nos botões light/dark
elemBotaoLight.addEventListener("click", function () {
  console.log("Clicou no botão light");
  document.body.classList.add("light");
});

elemBotaoDark.addEventListener("click", function () {
  console.log("Clicou no botão Dark");
  document.body.classList.remove("light");
});
